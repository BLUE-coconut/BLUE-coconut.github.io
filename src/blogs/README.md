# 博客撰写规范

本目录存放个人博客的全部内容。每篇博客是 **完全自包含的 HTML 文件**——可在浏览器中直接打开，也可在站内 `/blog/:category/:id` 路由查看。

---

## 快速开始：新建一篇博客

### 1. 选择分类

在 `categories.ts` 中找到目标分类的 `id`（如 `ai`、`rl`、`game`）。
如需新增分类，请同时在 `categories.ts` 和 `src/blogs/styles/tokens.css` 中追加对应记录和 `--cat-<id>` 变量。

### 2. 创建 HTML 文件

```bash
# 同分类下首篇
touch src/blogs/<category>/<post-id>.html

# 同分类下后续篇
touch src/blogs/<category>/<post-id-2>.html

# 或用 index.html 作为入口（每个分类子目录下可有同名 index.html）
touch src/blogs/<category>/<post-id>/index.html
```

> 路径必须在 `index.ts` 注册表的 `htmlPath` 中保持一致。

### 3. 在 `index.ts` 中注册

打开 `src/blogs/index.ts`，在 `posts` 数组中追加一条：

```ts
{
  id: 'my-new-post',
  categoryId: 'ai',
  title: '我的新博客',
  description: '一句话摘要',
  coverImage: '/images/blog/xxx.jpg', // 可选
  updateTime: '2026-02-01',           // YYYY-MM-DD
  readTime: '10 min',                  // 可选
  tags: ['TopicA', 'TopicB'],          // 可选
  htmlPath: './ai/my-new-post.html',
}
```

### 4. 验证

```bash
npm run dev
# 访问 http://localhost:5173/blog/<category>/<post-id>
```

或直接双击 `xxx.html` 在浏览器中打开。

---

## HTML 撰写规范

### 必备结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>文章标题</title>
  <style>
    /* 自包含样式 */
  </style>
</head>
<body>
  <article>
    <!-- 正文 -->
  </article>
</body>
</html>
```

### 章节锚点（**重要**）

每个 `<h2>` 和 `<h3>` 都必须带 `id="..."`，用于站内右侧 TOC 悬浮目录：

```html
<h2 id="intro">简介</h2>
<h2 id="core-concept">核心概念</h2>
<h3 id="subtopic">子主题</h3>
```

**id 命名规范**：
- 小写英文 + 连字符
- 与文字大意相关，便于跳转时记忆
- 全局唯一（不能重复）

### 样式自包含

**为什么必须自包含**：HTML 文件可以**直接在浏览器打开**查看（双击或 `file://`），独立运行时不会加载站内样式表。

把以下样式放在 `<style>` 标签内（**这是从 src/blogs/styles/content.css 复制过来的，确保双环境视觉一致**）：

```css
*, *::before, *::after { box-sizing: border-box; }
body {
  font-family: 'Century Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
  max-width: 760px;
  margin: 40px auto;
  padding: 24px;
  line-height: 1.8;
  color: #2c3e50;
  background: #fff;
}
h1 { font-size: 32px; margin-bottom: 16px; color: #2c3e50; }
h2 {
  font-size: 26px; font-weight: 700;
  margin: 48px 0 16px;
  padding-left: 14px;
  border-left: 4px solid <分类色>;
  scroll-margin-top: 24px;
}
h3 { font-size: 20px; font-weight: 600; margin: 32px 0 12px; scroll-margin-top: 24px; }
p { margin: 16px 0; }
code {
  background: rgba(52, 152, 219, 0.08);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
  color: #2980b9;
  font-family: 'SF Mono', Monaco, Consolas, monospace;
}
pre {
  background: #1e293b; color: #e2e8f0;
  padding: 16px 20px;
  border-radius: 12px;
  overflow-x: auto;
  font-size: 14px; line-height: 1.6;
  font-family: 'SF Mono', Monaco, Consolas, monospace;
}
pre code { background: none; color: inherit; padding: 0; }
blockquote {
  border-left: 3px solid #3498db;
  padding: 8px 16px;
  margin: 20px 0;
  color: #7f8c8d;
  background: #f8fafc;
  border-radius: 0 8px 8px 0;
}
img {
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  margin: 24px auto;
  display: block;
}
@media (max-width: 768px) {
  body { padding: 16px; margin: 20px auto; font-size: 15px; }
  h1 { font-size: 26px; }
  h2 { font-size: 22px; }
  h3 { font-size: 18px; }
}
```

> **分类色**可调整 `border-left` 的颜色以匹配分类主色（蓝/紫/橙/绿/红）。

### 禁止事项

- ❌ **不要使用 Vue 语法**（`v-if` `{{ }}` `v-for` 等）—— HTML 必须可直接打开
- ❌ **不要写 `<script>`** —— DOMParser 解析时会自动剥离
- ❌ **不要写相对路径的图片** —— 用绝对路径 `/images/blog/xxx.png`（public 资源）

### 推荐事项

- ✅ 在文章开头加 `<p class="lead">一段摘要</p>`，会作为导读
- ✅ 章节按"原理 → 示例 → 实践"或"问题 → 方案 → 结论"组织
- ✅ 代码块示例尽量完整可运行
- ✅ 长文用 `id` 锚点，方便站内 TOC 跳转

---

## 双环境渲染机制

```
你写的 HTML（自包含）
       │
       ├─────────────────────┐
       ▼                     ▼
浏览器直接打开           Vue SPA 嵌入
file:///path/to/.html    /blog/:category/:postId
   ↓                        ↓
完整 <head><style>        fetch + DOMParser
渲染，用户看到            剥离 <head>/<style>/<script>
完整文章                   提取 <body> 内 HTML
                          用 v-html 注入
                          由项目 content.css 统一渲染
```

**两份样式表（HTML 内联 + content.css）的视觉必须保持一致**，否则双环境体验割裂。撰写新博客时，**优先复制现有 HTML 的 `<style>` 块**，再修改 h2 的左侧色条颜色即可。

---

## 本地预览

### 方式 1：浏览器直接打开

```bash
open src/blogs/ai/ai-agents.html
```

适合：撰写时实时预览、检查样式是否符合预期。

### 方式 2：站内路由

```bash
npm run dev
# 访问 http://localhost:5173/blog/ai/ai-agents
```

适合：测试 TOC 高亮、阅读进度条、移动端响应式。

---

## 常见问题

### Q: 章节没出现在 TOC 里？
A: 检查 `<h2>` 或 `<h3>` 是否带 `id="..."`。TOC 提取规则是 `h1[id], h2[id], h3[id]`。

### Q: 直接打开 HTML 时样式很奇怪？
A: 浏览器对缺失 `<!DOCTYPE html>` 的渲染是 quirks 模式。**确保第一行是 `<!DOCTYPE html>`**。

### Q: 站内打开后图片看不到？
A: 用绝对路径 `/images/blog/xxx.png`，对应 `public/images/blog/`。

### Q: 新增了分类，分类卡片不显示？
A: 检查三处：
1. `categories.ts` 已追加
2. `src/blogs/styles/tokens.css` 已声明 `--cat-<id>`
3. `index.ts` 的 posts 中有该分类的博客

### Q: 想让某篇博客不在分类列表显示？
A: 暂时不支持。如有此需求，可以考虑加 `hidden: true` 字段并在 `getPostsByCategory` 中过滤。

---

## 模板：复制即用

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>新文章标题</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: 'Century Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
      max-width: 760px;
      margin: 40px auto;
      padding: 24px;
      line-height: 1.8;
      color: #2c3e50;
      background: #fff;
    }
    h1 { font-size: 32px; margin-bottom: 16px; }
    h2 { font-size: 26px; font-weight: 700; margin: 48px 0 16px; padding-left: 14px; border-left: 4px solid #3498db; scroll-margin-top: 24px; }
    h3 { font-size: 20px; font-weight: 600; margin: 32px 0 12px; scroll-margin-top: 24px; }
    p { margin: 16px 0; }
    code { background: rgba(52, 152, 219, 0.08); padding: 2px 6px; border-radius: 4px; font-size: 0.9em; color: #2980b9; font-family: 'SF Mono', Monaco, Consolas, monospace; }
    pre { background: #1e293b; color: #e2e8f0; padding: 16px 20px; border-radius: 12px; overflow-x: auto; font-size: 14px; line-height: 1.6; font-family: 'SF Mono', Monaco, Consolas, monospace; }
    pre code { background: none; color: inherit; padding: 0; }
    blockquote { border-left: 3px solid #3498db; padding: 8px 16px; margin: 20px 0; color: #7f8c8d; background: #f8fafc; border-radius: 0 8px 8px 0; }
    img { max-width: 100%; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.08); margin: 24px auto; display: block; }
    .lead { font-size: 17px; color: #7f8c8d; margin-bottom: 28px; }
    @media (max-width: 768px) {
      body { padding: 16px; margin: 20px auto; font-size: 15px; }
      h1 { font-size: 26px; }
      h2 { font-size: 22px; }
      h3 { font-size: 18px; }
    }
  </style>
</head>
<body>
  <article>
    <p class="lead">用一句话概括本文核心，让读者知道值不值得读下去。</p>

    <h2 id="section-1">第一节</h2>
    <p>...</p>

    <h2 id="section-2">第二节</h2>
    <p>...</p>
    <h3 id="subtopic">子主题</h3>
    <p>...</p>

    <h2 id="conclusion">小结</h2>
    <p>...</p>
  </article>
</body>
</html>
```

复制此模板，修改 `<title>`、颜色、id 和正文即可。