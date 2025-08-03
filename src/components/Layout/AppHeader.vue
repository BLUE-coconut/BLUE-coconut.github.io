<template>
  <nav>
    <div class="nav-container">
      <span class="brand">Welcome to my website!</span>
    </div>
    <div class="nav-container">
      <ul class="nav nav-pills">
        <li role="presentation">
          <router-link to="/" :class="{ active: route.path === '/' }">
            Home
          </router-link>
        </li>
        <li role="presentation">
          <router-link to="/biography" :class="{ active: route.path === '/biography' }">
            Resume
          </router-link>
        </li>
        <li role="presentation">
          <router-link to="/blog" :class="{ active: route.path === '/blog' }">
            Blogs
          </router-link>
        </li>
        <li role="presentation">
          <router-link to="/album" :class="{ active: route.path === '/album' }">
            Album
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
nav {
  width: 100%;
  height: fit-content;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-container {
  height: fit-content;
  margin: auto;
  align-content: center;
  padding-left: 5%;
  padding-right: 5%;
}

.brand {
  font-family: 'Pacifico', cursive;
  font-size: 1.5em;
  white-space: nowrap;
}

.nav.nav-pills {
  align-self: center;
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  flex-wrap: wrap;
}

.nav.nav-pills li {
  list-style: none;
  margin: 5px 15px;
}

.nav.nav-pills a {
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  color: #333;
  white-space: nowrap;
}

.nav.nav-pills a.active {
  background-color: #007bff;
  color: white;
}

.nav.nav-pills a:hover {
  background-color: #70b2f8;
  color: white;
}

/* 移动端响应式设计 */
@media (max-width: 768px) {
  nav {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 10px;
    padding: 15px 0;
  }
  
  .nav-container {
    padding-left: 2%;
    padding-right: 2%;
  }
  
  .brand {
    font-size: 1.2em;
    text-align: center;
  }
  
  .nav.nav-pills {
    font-size: 1.2em;
    justify-content: center;
  }
  
  .nav.nav-pills li {
    margin: 3px 8px;
  }
  
  .nav.nav-pills a {
    padding: 6px 12px;
    font-size: 0.9em;
  }
}

@media (max-width: 480px) {
  .brand {
    font-size: 1em;
  }
  
  .nav.nav-pills {
    font-size: 1em;
  }
  
  .nav.nav-pills li {
    margin: 2px 5px;
  }
  
  .nav.nav-pills a {
    padding: 5px 10px;
    font-size: 0.8em;
  }
}
</style>