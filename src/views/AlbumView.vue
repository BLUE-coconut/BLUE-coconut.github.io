<template>
  <div class="container">
    <div class="album-wrapper">
      <!-- 加载进度提示 -->
      <div v-if="loadingState !== 'ready'" class="status">
        <div v-if="loadingState === 'loading'" class="status-text">
          正在加载图片 ({{ loadedCount }}/{{ totalCount }})...
        </div>
        <div v-else-if="loadingState === 'error'" class="status-text status-error">
          图片加载失败，请刷新重试
        </div>
      </div>

      <div class="album-container" ref="albumContainer">
        <!-- 图片容器：数据层复制两份实现无缝循环 -->
        <div class="photos" ref="photosContainer">
          <template v-for="(image, index) in displayImages" :key="`${image}-${index}`">
            <img
              :src="`/images/album/${image}`"
              :alt="`Image ${index + 1}`"
              :decoding="index < firstSetLength ? 'auto' : 'async'"
              :loading="index < firstSetLength ? 'eager' : 'lazy'"
              :fetchpriority="index === 0 ? 'high' : 'auto'"
              @load="onImageLoad"
              @error="onImageError"
            >
            <div class="margin"></div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

// 动态获取图片列表
const images = ref<string[]>([])
const firstSetLength = ref(0)

const loadedCount = ref(0)
const totalCount = ref(0)
const loadingState = ref<'loading' | 'ready' | 'error'>('loading')

const displayImages = computed(() => {
  // 数据层复制一份，配合 CSS transform 实现无缝循环
  return [...images.value, ...images.value]
})

// 动态加载图片列表
const loadImages = async () => {
  try {
    const imageModules = import.meta.glob('/public/images/album/*.{png,jpg,jpeg,gif,webp}', { eager: true })

    const imageList: string[] = []
    Object.keys(imageModules).forEach(path => {
      const fileName = path.split('/').pop()
      if (fileName) imageList.push(fileName)
    })

    imageList.sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || '0')
      const numB = parseInt(b.match(/\d+/)?.[0] || '0')
      return numA - numB
    })

    images.value = imageList
    firstSetLength.value = imageList.length
  } catch (error) {
    console.error('加载图片列表失败:', error)
    images.value = ['2.jpg', '4.jpg']
    firstSetLength.value = 2
  }
}

// 等所有图片下载并解码完成
const preloadAllImages = (): Promise<void> => {
  totalCount.value = firstSetLength.value

  const tasks = images.value.map(src => {
    return new Promise<void>((resolve) => {
      const img = new Image()
      img.onload = () => resolve()
      img.onerror = () => {
        console.warn(`图片加载失败: ${src}`)
        resolve() // 单图失败不阻塞整个流程
      }
      img.src = `/images/album/${src}`
    })
  })

  return Promise.all(tasks).then(() => undefined)
}

const onImageLoad = () => {
  loadedCount.value++
}

const onImageError = () => {
  loadedCount.value++
  console.warn('某张图片加载失败')
}

// 轮播
const albumContainer = ref<HTMLElement>()
const photosContainer = ref<HTMLElement>()
let rafId: number | null = null
let lastTimestamp = 0
let maxScrollLeft = 0
const direction = ref(1) // 1 向右，-1 向左

const calculateMaxScroll = () => {
  if (!photosContainer.value || !albumContainer.value) return
  // 单组图片总宽度（displayImages 是 2 份，所以除以 2）
  const singleSetWidth = photosContainer.value.scrollWidth / 2
  maxScrollLeft = Math.max(0, singleSetWidth - albumContainer.value.clientWidth)
}

const tick = (timestamp: number) => {
  if (!albumContainer.value || loadingState.value !== 'ready') {
    rafId = requestAnimationFrame(tick)
    return
  }

  // 限制帧间隔，避免在低刷设备上过快
  if (timestamp - lastTimestamp < 16) {
    rafId = requestAnimationFrame(tick)
    return
  }
  lastTimestamp = timestamp

  const currentScroll = albumContainer.value.scrollLeft

  if (direction.value === 1 && currentScroll >= maxScrollLeft) {
    direction.value = -1
  } else if (direction.value === -1 && currentScroll <= 0) {
    direction.value = 1
  }

  albumContainer.value.scrollLeft += direction.value * 1
  rafId = requestAnimationFrame(tick)
}

const startCarousel = async () => {
  await nextTick() // 确保 DOM 已渲染
  calculateMaxScroll()

  // 监听窗口尺寸变化，重算 maxScrollLeft
  window.addEventListener('resize', calculateMaxScroll)

  rafId = requestAnimationFrame(tick)
}

onMounted(async () => {
  await loadImages()
  await preloadAllImages() // 等所有图片字节到齐再开始
  loadingState.value = 'ready'
  startCarousel()
})

onUnmounted(() => {
  if (rafId !== null) cancelAnimationFrame(rafId)
  window.removeEventListener('resize', calculateMaxScroll)
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

.album-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.status {
  text-align: center;
  padding: 8px;
}

.status-text {
  display: inline-block;
  font-size: 14px;
  color: #666;
  background: rgba(255, 255, 255, 0.7);
  padding: 6px 16px;
  border-radius: 999px;
}

.status-error {
  color: #c00;
}

.album-container {
  overflow: hidden;
  margin: 0 auto;
  width: min(1480px, 100%);
  height: clamp(420px, 75vh, 720px);
  padding: clamp(14px, 2vw, 28px);
  white-space: nowrap;
  position: relative;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  align-items: center;
}

.photos {
  height: 100%;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  will-change: transform;
}

.photos img {
  height: 100%;
  display: inline-block;
  border-radius: 20px;
  object-fit: cover;
  flex: 0 0 auto;
}

.margin {
  width: clamp(12px, 1.6vw, 24px);
  flex: 0 0 auto;
}

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