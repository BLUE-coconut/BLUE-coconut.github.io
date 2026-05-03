# 页面布局优化问题与修复方法

本文档梳理本轮个人主页响应式布局优化中遇到的主要问题、成因和对应修复方法。相同类型的问题已合并说明，方便后续继续调整页面时复用。

## 1. 页面整体居中与留白不统一

### 问题表现

- 不同页面的内容区域与浏览器边缘距离不一致。
- 首页、简历页、博客页、相册页切换时，主体卡片宽度和上下位置有明显跳动。
- 部分页面既由外层 `AppLayout` 控制 padding，又由页面自身 `.my-box` 或 `.container` 继续加 padding/margin，导致空白叠加。

### 原因

- 外层布局和页面组件各自管理页面留白。
- 多个页面都使用 `.container`，同时受到 Bootstrap 默认样式影响。
- 一些页面设置了固定 `margin-top`，与 `AppLayout` 的居中布局冲突。

### 修复方法

- 将页面级通用留白统一收敛到 `AppLayout.vue` 的 `.main-content`。
- 页面组件内部只负责卡片内容布局，不再额外制造大范围页面留白。
- 移除或压缩各页面旧的 `margin-top`、重复 padding。
- 使用 `width: min(..., 100%)` 统一页面最大宽度和小屏适配。

## 2. Bootstrap `.container` 伪元素干扰 Grid/Flex

### 问题表现

- 首页核心卡片使用 grid 布局后，左侧出现异常空白。
- 头像和正文列位置不符合预期，看起来像没有居中。

### 原因

- Bootstrap 的 `.container::before` 和 `.container::after` clearfix 伪元素参与了 grid/flex 布局。
- 这些伪元素被当作额外 grid item，打乱了真实内容列。

### 修复方法

在全局样式中限制性覆盖：

```css
.app-layout .container::before,
.app-layout .container::after {
  display: none;
  content: none;
}
```

这样保留 Bootstrap 其他能力，同时避免页面级容器布局被伪元素污染。

## 3. TopBar 中 Tab 组没有真正居中

### 问题表现

- 四个导航 tab 视觉上没有作为整体位于页面中央。
- `Welcome to my website!` 与 tab 组的相对位置不稳定。
- 中等宽度下导航可能换行或出现空列造成的偏移。

### 原因

- 顶部导航最初使用普通 flex 或不均衡 grid，品牌文本会影响 tab 组的中心位置。
- tab 组和品牌文本没有明确分属三个布局区域。

### 修复方法

- 将 `nav` 改为三列 grid：`1fr auto 1fr`。
- tab 组放在中间 `auto` 列，保证四个 tab 作为整体居中。
- 品牌文本放在左侧 `1fr` 区域，并在该区域内部居中。
- 右侧保留一个空 spacer，用于平衡左右空间。
- 小屏下切换为单列布局，品牌和 tab 上下排列。

## 4. 首页核心内容轻微滚动

### 问题表现

- 首页核心卡片和下方 links bar 基本能放进一屏，但仍然有轻微 scroll。
- topBar 与卡片之间的空白略大，压缩了有效内容区。

### 原因

滚动不是单一元素造成，而是多个高度叠加：

- topBar 自身高度。
- `AppLayout` 的 `.main-content` 上下 padding。
- `HomeView` 中 `.my-box` 曾设置 `min-height: calc(100vh - 82px)`。
- 核心卡片自身的 `min-height/max-height`。
- links bar 固定高度和上方 margin。

其中 `.my-box` 的视口高度占位是主要来源之一。它已经接近一整屏，但外面还有 topBar 和 padding，最终总高度超过 `100vh`。

### 修复方法

- 去掉 `.my-box` 的视口高度占位，改为 `min-height: auto`。
- 保留核心卡片自身的高度控制，而不是让外层也占满视口。
- 收紧 `.my-links` 的上边距，从较大的 `20px` 降到更紧凑的 `8px`。
- 压缩 `AppLayout` 在移动端的上下 padding。
- 保持照片尺寸不变，只调整外层空白和内容容器空间。

## 5. 首页卡片高度与内容舒展度的平衡

### 问题表现

- 卡片高度过小时，内容显得挤。
- 卡片高度过大时，页面更容易滚动。
- 直接缩小照片会破坏视觉比例，不符合预期。

### 原因

- 首页卡片中照片、个人信息、正文介绍、links bar 都在争夺垂直空间。
- 如果通过压缩照片解决滚动，会改变核心视觉资产的尺寸。
- 如果单纯增大 `min-height`，又会推高整体页面高度。

### 修复方法

- 不通过缩放照片解决问题，恢复照片原有比例。
- 通过以下方式扩大可用区域：
  - 增大卡片最大宽度。
  - 减小卡片内部 padding。
  - 减小两列之间 gap。
  - 压缩正文段落和标题之间的 margin。
  - 收紧 links bar 与卡片之间的距离。
- 卡片高度只保留适中约束，避免过大的 `min-height` 把页面撑出视口。

## 6. Self-introduction 列表右侧 Padding 不足

### 问题表现

- `Self-introduction` 中的 `<ul>` 文本在某些窗口宽度下贴近卡片右侧边缘。
- 长英文句子换行后，右侧留白不稳定。

### 原因

- `.main-content ul` 主要设置了 `padding-left`，照顾的是左侧列表缩进。
- `.introduction` 虽有外层 padding，但内部 `ul/li` 没有明确右侧 padding。
- 英文长句换行位置随窗口宽度变化，容易放大右侧贴边问题。

### 修复方法

为介绍区域和内部列表分别设置右侧空间：

```css
.introduction {
  padding: 0 14px;
}

.introduction ul {
  padding-left: 1.25em;
  padding-right: 12px;
}

.introduction li[style] {
  padding-right: 4px;
}
```

小屏下使用更紧凑的 padding，避免内容区域过窄。

## 7. Album 页面宽度不足与图片垂直不居中

### 问题表现

- Album 页面在宽屏下显示区域不够大。
- 相册容器高度固定，图片和容器之间的上下关系不自然。
- 移动端图片高度与容器高度需要更灵活。

### 原因

- 相册容器最大宽度偏小。
- 图片高度和容器高度使用固定像素值，缺乏视口自适应。
- `.photos` 使用 inline-block，不利于垂直居中。

### 修复方法

- 放宽相册最大宽度，例如 `width: min(1480px, 100%)`。
- 使用 `clamp()` 控制相册高度，在不同视口下平滑变化。
- 将图片容器改为 `inline-flex`，并使用 `align-items: center`。
- 图片高度跟随父容器高度，避免上下空隙不均。
- 间距使用 `clamp()`，让桌面和移动端间距自然缩放。

## 8. Resume 与 Blog 页面和首页节奏不一致

### 问题表现

- Resume、Blog 页面相较首页有更大的顶部空白。
- 页面切换时主体卡片宽度、位置、边距节奏不统一。

### 原因

- 这些页面保留了旧的 `margin-top` 和页面自身 padding。
- 外层 `AppLayout` 已经负责页面留白后，内部页面继续加留白会造成重复。

### 修复方法

- 去掉页面级大 `margin-top`。
- 将页面容器宽度改为 `width: min(..., 100%)`。
- 让 `AppLayout` 统一负责页面与 topBar 之间的距离。
- 页面内部只保留内容卡片所需 padding。

## 9. 响应式设计中的通用经验

### 问题总结

本轮优化里，多数问题不是某一个 CSS 属性错误，而是多个布局层同时管理同一件事：

- 外层控制高度，内层也控制高度。
- 外层控制 padding，内层也控制页面留白。
- Bootstrap 默认样式参与自定义 grid/flex。
- 固定像素高度和视口高度混用。

### 后续建议

- 页面级留白只放在 `AppLayout`。
- 页面组件只控制自己的卡片和内容排版。
- 避免多个父子层同时使用 `min-height: 100vh` 或类似视口高度计算。
- 对固定格式内容使用 `width: min(...)`、`height: clamp(...)`、`gap: clamp(...)`。
- 对长文本区域单独设置左右 padding，尤其是包含 `ul/li` 的内容。
- 调整是否滚动时，优先排查：
  - 外层 padding。
  - 子页面 `min-height`。
  - 固定高度元素。
  - margin 折叠或叠加。
  - 额外的导航/链接栏高度。

