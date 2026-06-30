<template>
  <div class="my-box">
    <div class="container">
      <!-- Hero：仅文字，无装饰 -->
      <header class="hero">
        <h1 class="hero__title">Blogs</h1>
        <p class="hero__subtitle">
          {{ subtitle }}
        </p>
      </header>

      <!-- 文本分类导航：无颜色、无emoji，仅文字+分隔点 -->
      <nav class="topics" aria-label="Topics">
        <router-link to="/blog" class="topics__item topics__item--active">
          All
        </router-link>
        <span class="topics__sep" aria-hidden="true">·</span>
        <router-link
          v-for="category in sortedCategories"
          :key="category.id"
          :to="`/blog/${category.id}`"
          class="topics__item"
        >
          {{ category.name }}
        </router-link>
      </nav>

      <!-- 细线分隔 -->
      <hr class="divider" />

      <!-- 最新文章：双列网格 -->
      <section class="latest">
        <h2 class="latest__heading">Latest</h2>
        <div class="latest__grid">
          <BlogCard
            v-for="post in sortedPosts"
            :key="post.id"
            :post="post"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { categories, posts } from '@/blogs'
import BlogCard from './components/BlogCard.vue'

const sortedCategories = computed(() =>
  [...categories].sort((a, b) => a.order - b.order),
)

const sortedPosts = computed(() =>
  [...posts].sort((a, b) => b.updateTime.localeCompare(a.updateTime)),
)

// Hero 副标题：根据文章数量动态生成
const subtitle = computed(() => {
  const count = sortedPosts.value.length
  return `${count} selected writings on AI, LLM, Reinforcement Learning, development, and English learning.`
})
</script>

<style scoped>
/* ===== 容器（沿用全站风格） ===== */
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

/* ===== Hero ===== */
.hero {
  margin-bottom: 48px;
}

.hero__title {
  /* 杂志风：大字 + 紧字重 + 字母压缩 */
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
  margin: 0;
  max-width: 560px;
  font-weight: 400;
}

/* ===== Topics 文本导航 ===== */
.topics {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px 14px;
  margin-bottom: 32px;
  font-size: 14px;
}

.topics__item {
  /* 纯文本导航：仅颜色和下划线变化 */
  color: #737373;
  text-decoration: none;
  padding: 4px 0;
  letter-spacing: 0.01em;
  position: relative;
  transition: color 0.2s ease;
}

.topics__item:hover {
  color: #0a0a0a;
}

.topics__item--active {
  color: #0a0a0a;
  font-weight: 500;
}

/* active 状态：底部 2px 黑色短线 */
.topics__item--active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background: #0a0a0a;
}

.topics__sep {
  color: #d4d4d4;
  user-select: none;
}

/* ===== 分隔线 ===== */
.divider {
  border: none;
  border-top: 1px solid #e5e5e5;
  margin: 0 0 40px;
}

/* ===== Latest 网格 ===== */
.latest {
  margin-bottom: 24px;
}

.latest__heading {
  font-size: 12px;
  font-weight: 500;
  color: #a3a3a3;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0 0 28px;
}

.latest__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 40px;
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
  .hero {
    margin-bottom: 36px;
  }
  .hero__title {
    font-size: 44px;
  }
  .topics {
    font-size: 13px;
    gap: 6px 12px;
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
  .latest__heading {
    margin-bottom: 20px;
  }
}
</style>