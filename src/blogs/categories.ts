import type { Category } from './types'

/**
 * 博客分类元数据
 *
 * 新增分类需：
 *   1. 在此处追加一条记录
 *   2. 在 src/blogs/styles/tokens.css 中追加对应的 --cat-<id> 变量
 *   3. 创建 src/blogs/<id>/ 目录放博客 HTML
 */
export const categories: Category[] = [
  {
    id: 'ai-app',
    name: 'AI 应用干货',
    icon: '✨',
    color: '#3498db',
    order: 1,
    description: 'Claude Code 高阶技巧、Agent Team 实操与日常 AI 提效记录',
  },
  {
    id: 'llm-agent',
    name: 'LLM & Agent',
    icon: '🧠',
    color: '#9b59b6',
    order: 2,
    description: 'RAG、MCP、KV Cache、Harness 等大模型与 Agent 底层原理',
  },
  {
    id: 'rl',
    name: '强化学习',
    icon: '🎯',
    color: '#16a085',
    order: 3,
    description: 'MDP、策略分类、马尔可夫过程等强化学习核心概念',
  },
  {
    id: 'dev-basics',
    name: '各类开发&计算机基础',
    icon: '💻',
    color: '#e67e22',
    order: 4,
    description: 'Dart、Flutter、Unity XR 等工程实践笔记',
  },
  {
    id: 'english',
    name: '英语学习',
    icon: '📚',
    color: '#e74c3c',
    order: 5,
    description: '雅思备考经验与英语学习方法论',
  },
]