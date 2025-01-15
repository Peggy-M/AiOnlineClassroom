<template>
  <div class="register-page">
    <div class="register-container">
      <!-- 左侧部分 -->
      <div class="register-image">
        <div class="school-illustration">
          <img src="https://cdn.kastatic.org/images/signup/signup_character_illustration_2x.png" alt="学校插图" class="school-image" />
        </div>
        <h2 class="image-title">加入可汗学院，开启学习之旅</h2>
        <p class="image-subtitle">登录到可汗学院开始吧！</p>
      </div>

      <!-- 右侧表单部分 -->
      <div class="register-form">
        <div class="form-header">
          <h1>创建账号</h1>
          <p class="register-subtitle">选择你的身份开始学习之旅</p>
        </div>
        
        <!-- 身份选择按钮组 -->
        <div class="role-buttons">
          <button 
            class="role-btn" 
            :class="{ active: selectedRole === 'student' }"
            @click="selectedRole = 'student'"
          >
            <span class="role-icon">👨‍🎓</span>
            <span>学生</span>
          </button>
          <button 
            class="role-btn" 
            :class="{ active: selectedRole === 'teacher' }"
            @click="selectedRole = 'teacher'"
          >
            <span class="role-icon">👨‍🏫</span>
            <span>老师</span>
          </button>
          <button 
            class="role-btn" 
            :class="{ active: selectedRole === 'parent' }"
            @click="selectedRole = 'parent'"
          >
            <span class="role-icon">👨‍👩‍👧‍👦</span>
            <span>家长</span>
          </button>
        </div>

        <!-- 表单部分 -->
        <div class="form-content">
          <!-- 生日选择 -->
          <div class="form-group">
            <label>出生日期</label>
            <div class="date-selects">
              <select v-model="month" class="date-select">
                <option value="" disabled selected>月份</option>
                <option v-for="m in 12" :key="m" :value="m">{{m}}月</option>
              </select>
              <select v-model="day" class="date-select">
                <option value="" disabled selected>日期</option>
                <option v-for="d in 31" :key="d" :value="d">{{d}}日</option>
              </select>
              <select v-model="year" class="date-select">
                <option value="" disabled selected>年份</option>
                <option v-for="y in years" :key="y" :value="y">{{y}}年</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label>邮箱地址 <span class="required">*</span></label>
            <input 
              type="email" 
              v-model="email" 
              required 
              placeholder="请输入你的邮箱"
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label>密码 <span class="required">*</span></label>
            <input 
              type="password" 
              v-model="password" 
              required 
              placeholder="设置你的密码（至少6位）"
              class="form-input"
            />
          </div>

          <button 
            type="submit" 
            class="register-btn"
            :disabled="!isFormValid"
            @click="handleRegister"
          >
            开始学习之旅
          </button>

          <div class="login-link">
            已经有账号了？<router-link to="/login">立即登录</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      selectedRole: 'student',
      month: '',
      day: '',
      year: '',
      email: '',
      password: '',
      years: Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)
    }
  },
  computed: {
    isFormValid() {
      return this.selectedRole && 
             this.month && 
             this.day && 
             this.year && 
             this.email && 
             this.password.length >= 6;
    }
  },
  methods: {
    async handleRegister() {
      if (!this.isFormValid) return;

      try {
        // 这里模拟注册过程
        console.log('注册信息：', {
          role: this.selectedRole,
          birthDate: `${this.year}-${this.month}-${this.day}`,
          email: this.email
        });

        // 存储注册信息到 localStorage
        localStorage.setItem('userRole', this.selectedRole);
        localStorage.setItem('userEmail', this.email);
        localStorage.setItem('isFirstLogin', 'true');

        // 注册成功后跳转到首页
        this.$router.push('/');
        
      } catch (error) {
        console.error('注册失败：', error);
      }
    }
  }
}
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  display: flex;
  background-color: #1B7052;
}

.register-container {
  display: flex;
  width: 100%;
  background: white;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

/* 左侧样式 */
.register-image {
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
.register-form {
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

.register-subtitle {
  color: #666;
  font-size: 16px;
}

/* 身份选择按钮 */
.role-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  padding: 4px;
  border-radius: 8px;
  background: #f5f7fa;
}

.role-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border: none;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.role-icon {
  font-size: 24px;
}

.role-btn.active {
  background: white;
  color: #1865f2;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* 表单控件样式 */
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

.date-selects {
  display: flex;
  gap: 12px;
}

.date-select {
  flex: 1;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  color: #333;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
}

.date-select:hover, .form-input:hover {
  border-color: #1865f2;
}

.form-input {
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s;
}

.form-input:focus, .date-select:focus {
  border-color: #1865f2;
  outline: none;
  box-shadow: 0 0 0 2px rgba(24,101,242,0.1);
}

.register-btn {
  padding: 14px;
  background: #1865f2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.register-btn:not(:disabled):hover {
  background: #1557d0;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(24,101,242,0.2);
}

.register-btn:disabled {
  background: #e0e0e0;
  cursor: not-allowed;
}

.login-link {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.login-link a {
  color: #1865f2;
  text-decoration: none;
  font-weight: 500;
  margin-left: 4px;
}

.login-link a:hover {
  text-decoration: underline;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .register-container {
    flex-direction: column;
  }

  .register-image {
    padding: 40px 20px;
  }

  .register-form {
    padding: 40px 24px;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .role-buttons {
    flex-direction: column;
  }

  .date-selects {
    flex-direction: column;
  }

  .register-form {
    padding: 24px 16px;
  }
}
</style> 