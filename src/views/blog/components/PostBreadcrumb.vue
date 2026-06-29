<template>
  <nav class="breadcrumb" aria-label="breadcrumb">
    <router-link to="/blog" class="breadcrumb__link">Blogs</router-link>
    <span class="breadcrumb__sep">/</span>
    <router-link
      v-if="category"
      :to="`/blog/${category.id}`"
      class="breadcrumb__link"
    >
      {{ category.name }}
    </router-link>
    <span v-if="postTitle" class="breadcrumb__sep">/</span>
    <span v-if="postTitle" class="breadcrumb__current">{{ postTitle }}</span>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getCategory } from '@/blogs'

const props = defineProps<{
  categoryId: string
  postTitle?: string
}>()

const category = computed(() => getCategory(props.categoryId))
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #a3a3a3;
  margin-bottom: 32px;
  flex-wrap: wrap;
  letter-spacing: 0.02em;
}

.breadcrumb__link {
  color: #737373;
  text-decoration: none;
  padding: 2px 0;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.breadcrumb__link:hover {
  color: #0a0a0a;
  border-bottom-color: #0a0a0a;
}

.breadcrumb__sep {
  color: #d4d4d4;
  user-select: none;
}

.breadcrumb__current {
  color: #0a0a0a;
  font-weight: 500;
  word-break: break-word;
}
</style>