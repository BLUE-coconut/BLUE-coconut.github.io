<template>
  <AppLayout />
</template>

<script setup lang="ts">
import AppLayout from '@/components/Layout/AppLayout.vue'
</script>

<style>
@import url('/css/bootstrap.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  font-family: 'Century Gothic', sans-serif;
  line-height: 1.6;
  color: #333;
  background:  url('/bgimg.jpg') no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  overflow-x: hidden;
}

@font-face {
  font-family: 'Pacifico';
  src: url('/font/Pacifico-1.ttf') format('truetype');
}

/* 全局响应式设计 */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
  
  body {
    padding: 0;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 12px;
  }
}

/* 隐藏滚动条但保持滚动功能 */
body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

body::-webkit-scrollbar {
  display: none;
}

/* 确保图片响应式 */
img {
  max-width: 100%;
  height: auto;
}

/* 链接样式优化 */
a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: #0056b3;
}
</style>