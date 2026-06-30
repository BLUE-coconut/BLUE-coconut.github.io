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
  // ========== AI 应用干货 ==========
  {
    id: 'claude-code-tips',
    categoryId: 'ai-app',
    title: 'Claude Code 高阶实用技巧',
    description: '/rewind、/rename、/statusline、/compact、/stats 等 6 个让 Claude Code 日常体验明显提升的高阶技巧。',
    coverImage: '/images/blog/claude-code-tips.png',
    updateTime: '2026-06-29',
    readTime: '12 min',
    tags: ['Claude Code', 'AI 提效', '工作流'],
    htmlPath: './ai-app/claude-code-tips.html',
  },
  {
    id: 'agent-team',
    categoryId: 'ai-app',
    title: 'Agent Team 使用实录',
    description: 'OpenClaw SubAgent、Claude Agent Team、claude-code-bridge 三种多 Agent 协作方案实操对比。',
    coverImage: '/images/blog/agent-team.png',
    updateTime: '2026-03-08',
    readTime: '15 min',
    tags: ['SubAgent', 'Agent Team', 'ccb'],
    htmlPath: './ai-app/agent-team.html',
  },

  // ========== LLM & Agent ==========
  {
    id: 'rag-concepts',
    categoryId: 'llm-agent',
    title: 'RAG 基本概念',
    description: 'RAG 理论、数据爬取与预处理、向量存储与检索、RAG 链构造与测试优化的完整笔记。',
    coverImage: '/images/blog/rag-concepts.png',
    updateTime: '2025-09-20',
    readTime: '25 min',
    tags: ['RAG', 'Embedding', '向量检索'],
    htmlPath: './llm-agent/rag-concepts.html',
  },
  {
    id: 'mcp-cli-skill-plugin',
    categoryId: 'llm-agent',
    title: 'MCP & CLI & Skill & Plugin 概念原理辨析',
    description: 'Claude Code 能力组合的四种机制：MCP、CLI、Skill、Plugin 的概念、原理与对比。',
    coverImage: '/images/blog/mcpcliskillplugin.png',
    updateTime: '2026-04-15',
    readTime: '18 min',
    tags: ['MCP', 'Skill', 'Plugin'],
    htmlPath: './llm-agent/mcp-cli-skill-plugin.html',
  },
  {
    id: 'kv-cache',
    categoryId: 'llm-agent',
    title: '缓存命中率 & KV Cache',
    description: 'KV Cache（机制层）、Prefix Cache（工程层）、缓存命中率（指标层）三个层次的概念辨析。',
    coverImage: '/images/blog/kvcache.jpg',
    updateTime: '2026-05-15',
    readTime: '22 min',
    tags: ['KV Cache', 'Prefix Cache', '成本优化'],
    htmlPath: './llm-agent/kv-cache.html',
  },
  {
    id: 'harness-intro',
    categoryId: 'llm-agent',
    title: 'Harness 导论：从 LLM 到 Agent Harness',
    description: '从 Prompt Engineering 到 Context Engineering 再到 Harness Engineering 的方法论演进。',
    coverImage: '/images/blog/Harness.png',
    updateTime: '2026-02-20',
    readTime: '20 min',
    tags: ['Harness', 'Agent', '工程化'],
    htmlPath: './llm-agent/harness-intro.html',
  },

  // ========== 强化学习 ==========
  {
    id: 'rl-basics',
    categoryId: 'rl',
    title: '强化学习基础概念与分类',
    description: '强化学习定义、智能体要素、与监督学习的区别，以及 Model-Free / On-Policy / Policy-Based 等分类。',
    coverImage: '/images/blog/RL.png',
    updateTime: '2025-09-28',
    readTime: '18 min',
    tags: ['MDP', '策略', '价值函数'],
    htmlPath: './reinforcement-learning/rl-basics.html',
  },
  {
    id: 'markov-process',
    categoryId: 'rl',
    title: '马尔可夫过程',
    description: '从马尔可夫性到马尔可夫链、奖励过程，再到马尔可夫决策过程（MDP）的完整数学框架。',
    coverImage: '/images/blog/markov-process.png',
    updateTime: '2025-09-30',
    readTime: '16 min',
    tags: ['MDP', 'Bellman', '价值函数'],
    htmlPath: './reinforcement-learning/markov-process.html',
  },

  // ========== 各类开发&计算机基础 ==========
  {
    id: 'dart',
    categoryId: 'dev-basics',
    title: 'Dart 语言核心要点',
    description: 'Dart 变量定义（var / dynamic / final / const）、异步编程（Future / async / await）的核心要点。',
    coverImage: '/images/blog/Dart.jpg',
    updateTime: '2025-08-18',
    readTime: '15 min',
    tags: ['Dart', '异步编程', 'Flutter'],
    htmlPath: './dev-basics/dart.html',
  },
  {
    id: 'flutter',
    categoryId: 'dev-basics',
    title: 'Flutter 跨平台开发笔记',
    description: 'Widget 四棵树、状态管理、路由管理、Key 原理、Provider 状态共享等 Flutter 核心模块。',
    coverImage: '/images/blog/Flutter.png',
    updateTime: '2025-08-25',
    readTime: '22 min',
    tags: ['Flutter', 'Widget', 'Provider'],
    htmlPath: './dev-basics/flutter.html',
  },
  {
    id: 'unity-xr',
    categoryId: 'dev-basics',
    title: 'Unity XR 开发笔记',
    description: 'XRI（XR Interaction Toolkit）、Input System、物理模拟的 Unity XR 开发核心模块笔记。',
    coverImage: '/images/blog/unity-xr.png',
    updateTime: '2025-04-25',
    readTime: '15 min',
    tags: ['Unity', 'OpenXR', 'XRI'],
    htmlPath: './dev-basics/unity-xr.html',
  },

  // ========== 英语学习 ==========
  {
    id: 'ielts',
    categoryId: 'english',
    title: '雅思备考经验分享',
    description: '听力、阅读、写作、口语四科的备考方法与应试技巧总结。',
    coverImage: '/images/blog/IELTS.jpg',
    updateTime: '2023-04-25',
    readTime: '12 min',
    tags: ['IELTS', 'English', '备考'],
    htmlPath: './english/ielts.html',
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