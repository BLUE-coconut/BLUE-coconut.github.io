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
    id: 'ai',
    name: 'AI',
    icon: '🤖',
    color: '#3498db',
    order: 1,
    description: 'AI Agent、RAG、LLM 应用与工程实践',
  },
  {
    id: 'rl',
    name: '强化学习',
    icon: '🎯',
    color: '#9b59b6',
    order: 2,
    description: 'MDP、Policy Gradient、PPO 与 DQN 详解',
  },
  {
    id: 'game',
    name: 'Game & XR',
    icon: '🎮',
    color: '#e67e22',
    order: 3,
    description: 'Unity XR、OpenXR、Quest 与游戏开发',
  },
  {
    id: 'mobile',
    name: '移动开发',
    icon: '📱',
    color: '#16a085',
    order: 4,
    description: 'Flutter、跨端适配与状态管理',
  },
  {
    id: 'language',
    name: '语言学习',
    icon: '📚',
    color: '#e74c3c',
    order: 5,
    description: 'IELTS、英语学习方法论',
  },
]