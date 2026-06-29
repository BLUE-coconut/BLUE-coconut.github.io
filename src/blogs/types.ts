/**
 * 博客系统核心类型定义
 *
 * 设计要点：
 * - BlogPost 是元数据 + htmlPath（HTML 文件相对路径），HTML 内容由
 *   `import.meta.glob` 在编译期注入，注册表本身不存正文。
 * - Category 的 color 必须与 src/blogs/styles/tokens.css 的 --cat-<id> 一致。
 * - TocItem 由运行时 DOMParser 从 HTML 提取，level 表示标题层级。
 */

export interface Category {
  /** 分类 id，全站唯一，小写英文+连字符，对应 URL /blog/:categoryId */
  id: string
  /** 分类显示名 */
  name: string
  /** 分类 emoji 或图标 URL，可选 */
  icon?: string
  /**
   * 分类主色，对应 CSS 变量 --cat-<id>
   * 注意：必须同时在 src/blogs/styles/tokens.css 中声明 --cat-<id>
   */
  color: string
  /** 显示顺序，升序 */
  order: number
  /** 分类简介，可选 */
  description?: string
}

export interface BlogPost {
  /** 博客 id，全站唯一，小写英文+连字符 */
  id: string
  /** 所属分类 id，对应 Category.id */
  categoryId: string
  /** 博客标题 */
  title: string
  /** 博客摘要/描述 */
  description: string
  /** 封面图绝对路径，如 '/images/blog/agent.jpg'，可选 */
  coverImage?: string
  /** 更新时间，建议 'YYYY-MM-DD' 格式以便排序 */
  updateTime: string
  /** 阅读时间，如 '12 min'，可选 */
  readTime?: string
  /** 标签数组，可选 */
  tags?: string[]
  /**
   * HTML 文件路径，相对 src/blogs/index.ts，例如：
   *   './ai/ai-agents.html'
   *   './reinforcement-learning/index.html'
   * 该路径必须与 import.meta.glob 的 pattern 匹配。
   */
  htmlPath: string
}

/** 从博客 HTML 中提取的章节项（运行时构造） */
export interface TocItem {
  id: string
  text: string
  level: 1 | 2 | 3
}