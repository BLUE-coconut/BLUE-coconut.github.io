import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

/**
 * 计算文章阅读进度（0-1 之间的比例）
 *
 * 基于目标元素相对视口的位置：
 *   - 元素顶部进入视口时进度为 0
 *   - 元素底部到达视口底部时进度为 1
 */
export function useReadingProgress(target: Ref<HTMLElement | null>) {
  const progress = ref(0)
  let rafId = 0

  function update() {
    rafId = 0
    const el = target.value
    if (!el) {
      progress.value = 0
      return
    }
    const { top, height } = el.getBoundingClientRect()
    const viewport = window.innerHeight
    const total = Math.max(1, height - viewport)
    const scrolled = Math.min(total, Math.max(0, -top))
    progress.value = Math.min(1, Math.max(0, scrolled / total))
  }

  function onScroll() {
    if (rafId) return
    rafId = requestAnimationFrame(update)
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    if (rafId) cancelAnimationFrame(rafId)
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  })

  return { progress }
}