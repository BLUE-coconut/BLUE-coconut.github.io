<template>
  <div class="my-box">
    <div class="container">
      <!-- 加载中 -->
      <div v-if="loading" class="post-loading">
        <div class="post-loading__spinner" />
        <p>正在加载文章...</p>
      </div>

      <!-- 错误 -->
      <div v-else-if="error" class="post-error">
        <div class="post-error__icon">⚠️</div>
        <h2>加载失败</h2>
        <p>{{ error }}</p>
        <router-link to="/blog" class="post-error__link">返回博客 →</router-link>
      </div>

      <!-- 未找到 -->
      <BlogPostNotFound v-else-if="!postMeta" />

      <!-- 文章主体 -->
      <section v-else class="section post-layout">
        <ReadingProgress :target="articleRef" />

        <PostBreadcrumb
          :category-id="postMeta.categoryId"
          :post-title="postMeta.title"
        />

        <div class="post-container">
          <article ref="articleRef" class="post-content post-body">
            <!-- Hero：60px+ 大字标题 -->
            <header class="post-hero">
              <div class="post-hero__meta">
                <router-link
                  v-if="category"
                  :to="`/blog/${category.id}`"
                  class="post-hero__category"
                >
                  {{ category.name }}
                </router-link>
                <span class="post-hero__sep">·</span>
                <time class="post-hero__date">{{ postMeta.updateTime }}</time>
                <template v-if="postMeta.readTime">
                  <span class="post-hero__sep">·</span>
                  <span class="post-hero__readtime">{{ postMeta.readTime }}</span>
                </template>
              </div>
              <h1 class="post-hero__title">{{ postMeta.title }}</h1>
              <p v-if="postMeta.description" class="post-hero__lead">
                {{ postMeta.description }}
              </p>
              <div v-if="postMeta.tags?.length" class="post-hero__tags">
                <span v-for="tag in postMeta.tags" :key="tag" class="post-hero__tag">
                  #{{ tag }}
                </span>
              </div>
            </header>

            <!-- 正文 -->
            <div v-if="bodyHtml" class="post-body__content" v-html="bodyHtml" />

            <!-- 上一篇/下一篇 -->
            <nav v-if="adjacent.prev || adjacent.next" class="post-pager">
              <router-link
                v-if="adjacent.prev"
                :to="`/blog/${adjacent.prev.categoryId}/${adjacent.prev.id}`"
                class="post-pager__item post-pager__item--prev"
              >
                <span class="post-pager__direction">← Previous</span>
                <span class="post-pager__title">{{ adjacent.prev.title }}</span>
              </router-link>
              <span v-else class="post-pager__item post-pager__item--empty" />
              <router-link
                v-if="adjacent.next"
                :to="`/blog/${adjacent.next.categoryId}/${adjacent.next.id}`"
                class="post-pager__item post-pager__item--next"
              >
                <span class="post-pager__direction">Next →</span>
                <span class="post-pager__title">{{ adjacent.next.title }}</span>
              </router-link>
            </nav>
          </article>

          <!-- TOC -->
          <aside v-if="toc.length > 0" class="post-toc">
            <TableOfContents :toc="toc" :active-id="activeId" @navigate="scrollToSection" />
          </aside>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, toRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogPost } from '@/composables/useBlogPost'
import { useScrollspy } from '@/composables/useScrollspy'
import { getCategory, getAdjacentPosts } from '@/blogs'
import TableOfContents from './components/TableOfContents.vue'
import ReadingProgress from './components/ReadingProgress.vue'
import PostBreadcrumb from './components/PostBreadcrumb.vue'
import BlogPostNotFound from './BlogPostNotFound.vue'
import '@/blogs/styles/content.css'

const props = defineProps<{
  categoryId: string
  postId: string
}>()

const route = useRoute()
const articleRef = ref<HTMLElement | null>(null)

const categoryIdRef = toRef(props, 'categoryId')
const postIdRef = toRef(props, 'postId')

const { postMeta, bodyHtml, toc, loading, error } = useBlogPost(categoryIdRef, postIdRef)

const category = computed(() => (postMeta.value ? getCategory(postMeta.value.categoryId) : null))
const adjacent = computed(() => {
  if (!postMeta.value) return { prev: null, next: null }
  return getAdjacentPosts(postMeta.value.categoryId, postMeta.value.id)
})

// 滚动监听：高亮当前章节
const activeId = ref<string>('')
useScrollspy(articleRef, toc, activeId)

// 点击 TOC 平滑滚动：抵消 sticky header 高度
function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const headerH = 80
  const offset = el.getBoundingClientRect().top + window.scrollY - headerH - 16
  window.scrollTo({ top: offset, behavior: 'smooth' })
  history.replaceState(null, '', `#${id}`)
  activeId.value = id
}

onMounted(() => {
  window.scrollTo({ top: 0 })
})

// 路由 hash 变化时滚动
watch(
  () => route.hash,
  (hash) => {
    if (!hash) return
    requestAnimationFrame(() => {
      const el = document.querySelector(hash)
      if (el) scrollToSection(el.id)
    })
  },
)
</script>

<style scoped>
.my-box {
  height: fit-content;
  width: 100%;
  padding: 0;
}

.my-box .container {
  width: min(1200px, 100%);
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: clamp(40px, 5vw, 72px) clamp(28px, 4vw, 56px);
  border-radius: 30px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section {
  margin-bottom: 0;
}

/* ===== 加载/错误 ===== */
.post-loading,
.post-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  text-align: center;
}

.post-loading__spinner {
  width: 36px;
  height: 36px;
  border: 2px solid #e5e5e5;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.post-error__icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.post-error h2 {
  color: #0a0a0a;
  margin: 0 0 8px;
  font-size: 22px;
  font-weight: 600;
}

.post-error p {
  color: #737373;
  margin: 0 0 16px;
  font-size: 14px;
}

.post-error__link {
  color: #3498db;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.post-error__link:hover {
  text-decoration: underline;
}

/* ===== 文章布局 ===== */
.post-layout {
  width: 100%;
}

.post-container {
  display: grid;
  grid-template-columns: minmax(0, 760px) 220px;
  gap: 64px;
  justify-content: center;
  align-items: start;
}

/* ===== Hero：杂志风 60px+ 大字标题 ===== */
.post-hero {
  margin-bottom: 56px;
  /* 无背景、无边框、无色条 */
  /* 仅靠字号和字重建立层级 */
}

.post-hero__meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: #737373;
  margin-bottom: 20px;
  letter-spacing: 0.03em;
  flex-wrap: wrap;
}

.post-hero__category {
  /* 分类用纯文字链接 */
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 500;
  padding: 2px 0;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.post-hero__category:hover {
  color: #3498db;
  border-bottom-color: #3498db;
}

.post-hero__sep {
  opacity: 0.5;
}

.post-hero__title {
  /* 杂志英雄标题：60px+，紧字重，强字距压缩 */
  font-size: clamp(40px, 5.5vw, 64px);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.035em;
  color: #0a0a0a;
  margin: 0 0 20px;
  /* 标题本身不加任何下划线/装饰 */
}

.post-hero__lead {
  font-size: clamp(16px, 1.5vw, 19px);
  color: #525252;
  line-height: 1.55;
  margin: 0 0 16px;
  font-style: italic;
  font-weight: 400;
  max-width: 640px;
}

.post-hero__tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.post-hero__tag {
  font-size: 12px;
  color: #737373;
  letter-spacing: 0.04em;
  padding: 4px 0;
  border-bottom: 1px solid #e5e5e5;
}

/* ===== 正文容器 ===== */
.post-body__content {
  /* content.css 已定义 .post-content 样式 */
}

/* ===== 上一篇/下一篇 ===== */
.post-pager {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 80px;
  padding-top: 32px;
  border-top: 1px solid #e5e5e5;
}

.post-pager__item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-decoration: none;
  padding: 8px 0;
  min-width: 0;
  transition: opacity 0.2s ease;
}

.post-pager__item:hover {
  opacity: 0.7;
}

.post-pager__item--next {
  text-align: right;
  align-items: flex-end;
}

.post-pager__item--empty {
  visibility: hidden;
}

.post-pager__direction {
  font-size: 12px;
  color: #a3a3a3;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.post-pager__title {
  font-size: 16px;
  font-weight: 600;
  color: #0a0a0a;
  line-height: 1.4;
  letter-spacing: -0.01em;
  word-break: break-word;
}

/* ===== TOC ===== */
.post-toc {
  position: sticky;
  top: calc(80px + 16px);
  align-self: start;
  max-height: calc(100vh - 80px - 32px);
  overflow-y: auto;
}

/* ===== 响应式 ===== */
@media (max-width: 1024px) {
  .post-container {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
  }
  .post-toc {
    position: static;
    max-height: none;
    padding: 16px;
    background: #fafafa;
    border-radius: 4px;
    border-left: 2px solid #e5e5e5;
  }
}

@media (max-width: 768px) {
  .my-box .container {
    padding: 28px 20px;
    border-radius: 20px;
  }
  .post-hero__title {
    font-size: 38px;
  }
  .post-hero {
    margin-bottom: 36px;
  }
  .post-pager {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 56px;
  }
  .post-pager__item--next {
    text-align: left;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .my-box .container {
    padding: 24px 16px;
    border-radius: 18px;
  }
  .post-hero__title {
    font-size: 32px;
  }
  .post-hero__meta {
    font-size: 12px;
  }
}
</style>