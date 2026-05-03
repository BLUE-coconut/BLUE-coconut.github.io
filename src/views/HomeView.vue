<template>
  <div class="my-box">
    <div class="container">
      <div class="sidebar">
        <div class="sidebar-image">
          <img src="/images/myphoto.jpg" alt="个人照片" />
        </div>
        <div class="sidebar-text">
          <b>Add:</b> Hangzhou Dianzi University, No.1158, the 2nd Street in Baiyang Street, 
          Hangzhou Economic Development Zone, Hangzhou, China <br>
          <b>E-mail:</b> haolanhe@hdu.edu.cn
        </div>
      </div>
      <div class="main-content">
        <div class="head">
          <span>HaoLan He</span>
          <span>（何昊蓝）</span>
        </div>
        <div class="subhead">
          <i>AI Research Student &bull; ENFJ </i>
        </div>
        <ul class="related-link">
          <li>
            <a href="https://www.cs.zju.edu.cn/" target="_blank">
              Zhejiang University（浙江大学）
            </a>
          </li>
          <li>
            <a href="https://www.cst.zju.edu.cn/" target="_blank">
              College of Software（软件学院）
            </a>
          </li>
        </ul>
        <div class="introduction">
          <b style="font-size: 24px;">Self-introduction: </b>
          <ul>
            <li style="margin: 2% 0;">
                I graduated from Hangzhou Dianzi University with a degree in Intelligent Science and Technology, ranking <b>#1</b> in my major and securing a recommended place at Zhejiang University.
            </li>
            <li style="margin: 2% 0;">
                Currently, I am a graduate student in Artificial Intelligence at the <b>College of Software, Zhejiang University</b>. My research focuses on <b>AI Agent</b> and <b>HCI</b>, with additional interests in <b>CV</b> and <b>AR&VR</b>.
            </li>
            <li style="margin: 2% 0;">
                I always aspire to <i>"build valuable, warm products and technologies that truly serve people."</i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- 社交链接 -->
    <div class="my-links">
      <div class="link-butt">
            <a href="mailto:haolanhe@hdu.edu.cn">
                <img src="/icons/email.png" alt="Email" style="height: 40px; width: 40px;">
            </a>
        </div>
        <div class="link-butt">
            <a href="https://github.com/BLUE-coconut">
                <img src="/icons/github.png" alt="GitHub" style="height: 40px; width: 40px;">
            </a>
        </div>
        <div class="link-butt">
            <a href="https://gitee.com/bluecoconut">
                <img src="/icons/gitee.png" alt="Gitee" style="height: 40px; width: 40px;">
            </a>
        </div>
        <div class="link-butt">
            <a href="javascript:void(0);" onclick="openImagePopup()">
                <img src="/icons/feishu.png" alt="Feishu" style="height: 40px; width: 40px;">
            </a>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
/* 基础样式 */
.my-box {
  height: fit-content;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: auto;
}

.my-box .container {
  width: min(1240px, 100%);
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  padding: clamp(6px, 0.9vw, 12px);
  border-radius: 30px;
  display: grid;
  grid-template-columns: minmax(220px, 0.78fr) minmax(0, 1.22fr);
  gap: clamp(10px, 1.5vw, 20px);
  align-items: center;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: min(80vh, 780px);
  min-height: auto;
}

.sidebar {
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}

.sidebar-image {
  width: min(75%, 260px);
  margin: 0 0 15px;
}

.sidebar-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.sidebar-text {
  width: 100%;
  max-width: 330px;
  font-size: clamp(13px, 0.95vw, 16px);
  text-align: left;
  line-height: 1.4;
  padding: 0 8px;
}

.main-content {
  width: 100%;
  min-width: 0;
  padding: 0 8px 0 4px;
  background-color: rgb(255, 255, 255);
}

.main-content .head {
  font-weight: bold;
  font-size: clamp(30px, 3vw, 46px);
  margin-bottom: 0.25em;
  display: flex;
  flex-wrap: wrap;
  line-height: 1.1;
}

.main-content ul{
  padding-left: 1.2em;
  margin-left: 0;
}

.subhead {
  font-size: clamp(18px, 1.5vw, 23px);
  margin-bottom: 0.35em;
  margin-left: 5px;
}

.related-link {
  font-size: clamp(15px, 1.2vw, 18px);
  margin-bottom: 1.0em;
  padding-left: 0;
}

.related-link li {
  margin-bottom: 4px;
}

.related-link a {
  color: #007bff;
  text-decoration: none;
}

.related-link a:hover {
  text-decoration: underline;
}

.introduction {
  margin-top: 6px;
  margin-left: 0;
  width: 100%;
  font-size: clamp(14px, 1vw, 17px);
  line-height: 1.45;
  padding: 0 14px;
}

.introduction ul {
  padding-left: 1.25em;
  padding-right: 1.5em;
}

.introduction b[style] {
  font-size: clamp(20px, 1.75vw, 28px) !important;
}

.introduction li[style] {
  margin: 0.45em 0 !important;
  padding-right: 4px;
}

.my-links {
  position: relative;
  height: 50px;
  width: min(360px, 100%);
  border-radius: 25px;
  align-content: center;
  margin: 8px auto 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.link-butt {
  height: 40px;
  flex: 1;
  text-align: center;
  margin: 5px auto;
}

.link-butt img {
  transition: transform 0.2s ease;
}

.link-butt img:hover {
  transform: scale(1.1);
}

/* 平板端响应式设计 */
@media (max-width: 1024px) {
  .my-box .container {
    width: 100%;
    max-height: none;
    min-height: auto;
    padding: 14px;
    gap: 18px;
  }
  
  .main-content .head {
    font-size: 42px;
  }
  
  .subhead {
    font-size: 22px;
  }
  
  .related-link {
    font-size: 18px;
  }
  
  .introduction {
    font-size: 16px;
  }
}

/* 移动端响应式设计 */
@media (max-width: 768px) {
  .my-box {
    padding: 0;
    min-height: auto;
  }
  
  .my-box .container {
    width: 100%;
    flex-direction: column;
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px;
    border-radius: 20px;
    max-height: none;
    min-height: auto;
  }
  
  .sidebar {
    width: 100%;
    order: 1;
  }
  
  .sidebar-image {
    max-width: 200px;
    margin: 0 auto 15px;
  }
  
  .sidebar-text {
    display: none;
    width: 100%;
    text-align: center;
    font-size: 16px;
    margin-bottom: 0;
  }
  
  .main-content {
    width: 100%;
    order: 2;
    padding: 0 4px;
    text-align: center;
  }
  
  .main-content .head {
    font-size: 36px;
    justify-content: center;
    margin-bottom: 15px;
  }
  
  .subhead {
    font-size: 20px;
    margin-left: 0;
    margin-bottom: 20px;
  }
  
  .related-link {
    font-size: 16px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .related-link li {
    list-style: none;
  }
  
  .introduction {
    margin: 0;
    width: 100%;
    font-size: 16px;
    padding: 0 2px;
    text-align: left;
  }
  .introduction li{
    list-style: none;
  }
  
  .my-links {
    width: 80%;
    max-width: 320px;
    margin: 10px auto 0;
  }
}

/* 小屏手机端响应式设计 */
@media (max-width: 480px) {
  .my-box {
    margin-top: 0;
  }
  
  .my-box .container {
    width: 100%;
    padding: 18px 14px;
    border-radius: 15px;
  }
  
  .sidebar-image {
    max-width: 150px;
  }
  
  .sidebar-text {
    font-size: 14px;
  }
  
  .main-content .head {
    font-size: 24px;
  }
  
  .subhead {
    font-size: 16px;
  }
  
  .related-link {
    font-size: 14px;
    list-style: none;
  }
  
  .related-link li {
    list-style: none;
  }
  
  .introduction {
    font-size: 14px;
    padding: 0 4px;
  }

  .introduction ul {
    padding-left: 4px;
    padding-right: 4px;
  }
  
  .my-links {
    width: 90%;
    height: 45px;
  }
  
  .link-butt {
    height: 35px;
  }
  
  .link-butt img {
    height: 30px !important;
    width: 30px !important;
  }
}
</style>
