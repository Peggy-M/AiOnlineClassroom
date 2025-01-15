<template>
  <div id="app">
    <div class="dropdown-backdrop" v-if="showDropdown" @click="showDropdown = false"></div>
    
    <nav class="navbar">
      <div class="nav-left">
        <div class="nav-item explore" 
             @click="toggleDropdown"
             :class="{ active: showDropdown }">
          <span>探索</span>
          <span class="arrow" :class="{ 'arrow-up': showDropdown }">▼</span>
        </div>
      </div>

      <div class="nav-center">
        <router-link to="/" class="logo">
          <div class="logo-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z"/>
            </svg>
          </div>
          <span class="logo-text">智慧课堂</span>
        </router-link>
      </div>

      <div class="nav-right">
        <router-link to="/donate" class="nav-btn donate">捐款</router-link>
        <router-link to="/login" class="nav-btn login">登录</router-link>
        <router-link to="/register" class="nav-btn register">注册</router-link>
      </div>
    </nav>

    <NavDropdown v-show="showDropdown" />
    <router-view/>
  </div>
</template>

<script>
import NavDropdown from '@/components/NavDropdown.vue'

export default {
  name: 'App',
  components: {
    NavDropdown
  },
  data() {
    return {
      showDropdown: false
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    }
  }
}
</script>

<style>
#app {
  position: relative;
}

.navbar {
  position: relative;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  position: relative;
}

.explore:hover {
  background: #f5f5f5;
}

.arrow {
  font-size: 12px;
  transition: transform 0.2s;
}

.arrow-up {
  transform: rotate(180deg);
}

.nav-btn {
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
}

.donate {
  color: #1865f2;
}

.login {
  color: #333;
}

.register {
  background: #1865f2;
  color: white;
}

.register:hover {
  background: #1557d0;
}

.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1865f2;
  background: rgba(24, 101, 242, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.logo:hover .logo-icon {
  transform: rotate(-10deg);
}

.logo-text {
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 22px;
  font-weight: 700;
  background: linear-gradient(120deg, #1865f2, #36a0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
}

.nav-item.active {
  background: #f5f5f5;
}

.dropdown-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  z-index: 999;
}
</style> 