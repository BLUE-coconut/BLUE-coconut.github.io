import { ref, watch, type Ref } from 'vue'
import { posts } from '@/blogs'
import type { TocItem } from '@/blogs/types'

/**
 * 加载并解析自包含 HTML 博客文件
 *
 * 工作流程：
 *   1. import.meta.glob 在编译期把所有 .html 以字符串形式内联（零运行时请求）
 *   2. DOMParser 解析 HTML
 *   3. 提取 <body> 内部内容（剥离 <head>/<style>/<script>，避免样式污染 Vue）
 *   4. 扫描所有带 id 的 h1/h2/h3，构造 TOC
 *
 * 注意：HTML 文件必须满足 src/blogs/README.md 中的撰写规范。
 */

// Vite 编译期 glob：把 src/blogs/ 下所有 .html 以字符串形式注入到 htmlModules 对象
// key 形如 '../blogs/ai/ai-agents.html'
// 注意：本文件位于 src/composables/，相对路径要回到 src/ 后再进入 blogs/
const htmlModules = import.meta.glob<string>('../blogs/**/*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export function useBlogPost(categoryId: Ref<string>, postId: Ref<string>) {
  const postMeta = ref(posts.find((p) => p.categoryId === categoryId.value && p.id === postId.value) ?? null)
  const bodyHtml = ref<string>('')
  const toc = ref<TocItem[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  function resolveHtmlModule(htmlPath: string): string | undefined {
    // meta.htmlPath 是相对 src/blogs/index.ts 的路径（如 './ai/ai-agents.html'）
    // 而 import.meta.glob 的 key 是相对 src/composables/useBlogPost.ts 的路径（如 '../blogs/ai/ai-agents.html'）
    // 需要做归一化转换
    const candidates: string[] = []
    const stripped = htmlPath.replace(/^\.\//, '') // 'ai/ai-agents.html'
    candidates.push(`../blogs/${stripped}`)
    candidates.push(`./${stripped}`)
    candidates.push(htmlPath)
    return candidates.map((k) => htmlModules[k]).find(Boolean)
  }

  async function load() {
    loading.value = true
    error.value = null
    bodyHtml.value = ''
    toc.value = []

    try {
      const meta = posts.find(
        (p) => p.categoryId === categoryId.value && p.id === postId.value,
      )
      if (!meta) {
        error.value = `未找到博客：${categoryId.value}/${postId.value}`
        postMeta.value = null
        return
      }
      postMeta.value = meta

      const rawHtml = resolveHtmlModule(meta.htmlPath)
      if (!rawHtml) {
        throw new Error(`HTML 模块未找到：${meta.htmlPath}`)
      }

      // DOMParser 是浏览器原生 API
      const parser = new DOMParser()
      const doc = parser.parseFromString(rawHtml, 'text/html')

      // 提取 body 内容，剥离 script（防 XSS，style 不会被提取因为它在 head）
      const body = doc.body
      body.querySelectorAll('script').forEach((n) => n.remove())
      bodyHtml.value = body.innerHTML

      // 扫描带 id 的 h1/h2/h3 构造 TOC
      toc.value = Array.from(
        body.querySelectorAll<HTMLElement>('h1[id], h2[id], h3[id]'),
      ).map((el) => ({
        id: el.id,
        text: (el.textContent ?? '').trim(),
        level: parseInt(el.tagName.charAt(1), 10) as 1 | 2 | 3,
      }))
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e)
      error.value = `加载博客失败：${msg}`
      // eslint-disable-next-line no-console
      console.error('[useBlogPost]', e)
    } finally {
      loading.value = false
    }
  }

  watch([categoryId, postId], load, { immediate: true })

  return {
    postMeta,
    bodyHtml,
    toc,
    loading,
    error,
    reload: load,
  }
}