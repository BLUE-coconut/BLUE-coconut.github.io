<template>
  <div class="reading-progress" aria-hidden="true">
    <div class="reading-progress__bar" :style="barStyle" />
  </div>
</template>

<script setup lang="ts">
import { computed, type Ref } from 'vue'
import { useReadingProgress } from '@/composables/useReadingProgress'

/**
 * 接收模板 ref 对象。Vue 在模板 :prop 绑定时会自动 unwrap，
 * 所以这里直接接收 HTMLElement | null 即可（Vue 会自动跟踪）。
 */
const props = defineProps<{
  target: HTMLElement | null
}>()

// 包装为 ref，让 useReadingProgress 通过 .value 访问
const targetRef = computed(() => props.target) as unknown as Ref<HTMLElement | null>
const { progress } = useReadingProgress(targetRef)

const barStyle = computed(() => ({
  transform: `scaleX(${progress.value})`,
}))
</script>

<style scoped>
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: transparent;
  z-index: 1000;
  pointer-events: none;
}

.reading-progress__bar {
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, var(--brand-primary, #3498db), var(--brand-primary-dark, #2980b9));
  transform-origin: left center;
  transform: scaleX(0);
  transition: transform 0.1s linear;
  box-shadow: 0 1px 4px rgba(52, 152, 219, 0.4);
}
</style>