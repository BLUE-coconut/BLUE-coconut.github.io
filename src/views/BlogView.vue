<template>
  <div class="my-box">
    <div class="container">
      <!-- Projects Section -->
      <section class="section">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          <div 
            v-for="project in projects" 
            :key="project.id"
            class="project-card"
            @click="goToProject(project.id)"
          >
            <div class="card-image">
              <img :src="project.coverImage" :alt="project.title" />
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-description">{{ project.description }}</p>
              <div class="card-meta">
                <span class="project-time">{{ project.time }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Blogs Section -->
      <section class="section">
        <h2 class="section-title">Blogs</h2>
        <div class="blogs-list">
          <div 
            v-for="blog in blogs" 
            :key="blog.id"
            class="blog-item"
            @click="goToBlog(blog.url)"
          >
            <div class="blog-image">
              <img :src="blog.coverImage" :alt="blog.title" />
            </div>
            <div class="blog-content">
              <h3 class="blog-title">{{ blog.title }}</h3>
              <p class="blog-description">{{ blog.description }}</p>
              <div class="blog-meta">
                <span class="update-time">{{ blog.updateTime }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 项目数据
const projects = ref([
  {
    id: 1,
    title: 'Vue 个人网站',
    description: '基于 Vue 3 + TypeScript 开发的响应式个人网站，包含简历展示、相册轮播、博客系统等功能模块。',
    coverImage: '/images/project/1.png',
    time: '2024年1月 - 2024年3月'
  },
  {
    id: 2,
    title: '智能聊天机器人',
    description: '集成自然语言处理技术的智能对话系统，支持多轮对话、情感分析和个性化回复。',
    coverImage: '/images/2.jpg',
    time: '2023年9月 - 2023年12月'
  },
  {
    id: 3,
    title: '数据可视化平台',
    description: '企业级数据分析和可视化平台，支持多种图表类型、实时数据更新和交互式仪表板。',
    coverImage: '/images/3.jpg',
    time: '2023年6月 - 2023年8月'
  },
  {
    id: 4,
    title: '移动端 App 开发',
    description: '跨平台移动应用开发，包含用户认证、数据同步、离线缓存等核心功能。',
    coverImage: '/images/4.jpg',
    time: '2023年3月 - 2023年5月'
  }
])

// 博客数据
const blogs = ref([
  {
    id: 1,
    title: 'Vue 3 Composition API 深度解析',
    description: '详细介绍 Vue 3 Composition API 的使用方法、最佳实践和与 Options API 的对比分析。',
    coverImage: '/images/6.jpg',
    updateTime: '2024年2月15日',
    url: 'https://example.com/blog/vue3-composition-api'
  },
  {
    id: 2,
    title: 'TypeScript 在前端开发中的应用',
    description: '从基础语法到高级特性，全面讲解 TypeScript 如何提升前端开发效率和代码质量。',
    coverImage: '/images/7.jpg',
    updateTime: '2024年1月28日',
    url: 'https://example.com/blog/typescript-frontend'
  },
  {
    id: 3,
    title: '现代前端工程化实践',
    description: '探讨前端工程化的发展趋势，包括构建工具、代码规范、自动化测试等方面的最佳实践。',
    coverImage: '/images/8.jpg',
    updateTime: '2024年1月10日',
    url: 'https://example.com/blog/frontend-engineering'
  },
  {
    id: 4,
    title: '响应式设计的核心原理',
    description: '深入理解响应式设计的实现原理，包括媒体查询、弹性布局和移动端适配策略。',
    coverImage: '/images/9.jpg',
    updateTime: '2023年12月22日',
    url: 'https://example.com/blog/responsive-design'
  }
])

// 跳转到项目详情页
const goToProject = (projectId: number) => {
  // 这里可以跳转到项目详情页，暂时使用 console.log
  console.log(`跳转到项目 ${projectId} 详情页`)
  // router.push(`/project/${projectId}`)
}

// 跳转到博客链接
const goToBlog = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
/* 基础样式 */
.my-box {
  margin-top: 75px;
  height: fit-content;
  width: 100%;
  padding: 0 15px;
}

.my-box .container {
  width: 80%;
  max-width: 1500px;
  margin: 0 auto;
  position: relative;
  padding: 30px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 栏目样式 */
.section {
  margin-bottom: 60px;
}

.section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 52px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  letter-spacing: -0.5px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, #3498db, #2980b9);
  border-radius: 2px;
}

/* Projects 样式 */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.project-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #f0f0f0;
  /* max-height: 500px; */
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
  flex-shrink: 0;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 0px 25px;
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 24px;
  font-weight: 600;
  color: #2c3e50;
  margin-top: 15px;
  margin-bottom: 10px;
  line-height: 1.3;
  letter-spacing: -0.3px;
}

.card-description {
  color: #7f8c8d;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.card-meta {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
}

.project-time {
  color: #3498db;
  font-size: 12px;
  font-weight: 500;
  background: rgba(52, 152, 219, 0.1);
  padding: 6px 12px;
  border-radius: 20px;
}

/* Blogs 样式 */
.blogs-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.blog-item {
  display: flex;
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #f0f0f0;
  min-height: 160px;
}

.blog-item:hover {
  transform: translateX(10px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
}

.blog-image {
  width: 260px;
  height: 160px;
  flex-shrink: 0;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-item:hover .blog-image img {
  transform: scale(1.05);
}

.blog-content {
  flex: 1;
  padding: 0px 25px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.blog-title {
  font-size: 22px;
  font-weight: 600;
  color: #2c3e50;
  margin-top: 15px;
  margin-bottom: 10px;
  line-height: 1.3;
  letter-spacing: -0.3px;
}

.blog-description {
  color: #7f8c8d;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.blog-meta {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.update-time {
  color: #95a5a6;
  font-size: 12px;
  background: rgba(149, 165, 166, 0.1);
  padding: 6px 12px;
  border-radius: 20px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .my-box .container {
    width: 85%;
    padding: 25px;
  }
  
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
  }

  .section-title {
    font-size: 46px;
    margin-bottom: 40px;
  }
  .section-title::after{
    bottom: -15px;
    width: 110px;
    height: 4px;
  }
  
  
  .card-image {
    height: 200px;
  }
}

@media (max-width: 768px) {
  .my-box .container {
    width: 95%;
    padding: 20px;
  }
  
  .section-title {
    font-size: 42px;
    margin-bottom: 40px;
  }
  .section-title::after{
    bottom: -15px;
    width: 95px;
    height: 3px;
  }
  
  .section {
    margin-bottom: 50px;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .card-image {
    height: 180px;
  }
  
  .card-content {
    padding: 0px 20px;
  }
  
  .blog-item {
    flex-direction: column;
    min-height: auto;
  }
  
  .blog-image {
    width: 100%;
    height: 200px;
  }
  
  .blog-content {
    padding: 20px;
  }
  
}

@media (max-width: 480px) {
  .my-box {
    margin-top: 60px;
    padding: 0 10px;
  }
  
  .my-box .container {
    width: 100%;
    padding: 20px;
    border-radius: 20px;
  }
  
  .section {
    margin-bottom: 40px;
  }
  
  .section-title {
    font-size: 32px;
    margin-bottom: 40px;
  }

  .section-title::after {
  bottom: -15px;
  width: 80px;
  height: 3px;
}
  
  .projects-grid {
    gap: 20px;
  }
  
  .card-image {
    height: 160px;
  }
  
  .card-content {
    padding: 0px 15px;
  }
  
  
  .card-description {
    margin-bottom: 15px;
  }
  
  .project-time {
    padding: 5px 10px;
  }
  
  .blogs-list {
    gap: 20px;
  }
  
  .blog-image {
    height: 180px;
  }
  
  .blog-content {
    padding: 18px;
  }
  
  .blog-title {
    margin-bottom: 10px;
  }
  
  .blog-description {
    font-size: 0.95rem;
    margin-bottom: 12px;
  }
  
  .update-time {
    font-size: 0.85rem;
    padding: 3px 8px;
  }
}
</style>