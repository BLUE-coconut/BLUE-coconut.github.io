<template>
  <nav>
    <div class="nav-container brand-container">
      <span class="brand">Welcome to my website!</span>
    </div>
    <div class="nav-container tabs-container">
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
          <router-link to="/project" :class="{ active: route.path === '/project' }">
            Projects
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
    <div class="nav-spacer" aria-hidden="true"></div>
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
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 10px clamp(16px, 4vw, 48px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-container {
  height: fit-content;
  margin: 0;
  min-width: 0;
}

.brand-container {
  justify-self: center;
  text-align: center;
  width: 100%;
}

.tabs-container {
  grid-column: 2;
  justify-self: center;
}

.nav-spacer {
  grid-column: 3;
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
  gap: 8px 16px;
}

.nav.nav-pills li {
  list-style: none;
  margin: 0;
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
@media (max-width: 900px) {
  nav {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 15px 12px;
  }

  .brand-container,
  .tabs-container,
  .nav-spacer {
    grid-column: 1;
    justify-self: center;
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
