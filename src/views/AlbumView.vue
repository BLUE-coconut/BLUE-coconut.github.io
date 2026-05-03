<template>
  <div class="container">
    <div class="album-container" ref="albumContainer">
      <!-- 图片容器 -->
      <div class="photos" ref="photosContainer">
        <template v-for="(image, index) in images" :key="index">
          <img :src="`/images/album/${image}`" :alt="`Image ${index + 1}`">
          <div class="margin"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 动态获取图片列表
const images = ref<string[]>([])

// 动态加载图片
const loadImages = async () => {
  try {
    // 使用 import.meta.glob 动态导入图片
    const imageModules = import.meta.glob('/public/images/album/*.{png,jpg,jpeg,gif,webp}', { eager: true })
    
    const imageList: string[] = []
    
    // 提取文件名
    Object.keys(imageModules).forEach(path => {
      const fileName = path.split('/').pop()
      if (fileName) {
        imageList.push(fileName)
      }
    })
    
    // 按文件名排序
    imageList.sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || '0')
      const numB = parseInt(b.match(/\d+/)?.[0] || '0')
      return numA - numB
    })
    
    images.value = imageList
  } catch (error) {
    console.error('加载图片失败:', error)
    // 如果动态加载失败，使用默认图片列表
    images.value = [
      '2.jpg', 
      '4.jpg',
    ]
  }
}

const albumContainer = ref<HTMLElement>()
const photosContainer = ref<HTMLElement>()
let scrollInterval: number | null = null
let direction = ref(1) // 1为向右，-1为向左
let maxScrollLeft = 0

// 轮播功能
const startCarousel = () => {
  const speed = 5 // 滚动间隔时间（毫秒）
  const scrollStep = 1 // 每次滚动的像素
  
  if (albumContainer.value && photosContainer.value) {
    // 计算最大滚动距离（图片总宽度的一半，因为我们复制了内容）
    const calculateMaxScroll = () => {
      if (photosContainer.value && albumContainer.value) {
        // 计算单组图片的总宽度
        const singleSetWidth = photosContainer.value.scrollWidth / 2
        // 最大滚动距离 = 单组宽度 - 容器可视宽度
        maxScrollLeft = singleSetWidth - albumContainer.value.clientWidth
      }
    }
    
    // 复制内容，形成循环效果
    photosContainer.value.innerHTML += photosContainer.value.innerHTML
    
    // 计算最大滚动距离
    setTimeout(calculateMaxScroll, 50)
    
    const marquee = () => {
      if (albumContainer.value && photosContainer.value) {
        const currentScroll = albumContainer.value.scrollLeft
        
        // 向右滚动到底部，改变方向
        if (direction.value === 1 && currentScroll >= maxScrollLeft) {
          direction.value = -1
        }
        // 向左滚动到顶部，改变方向
        else if (direction.value === -1 && currentScroll <= 0) {
          direction.value = 1
        }
        
        // 根据方向滚动
        albumContainer.value.scrollLeft += direction.value * scrollStep
      }
    }
    
    scrollInterval = setInterval(marquee, speed)
    
    // 鼠标事件控制
    albumContainer.value.addEventListener('mouseenter', () => {
      if (scrollInterval) {
        clearInterval(scrollInterval)
      }
    })
    
    albumContainer.value.addEventListener('mouseleave', () => {
      scrollInterval = setInterval(marquee, speed)
    })
  }
}

onMounted(async () => {
  // 先加载图片列表
  await loadImages()
  
  // 延迟启动轮播，确保DOM已渲染和图片已加载
  setTimeout(() => {
    startCarousel()
  }, 200)
})

onUnmounted(() => {
  if (scrollInterval) {
    clearInterval(scrollInterval)
  }
})
</script>

<style scoped>
.container {
  height: auto;
  min-height: min(75vh, 760px);
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 设置容器的基本样式 */
.album-container {
  overflow: hidden;
  margin: 0 auto;
  width: min(1480px, 100%);
  height: clamp(420px, 75vh, 720px);
  padding: clamp(14px, 2vw, 28px);
  white-space: nowrap; /* 防止图片换行 */
  position: relative;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  align-items: center;
}

/* 包裹图片的容器，设置其宽度 */
.photos {
  height: 100%;
  display: inline-flex;
  align-items: center;
  white-space: nowrap; /* 防止换行 */
}

.photos img {
  height: 100%; /* 保证图片高度与容器高度一致 */
  display: inline-block;
  border-radius: 20px;
  object-fit: cover;
  flex: 0 0 auto;
}

/* 图片之间的间隔 */
.margin {
  width: clamp(12px, 1.6vw, 24px); /* 间隙宽度 */
  flex: 0 0 auto;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .album-container {
    height: clamp(320px, 58vh, 460px);
    border-radius: 16px;
  }

  .margin {
    width: 15px;
  }
}

@media (max-width: 480px) {
  .album-container {
    height: clamp(260px, 52vh, 340px);
    padding: 10px;
  }

  .margin {
    width: 10px;
  }
}
</style>
