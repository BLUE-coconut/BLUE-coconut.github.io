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
          <i>University student</i>
        </div>
        <ul class="related-link">
          <li>
            <a href="https://honor.hdu.edu.cn/" target="_blank">
              Zhuoyue Honors College（卓越学院）
            </a>
          </li>
          <li>
            <a href="http://www.hdu.edu.cn/" target="_blank">
              Hangzhou Dianzi University（杭州电子科技大学）
            </a>
          </li>
        </ul>
        <div class="introduction">
          <b style="font-size: 24px;">Self-introduction: </b>
          <ul>
            <li style="margin: 2% 0;">                  
                <b>Today:</b> I'm a senior student at Hangzhou Dianzi University, majoring in intelligent science and technology. My previous work has been mainly centered on computer vision. For detail information, please refer to the section of "Achievements".
            </li>
            <li style="margin: 2% 0;">
                <b>Future:</b> I've secured an offer for the Master's program in Artificial Intelligence at Zhejiang University as a recommended student. Moving forward, I am excited to delve into the research on the intersection of AI and human-computer interaction.
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
  margin-top: 50px;
  height: fit-content;
  width: 100%;
  padding: 0 15px;
}

.my-box .container {
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 20px;
  border-radius: 30px;
  display: flex;
  gap: 3%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.sidebar {
  width: 35%;
  align-self: center;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}

.sidebar-image {
  max-width: 75%;
  margin-top: 10%;
  margin-bottom: 5%;
}

.sidebar-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.sidebar-text {
  width: 85%;
  margin-bottom: 10%;
  font-size: 18px;
  text-align: left;
  line-height: 1.5;
}

.main-content {
  height: 90%;
  width: 60%;
  align-self: center;
  padding-top: 20px;
  padding-left: 30px;
  flex-grow: 1;
  background-color: rgb(255, 255, 255);
}

.main-content .head {
  font-weight: bold;
  font-size: 52px;
  margin-bottom: 1%;
  display: flex;
  flex-wrap: wrap;
  line-height: 1.2;
}

.main-content ul{
  padding-left: 1.2em;
  margin-left: 0;
}

.subhead {
  font-size: 25px;
  margin-bottom: 3%;
  margin-left: 5px;
}

.related-link {
  font-size: 20px;
  margin-bottom: 5%;
  padding-left: 0;
}

.related-link li {
  margin-bottom: 8px;
}

.related-link a {
  color: #007bff;
  text-decoration: none;
}

.related-link a:hover {
  text-decoration: underline;
}

.introduction {
  margin-top: 20px;
  margin-left: 10px;
  width: 90%;
  font-size: 18px;
  line-height: 1.6;
}

.my-links {
  position: relative;
  height: 50px;
  width: 30%;
  min-width: 280px;
  border-radius: 25px;
  align-content: center;
  margin: 40px auto;
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
    width: 85%;
    padding: 15px;
  }
  
  .main-content {
    padding-left: 40px;
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
    margin-top: 20px;
    padding: 0 10px;
  }
  
  .my-box .container {
    width: 95%;
    flex-direction: column;
    gap: 20px;
    padding: 20px 35px;
    border-radius: 20px;
  }
  
  .sidebar {
    width: 100%;
    order: 1;
    margin-bottom: 20px;
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
    padding: 0;
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
    text-align: left;
  }
  .introduction li{
    list-style: none;
  }
  
  .my-links {
    width: 80%;
    max-width: 320px;
    margin: 30px auto;
  }
}

/* 小屏手机端响应式设计 */
@media (max-width: 480px) {
  .my-box {
    margin-top: 15px;
  }
  
  .my-box .container {
    width: 98%;
    padding: 15px 10px;
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