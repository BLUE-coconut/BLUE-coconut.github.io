<template>
  <div class="my-box">
    <div class="container">
      <!-- 返回链接 -->
      <nav class="back-nav" aria-label="Breadcrumb">
        <router-link to="/blog" class="back-nav__link">
          <span class="back-nav__arrow">←</span>
          <span>All topics</span>
        </router-link>
      </nav>

      <section v-if="category" class="section">
        <!-- Hero：分类大字标题 -->
        <header class="hero">
          <h1 class="hero__title">{{ category.name }}</h1>
          <p v-if="category.description" class="hero__subtitle">
            {{ category.description }}
          </p>
          <p class="hero__meta">
            {{ categoryPosts.length }} article{{ categoryPosts.length === 1 ? '' : 's' }}
          </p>
        </header>

        <hr class="divider" />

        <!-- 文章网格 -->
        <div v-if="categoryPosts.length > 0" class="latest__grid">
          <BlogCard
            v-for="post in categoryPosts"
            :key="post.id"
            :post="post"
          />
        </div>
        <div v-else class="empty">
          <p>该分类下暂无文章。</p>
        </div>
      </section>

      <section v-else class="section">
        <div class="not-found">
          <h1 class="not-found__title">Topic not found</h1>
          <router-link to="/blog" class="not-found__link">
            Back to blogs →
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getCategory, getPostsByCategory } from '@/blogs'
import BlogCard from './components/BlogCard.vue'

const props = defineProps<{
  categoryId: string
}>()

const category = computed(() => getCategory(props.categoryId))
const categoryPosts = computed(() => getPostsByCategory(props.categoryId))
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

/* ===== 返回链接 ===== */
.back-nav {
  margin-bottom: 32px;
}

.back-nav__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #737373;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
}

.back-nav__link:hover {
  color: #0a0a0a;
}

.back-nav__arrow {
  transition: transform 0.2s ease;
}

.back-nav__link:hover .back-nav__arrow {
  transform: translateX(-3px);
}

/* ===== Hero ===== */
.hero {
  margin-bottom: 48px;
}

.hero__title {
  font-size: clamp(48px, 6vw, 72px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
  color: #0a0a0a;
  margin: 0 0 16px;
}

.hero__subtitle {
  font-size: clamp(15px, 1.4vw, 18px);
  color: #525252;
  line-height: 1.5;
  margin: 0 0 12px;
  max-width: 600px;
  font-weight: 400;
}

.hero__meta {
  font-size: 12px;
  color: #a3a3a3;
  margin: 0;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* ===== 分隔线 ===== */
.divider {
  border: none;
  border-top: 1px solid #e5e5e5;
  margin: 0 0 40px;
}

/* ===== 网格 ===== */
.latest__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 40px;
}

/* ===== 空态 ===== */
.empty {
  text-align: center;
  padding: 80px 20px;
  color: #737373;
  font-size: 15px;
}

/* ===== 未找到 ===== */
.not-found {
  text-align: center;
  padding: 60px 20px;
}

.not-found__title {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #0a0a0a;
  margin: 0 0 16px;
}

.not-found__link {
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.not-found__link:hover {
  text-decoration: underline;
}

/* ===== 响应式 ===== */
@media (max-width: 1024px) {
  .my-box .container {
    padding: 36px 28px;
  }
  .latest__grid {
    gap: 40px 32px;
  }
}

@media (max-width: 768px) {
  .my-box .container {
    padding: 28px 20px;
    border-radius: 20px;
  }
  .latest__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 480px) {
  .my-box .container {
    padding: 24px 16px;
    border-radius: 18px;
  }
  .hero__title {
    font-size: 36px;
  }
  .divider {
    margin-bottom: 28px;
  }
}
</style>