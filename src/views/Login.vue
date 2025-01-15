<template>
  <div class="login-page">
    <div class="login-container">
      <!-- 左侧部分 -->
      <div class="login-image">
        <div class="school-illustration">
          <img src="https://cdn.kastatic.org/images/login/login_productive_learner_2x.png" alt="学习插图" class="school-image" />
        </div>
        <h2 class="image-title">欢迎回来</h2>
        <p class="image-subtitle">继续你的学习之旅</p>
      </div>

      <!-- 右侧登录表单 -->
      <div class="login-form">
        <div class="form-header">
          <h1>登录</h1>
          <p class="login-subtitle">使用以下方式登录</p>
        </div>

        <!-- 社交登录按钮 -->
        <div class="social-buttons">
          <button class="social-btn google">
            <img src="https://www.google.com/favicon.ico" alt="Google" />
            <span>使用 Google 账号登录</span>
          </button>
          <button class="social-btn facebook">
            <img src="https://www.facebook.com/favicon.ico" alt="Facebook" />
            <span>使用 Facebook 账号登录</span>
          </button>
          <button class="social-btn apple">
            <img src="https://www.apple.com/favicon.ico" alt="Apple" />
            <span>使用 Apple 账号登录</span>
          </button>
        </div>

        <div class="divider">
          <span>或使用邮箱登录</span>
        </div>

        <!-- 登录表单 -->
        <div class="form-content">
          <div class="form-group">
            <label>邮箱地址 <span class="required">*</span></label>
            <input 
              type="email" 
              v-model="email" 
              required 
              placeholder="请输入邮箱"
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label>密码 <span class="required">*</span></label>
            <input 
              type="password" 
              v-model="password" 
              required 
              placeholder="请输入密码"
              class="form-input"
            />
            <router-link to="/forgot-password" class="forgot-password">
              忘记密码？
            </router-link>
          </div>

          <button 
            type="submit" 
            class="login-btn"
            :disabled="!isFormValid"
            @click="handleLogin"
          >
            登录
          </button>

          <div class="register-link">
            还没有账号？<router-link to="/register">立即注册</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  created() {
    console.log('Login component created')
  },
  mounted() {
    console.log('Login component mounted')
  },
  errorCaptured(err, vm, info) {
    console.error('Error in Login component:', err, info)
    return false
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isFormValid() {
      // 验证邮箱格式
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailValid = emailRegex.test(this.email);
      
      // 验证密码长度
      const isPasswordValid = this.password.length >= 6;
      
      return isEmailValid && isPasswordValid;
    }
  },
  methods: {
    async handleLogin() {
      if (!this.isFormValid) {
        // 可以添加提示信息
        if (!this.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
          alert('请输入有效的邮箱地址');
          return;
        }
        if (!this.password || this.password.length < 6) {
          alert('密码长度至少6位');
          return;
        }
        return;
      }

      try {
        // 这里模拟登录过程
        console.log('登录信息：', {
          email: this.email
        });

        // 存储登录信息
        localStorage.setItem('userEmail', this.email);
        localStorage.setItem('isLoggedIn', 'true');
        
        // 登录成功后跳转到首页
        this.$router.push('/');
        
      } catch (error) {
        console.error('登录失败：', error);
        alert('登录失败，请重试');
      }
    }
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  background-color: #1B7052;
}

.login-container {
  display: flex;
  width: 100%;
  background: white;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

/* 左侧样式 */
.login-image {
  flex: 1.2;
  background: linear-gradient(135deg, #1B7052 0%, #2E8B57 100%);
  color: white;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.school-illustration {
  width: 100%;
  max-width: 500px;
  margin-bottom: 40px;
}

.school-image {
  width: 100%;
  height: auto;
}

.image-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.3;
}

.image-subtitle {
  font-size: 18px;
  opacity: 0.9;
}

/* 右侧表单样式 */
.login-form {
  flex: 0.8;
  padding: 48px;
  background: white;
  display: flex;
  flex-direction: column;
  max-width: 480px;
}

.form-header {
  text-align: center;
  margin-bottom: 32px;
}

.form-header h1 {
  font-size: 28px;
  color: #333;
  margin-bottom: 8px;
}

.login-subtitle {
  color: #666;
  font-size: 16px;
}

/* 社交登录按钮 */
.social-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: all 0.3s;
}

.social-btn:hover {
  background: #f5f7fa;
  border-color: #1865f2;
}

.social-btn img {
  width: 20px;
  height: 20px;
}

/* 分隔线 */
.divider {
  position: relative;
  text-align: center;
  margin: 24px 0;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: calc(50% - 50px);
  height: 1px;
  background: #e0e0e0;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider span {
  background: white;
  padding: 0 16px;
  color: #666;
  font-size: 14px;
}

/* 表单样式 */
.form-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.required {
  color: #ff4d4f;
  margin-left: 4px;
}

.form-input {
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s;
}

.form-input:hover {
  border-color: #1865f2;
}

.form-input:focus {
  border-color: #1865f2;
  outline: none;
  box-shadow: 0 0 0 2px rgba(24,101,242,0.1);
}

.forgot-password {
  align-self: flex-end;
  font-size: 14px;
  color: #1865f2;
  text-decoration: none;
  margin-top: 4px;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login-btn {
  padding: 14px;
  background: #1865f2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  opacity: 1;
}

.login-btn:not(:disabled):hover {
  background: #1557d0;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(24,101,242,0.2);
}

.login-btn:disabled {
  background: #e0e0e0;
  cursor: not-allowed;
  opacity: 0.7;
}

.register-link {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.register-link a {
  color: #1865f2;
  text-decoration: none;
  font-weight: 500;
  margin-left: 4px;
}

.register-link a:hover {
  text-decoration: underline;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .login-container {
    flex-direction: column;
  }

  .login-image {
    padding: 40px 20px;
  }

  .login-form {
    padding: 40px 24px;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .login-form {
    padding: 24px 16px;
  }

  .social-buttons {
    gap: 8px;
  }

  .social-btn {
    padding: 10px;
  }
}

.form-input.error {
  border-color: #ff4d4f;
}

.error-message {
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 4px;
}

/* 添加加载状态样式 */
.login-btn.loading {
  position: relative;
  pointer-events: none;
}

.login-btn.loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid #fff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: button-loading 0.8s linear infinite;
  margin-left: 8px;
}

@keyframes button-loading {
  to {
    transform: rotate(360deg);
  }
}
</style> 