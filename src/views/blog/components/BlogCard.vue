<template>
  <article class="post-card" @click="goToPost">
    <!-- 封面图：占大部分视觉空间 -->
    <div class="post-card__cover">
      <img v-if="post.coverImage" :src="post.coverImage" :alt="post.title" loading="lazy" />
      <div v-else class="post-card__placeholder">
        <span class="post-card__placeholder-text">No Cover</span>
      </div>
    </div>

    <!-- 元信息单行 -->
    <div class="post-card__meta">
      <span v-if="category" class="post-card__category">
        {{ category.name }}
      </span>
      <span class="post-card__sep">·</span>
      <time class="post-card__date">{{ post.updateTime }}</time>
      <template v-if="post.readTime">
        <span class="post-card__sep">·</span>
        <span class="post-card__readtime">{{ post.readTime }}</span>
      </template>
    </div>

    <!-- 标题 -->
    <h3 class="post-card__title">{{ post.title }}</h3>

    <!-- 摘要（移动端隐藏以节省空间） -->
    <p v-if="post.description" class="post-card__desc">{{ post.description }}</p>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { BlogPost } from '@/blogs/types'
import { getCategory } from '@/blogs'

const props = defineProps<{
  post: BlogPost
}>()

const router = useRouter()
const category = computed(() => getCategory(props.post.categoryId))

function goToPost() {
  router.push(`/blog/${props.post.categoryId}/${props.post.id}`)
}
</script>

<style scoped>
/* 杂志期刊风：封面占大头 + 简洁元信息 + 大字标题 */
.post-card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  /* 关键：无边框、无背景色、无阴影 */
  /* 仅靠间距与字号建立层级 */
  padding: 0;
  margin: 0;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.post-card:hover {
  transform: translateY(-4px);
}

/* 封面：4:3 比例，给图片呼吸感 */
.post-card__cover {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #f5f5f5;
  border-radius: 4px;
  margin-bottom: 16px;
}

.post-card__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  filter: saturate(0.96);
}

.post-card:hover .post-card__cover img {
  transform: scale(1.04);
}

.post-card__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #ebebeb 100%);
}

.post-card__placeholder-text {
  font-size: 12px;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
}

/* 元信息行：小、灰、紧凑 */
.post-card__meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #737373;
  margin-bottom: 8px;
  letter-spacing: 0.02em;
  flex-wrap: wrap;
}

.post-card__category {
  /* 分类仅用文字，不用颜色 */
  color: #1a1a1a;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.post-card__sep {
  opacity: 0.5;
}

.post-card__date,
.post-card__readtime {
  font-feature-settings: 'tnum' 1; /* 数字等宽 */
}

/* 标题：杂志风核心——大字、紧字重、深色 */
.post-card__title {
  font-size: clamp(20px, 2.2vw, 26px);
  font-weight: 600;
  color: #0a0a0a;
  line-height: 1.3;
  letter-spacing: -0.02em;
  margin: 0 0 8px;
  /* 单行省略 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.2s ease;
}

.post-card:hover .post-card__title {
  color: #3498db;
}

/* 描述：仅大屏显示 */
.post-card__desc {
  font-size: 14px;
  color: #525252;
  line-height: 1.6;
  margin: 0;
  display: none;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .post-card__desc {
    display: -webkit-box;
  }
}
</style>