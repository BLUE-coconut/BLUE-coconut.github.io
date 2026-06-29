<template>
  <nav v-if="toc.length > 0" class="toc">
    <h4 class="toc__title">Contents</h4>
    <ul class="toc__list">
      <li
        v-for="item in toc"
        :key="item.id"
        :class="['toc__item', `toc__item--h${item.level}`, { active: item.id === activeId }]"
      >
        <a class="toc__link" :href="`#${item.id}`" @click.prevent="scrollTo(item.id)">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { TocItem } from '@/blogs/types'

defineProps<{
  toc: TocItem[]
  activeId: string
}>()

const emit = defineEmits<{
  (e: 'navigate', id: string): void
}>()

function scrollTo(id: string) {
  emit('navigate', id)
}
</script>

<style scoped>
/* 高级感 TOC：仅文字 + 左侧 2px 灰色分隔线 + active 时变蓝 + 加粗 */
.toc {
  font-size: 13px;
  line-height: 1.6;
}

.toc__title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #a3a3a3;
  margin: 0 0 14px;
}

.toc__list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 1px solid #e5e5e5;
}

.toc__item {
  position: relative;
}

.toc__item.active::before {
  content: '';
  position: absolute;
  left: -1px;
  top: 4px;
  bottom: 4px;
  width: 2px;
  background: #3498db;
  transition: all 0.2s ease;
}

.toc__link {
  display: block;
  padding: 6px 0 6px 14px;
  color: #737373;
  text-decoration: none;
  margin-left: -1px;
  border-left: 1px solid transparent;
  transition: color 0.2s ease;
  word-break: break-word;
  line-height: 1.45;
}

.toc__link:hover {
  color: #0a0a0a;
}

.toc__item.active .toc__link {
  color: #0a0a0a;
  font-weight: 600;
}

.toc__item--h3 .toc__link {
  padding-left: 26px;
  font-size: 12px;
  color: #a3a3a3;
}

.toc__item--h3.active .toc__link {
  color: #0a0a0a;
}
</style>