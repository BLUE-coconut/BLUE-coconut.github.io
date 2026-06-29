import { onBeforeUnmount, onMounted, watch, type Ref } from 'vue'
import type { TocItem } from '@/blogs/types'

/**
 * 监听章节可见性，高亮当前激活章节
 *
 * 使用 IntersectionObserver 而非 scroll 事件：
 *   - 浏览器合成线程跑，主线程零负担
 *   - 自动批处理，无需节流
 *
 * rootMargin 设计：
 *   - top -80px 避开 sticky header（var(--header-height)）
 *   - bottom -75% 避免底部小段落误触发高亮
 *
 * 必须在两帧之后再 setup，避免 getBoundingClientRect 全是 0 的竞态。
 */
export function useScrollspy(
  containerRef: Ref<HTMLElement | null>,
  toc: Ref<TocItem[]>,
  activeId: Ref<string>,
) {
  let observer: IntersectionObserver | null = null

  function teardown() {
    observer?.disconnect()
    observer = null
  }

  function setup() {
    teardown()
    if (!containerRef.value || toc.value.length === 0) return

    observer = new IntersectionObserver(
      (entries) => {
        // 取多个可见章节里离顶部最近的那个
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) {
          activeId.value = visible[0].target.id
        }
      },
      {
        rootMargin: '-80px 0px -75% 0px',
        threshold: [0, 0.5, 1],
      },
    )

    toc.value.forEach((item) => {
      const el = containerRef.value?.querySelector<HTMLElement>(
        `#${CSS.escape(item.id)}`,
      )
      if (el) observer!.observe(el)
    })
  }

  // 等两帧再 setup（DOM 完成 layout 后再计算位置）
  function deferSetup() {
    requestAnimationFrame(() => requestAnimationFrame(setup))
  }

  onMounted(deferSetup)
  watch(
    () => toc.value,
    deferSetup,
    { flush: 'post' },
  )

  onBeforeUnmount(teardown)
}