import type { BlogPost } from './types'
import { categories } from './categories'

/**
 * 博客注册表（中央索引）
 *
 * 新增博客步骤：
 *   1. 创建 src/blogs/<category>/<id>.html（或 src/blogs/<category>/<id>/index.html）
 *   2. 在下方 posts 数组追加一条记录，确保 htmlPath 与文件路径一致
 *
 * 同分类可有多篇博客（posts 数组天然支持）。
 *
 * 路由无需改动：src/router/index.ts 已声明
 *   /blog            -> 列表
 *   /blog/:categoryId -> 分类
 *   /blog/:categoryId/:postId -> 详情
 */
export const posts: BlogPost[] = [
  {
    id: 'ai-agents',
    categoryId: 'ai',
    title: 'AI Agents：理论与实践',
    description: 'AI Agents 核心范式与生产实践学习笔记。',
    coverImage: '/images/blog/agent.jpg',
    updateTime: '2025-11-30',
    readTime: '12 min',
    tags: ['ReAct', 'LangGraph', 'RAG'],
    htmlPath: './ai/ai-agents.html',
  },
  {
    id: 'rag-notes',
    categoryId: 'ai',
    title: 'RAG 系统设计笔记',
    description: 'RAG 检索增强生成的工程实践与踩坑记录。',
    coverImage: '/images/blog/agent.jpg',
    updateTime: '2026-01-15',
    readTime: '15 min',
    tags: ['RAG', 'Embedding', '向量检索'],
    htmlPath: './ai/rag-notes.html',
  },
  {
    id: 'reinforcement-learning',
    categoryId: 'rl',
    title: '强化学习基础',
    description: 'MDP、Q-learning、Policy Gradient 与 DQN 详解。',
    coverImage: '/images/blog/RL.png',
    updateTime: '2025-09-28',
    readTime: '20 min',
    tags: ['MDP', 'DQN', 'PPO'],
    htmlPath: './reinforcement-learning/index.html',
  },
  {
    id: 'unity-xr',
    categoryId: 'game',
    title: 'Unity XR 开发笔记',
    description: 'OpenXR、Hand Tracking 与 Quest 部署要点。',
    coverImage: '/images/blog/unityXR.png',
    updateTime: '2025-04-25',
    readTime: '15 min',
    tags: ['Unity', 'OpenXR', 'Quest'],
    htmlPath: './unity-xr/index.html',
  },
  {
    id: 'flutter',
    categoryId: 'mobile',
    title: 'Flutter 跨平台开发',
    description: 'Widget 体系、状态管理与跨端适配。',
    coverImage: '/images/blog/Flutter.png',
    updateTime: '2025-11-12',
    readTime: '18 min',
    tags: ['Dart', 'Provider', 'Riverpod'],
    htmlPath: './flutter/index.html',
  },
  {
    id: 'ielts',
    categoryId: 'language',
    title: '雅思备考经验',
    description: '雅思备考方法论与各科突破技巧。',
    coverImage: '/images/blog/IELTS.jpg',
    updateTime: '2023-04-25',
    readTime: '8 min',
    tags: ['IELTS', 'English'],
    htmlPath: './ielts/index.html',
  },
]

// ========== 辅助查询函数 ==========

export function getCategory(categoryId: string) {
  return categories.find((c) => c.id === categoryId)
}

export function getPost(categoryId: string, postId: string) {
  return posts.find((p) => p.categoryId === categoryId && p.id === postId)
}

export function getPostsByCategory(categoryId: string) {
  return posts
    .filter((p) => p.categoryId === categoryId)
    .sort((a, b) => b.updateTime.localeCompare(a.updateTime))
}

export function getAllPostsSorted() {
  return [...posts].sort((a, b) => b.updateTime.localeCompare(a.updateTime))
}

export function getAdjacentPosts(categoryId: string, postId: string) {
  const list = getPostsByCategory(categoryId)
  const idx = list.findIndex((p) => p.id === postId)
  return {
    prev: idx > 0 ? list[idx - 1] : null,
    next: idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null,
  }
}

export { categories }