<template>
  <div class="app-layout">
    <AppHeader />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader.vue'
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: clamp(8px, 1.2vw, 16px) clamp(12px, 3vw, 40px) clamp(14px, 2vw, 26px);
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    justify-content: flex-start;
    padding: 8px 10px 14px;
  }
}
</style>
