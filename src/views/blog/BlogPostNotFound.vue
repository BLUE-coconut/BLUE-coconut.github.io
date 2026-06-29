<template>
  <div class="not-found">
    <div class="not-found__icon">🔍</div>
    <h2 class="not-found__title">文章未找到</h2>
    <p class="not-found__desc">
      你访问的博客可能已被移除或路径错误。
    </p>
    <div class="not-found__actions">
      <router-link to="/blog" class="not-found__btn not-found__btn--primary">
        返回博客
      </router-link>
      <button class="not-found__btn" @click="goBack">返回上一页</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/blog')
  }
}
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 60px 24px 40px;
}

.not-found__icon {
  font-size: 56px;
  margin-bottom: 16px;
  opacity: 0.8;
}

.not-found__title {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary, #2c3e50);
  margin: 0 0 10px;
}

.not-found__desc {
  font-size: 14px;
  color: var(--text-secondary, #7f8c8d);
  margin: 0 0 24px;
}

.not-found__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.not-found__btn {
  padding: 9px 20px;
  border-radius: 8px;
  border: 1px solid var(--border, #f0f0f0);
  background: #fff;
  color: var(--text-secondary, #7f8c8d);
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  font-family: inherit;
}

.not-found__btn:hover {
  border-color: var(--brand-primary, #3498db);
  color: var(--brand-primary, #3498db);
}

.not-found__btn--primary {
  background: var(--brand-primary, #3498db);
  border-color: var(--brand-primary, #3498db);
  color: #fff;
}

.not-found__btn--primary:hover {
  background: var(--brand-primary-dark, #2980b9);
  border-color: var(--brand-primary-dark, #2980b9);
  color: #fff;
}
</style>