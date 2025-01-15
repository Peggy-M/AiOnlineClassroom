<template>
  <div class="home">
    <div class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-title">
            <h1>
              帮助每位学生，<br>
              每间课堂，<br>
              达成实效。
            </h1>
            <div class="decorations">
              <div class="decoration square"></div>
              <div class="decoration star">✦</div>
              <div class="decoration line"></div>
            </div>
          </div>
          <p class="subtitle">我们是一家非盈利机构，努力为全世界所有人提供免费的一流教育。</p>
          <div class="hero-buttons">
            <router-link to="/students" class="btn-primary">学习者</router-link>
            <router-link to="/teachers" class="btn-primary">教师</router-link>
            <router-link to="/parents" class="btn-primary">家长</router-link>
          </div>
        </div>
        <div class="hero-image-container">
          <!-- 装饰元素 -->
          <div class="decoration star">✦</div>
          <div class="decoration square"></div>
          <div class="decoration line"></div>
          <!-- 图片容器 -->
          <div class="image-wrapper">
            <img src="https://cdn.kastatic.org/images/lohp/hero_student_collage_US_2x.png" alt="快乐的学生" class="student-image">
          </div>
        </div>
      </div>
    </div>

    <!-- 课程分类部分 -->
    <div class="subjects-section">
      <div class="subjects-grid">
        <!-- 数学 -->
        <div class="subject-card" @click="toggleSubject('math')">
          <div class="subject-main">
            <div class="subject-icon" style="background-color: #ffd700">📚</div>
            <span class="subject-title">数学</span>
            <span class="expand-arrow">{{ activeSubject === 'math' ? '▼' : '▲' }}</span>
          </div>
          <div class="subject-menu" v-if="activeSubject === 'math'">
            <div class="menu-grid">
              <div class="menu-column">
                <router-link to="/math/kindergarten">幼儿园</router-link>
                <router-link to="/math/grade1">一年级</router-link>
                <router-link to="/math/grade2">二年级</router-link>
                <router-link to="/math/grade3">三年级</router-link>
              </div>
              <div class="menu-column">
                <router-link to="/math/grade4">四年级</router-link>
                <router-link to="/math/grade5">五年级</router-link>
                <router-link to="/math/grade6">六年级</router-link>
                <router-link to="/math/grade7">七年级</router-link>
              </div>
              <div class="menu-column">
                <router-link to="/math/grade8">八年级</router-link>
                <router-link to="/math/algebra">初级代数</router-link>
                <router-link to="/math/geometry">基础几何</router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- 科学 -->
        <div class="subject-card" @click="toggleSubject('science')">
          <div class="subject-main">
            <div class="subject-icon" style="background-color: #90EE90">🔬</div>
            <span class="subject-title">科学</span>
            <span class="expand-arrow">{{ activeSubject === 'science' ? '▼' : '▲' }}</span>
          </div>
        </div>

        <!-- 计算机 -->
        <div class="subject-card" @click="toggleSubject('computer')">
          <div class="subject-main">
            <div class="subject-icon" style="background-color: #87CEEB">💻</div>
            <span class="subject-title">计算机</span>
            <span class="expand-arrow">{{ activeSubject === 'computer' ? '▼' : '▲' }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 添加特色说明部分 -->
    <div class="features-section">
      <h2 class="features-title">为什么选择可汗学院？</h2>
      
      <div class="features-grid">
        <!-- 个性化学习 -->
        <div class="feature-card">
          <div class="feature-icon" style="background-color: #FFE4E1">
            <span class="icon">👨‍🎓</span>
          </div>
          <h3>个性化学习</h3>
          <p>学生可以根据自己的节奏来学习。青无独有偶，我们帮补他们的知识空白，然后深入探索他们感兴趣的个知识点。</p>
        </div>

        <!-- 可信赖的内容 -->
        <div class="feature-card">
          <div class="feature-icon" style="background-color: #E6F3FF">
            <span class="icon">📚</span>
          </div>
          <h3>可信赖的内容</h3>
          <p>我们的专家团队创建了可汗学院大学水平的课程内容，涵盖数学、科学及更多科目，这些课程得到了教师的认可。</p>
        </div>

        <!-- 帮助教师的工具 -->
        <div class="feature-card">
          <div class="feature-icon" style="background-color: #FFF3E0">
            <span class="icon">🛠️</span>
          </div>
          <h3>帮助教师的工具</h3>
          <p>通过可汗学院，教师可以找出学生的知识漏洞，有针对性的进行教学，以满足每个学生的需求。</p>
        </div>
      </div>
    </div>

    <!-- 教师展示部分 -->
    <div class="teachers-section">
      <div class="teachers-content">
        <div class="teachers-text">
          <span class="label">教师</span>
          <h2>使你的教室与众不同，<br>并激发学生的积极性。</h2>
          <p>我们全方位的课程管理系统帮助可汗学院教师们更好地管理及跟踪学生的学习。使用可汗学院教课程管理系统的美国教师中有90%的教师表示系统对他们有帮助。</p>
          <button class="cta-button">教师，请从这里开始</button>
        </div>
        <div class="teachers-image">
          <div class="image-collage">
            <!-- 添加装饰元素 -->
            <div class="decoration star">✦</div>
            <div class="decoration circle"></div>
            <div class="decoration line"></div>
            <!-- 使用在线图片 -->
            <img src="https://cdn.kastatic.org/images/teachers/teacher-1.png" alt="教师形象" class="teacher-img">
            <img src="https://cdn.kastatic.org/images/teachers/teacher-2.png" alt="教师形象" class="teacher-img">
            <img src="https://cdn.kastatic.org/images/teachers/teacher-3.png" alt="教师形象" class="teacher-img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      activeSubject: null
    }
  },
  methods: {
    toggleSubject(subject) {
      if (this.activeSubject === subject) {
        this.activeSubject = null;
      } else {
        this.activeSubject = subject;
      }
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: #fff;
}

.hero-section {
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 48px;
}

.hero-text {
  flex: 1;
  position: relative;
}

.hero-title {
  position: relative;
  margin-bottom: 32px;
}

h1 {
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  color: #333;
  position: relative;
  z-index: 1;
}

.decorations {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.decoration {
  position: absolute;
}

.decoration.star {
  color: #FFD700;
  font-size: 24px;
  top: -20px;
  left: -30px;
}

.decoration.square {
  width: 12px;
  height: 12px;
  background: #1865f2;
  transform: rotate(45deg);
  top: 40px;
  right: 60px;
}

.decoration.line {
  width: 40px;
  height: 2px;
  background: #1865f2;
  transform: rotate(-45deg);
  bottom: 20px;
  left: 40px;
}

.subtitle {
  font-size: 20px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 32px;
  max-width: 600px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
}

.btn-primary {
  display: inline-block;
  padding: 14px 28px;
  background: #1865f2;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-primary:hover {
  background: #1557d0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24,101,242,0.2);
}

.hero-image-container {
  flex: 1;
  position: relative;
  max-width: 600px;
}

.image-wrapper {
  position: relative;
  z-index: 1;
}

.student-image {
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

/* 课程分类部分 */
.subjects-section {
  padding: 60px 24px;
  background: #f8f9fa;
}

.subjects-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.subject-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  overflow: hidden;
}

.subject-main {
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.subject-main:hover {
  background: #f5f5f5;
}

.subject-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 16px;
}

.subject-title {
  flex: 1;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.expand-arrow {
  font-size: 12px;
  color: #666;
}

.subject-menu {
  border-top: 1px solid #eee;
  padding: 16px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
}

.menu-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.menu-column a {
  color: #666;
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.3s;
}

.menu-column a:hover {
  background: #f5f5f5;
  color: #1865f2;
}

@media (max-width: 1024px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }

  .hero-text {
    order: 2;
  }

  .hero-image-container {
    order: 1;
    margin-bottom: 48px;
  }

  .hero-buttons {
    justify-content: center;
  }

  .decorations {
    display: none;
  }

  h1 {
    font-size: 42px;
  }

  .subtitle {
    margin: 0 auto 32px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 40px 16px;
  }

  h1 {
    font-size: 32px;
  }

  .subtitle {
    font-size: 16px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .btn-primary {
    width: 100%;
    text-align: center;
  }

  .subjects-grid {
    grid-template-columns: 1fr;
  }
}

/* 特色说明部分样式 */
.features-section {
  padding: 80px 24px;
  background: #fff;
}

.features-title {
  text-align: center;
  font-size: 36px;
  color: #333;
  margin-bottom: 64px;
}

.features-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.feature-card {
  text-align: center;
  padding: 24px;
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon img {
  width: 40px;
  height: 40px;
}

.feature-card h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* 教师展示部分样式 */
.teachers-section {
  padding: 80px 24px;
  background: #f8f9fa;
}

.teachers-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 64px;
}

.teachers-text {
  flex: 1;
}

.label {
  font-size: 14px;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.teachers-text h2 {
  font-size: 36px;
  color: #333;
  margin: 16px 0;
  line-height: 1.3;
}

.teachers-text p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 32px;
}

.cta-button {
  background: #1865f2;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.cta-button:hover {
  background: #1557d0;
  transform: translateY(-2px);
}

.teachers-image {
  flex: 1;
  position: relative;
}

.image-collage {
  position: relative;
  padding: 20px;
}

.teacher-img {
  width: 200px;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
  position: absolute;
}

.teacher-img:nth-child(1) {
  top: 0;
  left: 0;
  z-index: 3;
}

.teacher-img:nth-child(2) {
  top: 40px;
  left: 160px;
  z-index: 2;
}

.teacher-img:nth-child(3) {
  top: 80px;
  left: 80px;
  z-index: 1;
}

/* 装饰元素 */
.decoration {
  position: absolute;
  pointer-events: none;
}

.star {
  color: #1865f2;
  font-size: 24px;
  top: -20px;
  right: 40px;
}

.circle {
  width: 12px;
  height: 12px;
  border: 2px solid #1865f2;
  border-radius: 50%;
  bottom: 20px;
  left: -20px;
}

.line {
  width: 40px;
  height: 2px;
  background: #1865f2;
  transform: rotate(-45deg);
  top: 50%;
  right: -20px;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .teachers-content {
    flex-direction: column;
    text-align: center;
  }

  .teachers-text {
    order: 2;
  }

  .teachers-image {
    order: 1;
    margin-bottom: 40px;
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .features-title {
    font-size: 28px;
  }

  .teachers-text h2 {
    font-size: 28px;
  }
}
</style> 