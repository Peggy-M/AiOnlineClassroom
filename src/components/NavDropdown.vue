<template>
  <div class="nav-dropdown">
    <div class="dropdown-content">
      <!-- 数学栏目 -->
      <div class="subject-column">
        <div class="subject-header">
          <div class="subject-icon math">
            <span class="icon">📚</span>
            <div class="icon-bg"></div>
            <!-- 数学装饰 -->
            <div class="decoration-plus">+</div>
            <div class="decoration-minus">−</div>
            <div class="decoration-multiply">×</div>
            <div class="decoration-divide">÷</div>
            <div class="decoration-equals">=</div>
          </div>
          <span class="subject-title">数学</span>
          <div class="decoration-dot"></div>
          <div class="decoration-line"></div>
        </div>
        <div class="subject-links">
          <router-link to="/math/kindergarten">幼儿园</router-link>
          <router-link to="/math/grade1">一年级</router-link>
          <router-link to="/math/grade2">二年级</router-link>
          <router-link to="/math/grade3">三年级</router-link>
          <router-link to="/math/grade4">四年级</router-link>
          <router-link to="/math/grade5">五年级</router-link>
          <router-link to="/math/grade6">六年级</router-link>
          <router-link to="/math/grade7">七年级</router-link>
          <router-link to="/math/grade8">八年级</router-link>
          <router-link to="/math/algebra">初级代数</router-link>
          <router-link to="/math/geometry">基础几何</router-link>
        </div>
      </div>

      <!-- 科学栏目 -->
      <div class="subject-column">
        <div class="subject-header">
          <div class="subject-icon science">
            <span class="icon">🔬</span>
            <div class="icon-bg"></div>
            <!-- 科学装饰 -->
            <div class="decoration-atom"></div>
            <div class="decoration-dna"></div>
            <div class="decoration-molecule">⚛</div>
            <div class="decoration-flask">🧪</div>
          </div>
          <span class="subject-title">科学</span>
          <div class="decoration-wave"></div>
        </div>
        <div class="subject-links">
          <router-link to="/science/biology">生物</router-link>
          <router-link to="/science/chemistry">化学</router-link>
          <router-link to="/science/physics">物理</router-link>
          <router-link to="/science/astronomy">宇宙学和天文学</router-link>
          <router-link to="/science/health">卫生与医学</router-link>
          <router-link to="/science/electrical">电器工程</router-link>
        </div>
      </div>

      <!-- 计算机栏目 -->
      <div class="subject-column">
        <div class="subject-header">
          <div class="subject-icon computer">
            <span class="icon">💻</span>
            <div class="icon-bg"></div>
            <!-- 计算机装饰 -->
            <div class="decoration-binary">10</div>
            <div class="decoration-bracket">{}</div>
            <div class="decoration-code">&lt;/&gt;</div>
          </div>
          <span class="subject-title">计算机</span>
          <div class="decoration-circle"></div>
        </div>
        <div class="subject-links">
          <router-link to="/computer/programming">计算机编程</router-link>
          <router-link to="/computer/science">计算机科学</router-link>
        </div>
      </div>

      <!-- 艺术与人文 -->
      <div class="subject-column">
        <div class="subject-header">
          <div class="subject-icon arts">
            <span class="icon">🎨</span>
            <div class="icon-bg"></div>
          </div>
          <span class="subject-title">艺术与人文</span>
          <div class="decoration-star">✦</div>
        </div>
        <div class="subject-links">
          <router-link to="/arts/grammar">语法</router-link>
          <router-link to="/arts/storytelling">讲故事</router-link>
        </div>
      </div>

      <!-- 经济和金融 -->
      <div class="subject-column">
        <div class="subject-header">
          <div class="subject-icon economics">
            <span class="icon">💰</span>
            <div class="icon-bg"></div>
          </div>
          <span class="subject-title">经济和金融</span>
          <div class="decoration-square"></div>
        </div>
        <div class="subject-links">
          <router-link to="/economics/markets">金融和资本市场</router-link>
          <router-link to="/economics/micro">微观经济学</router-link>
          <router-link to="/economics/macro">宏观经济学</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-dropdown {
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 1000;
  padding: 24px;
  border-top: 1px solid #e0e0e0;
}

.dropdown-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

.subject-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
}

.subject-header {
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
}

.subject-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  font-size: 24px;
  position: relative;
  z-index: 2;
}

.icon-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  opacity: 0.2;
  transition: opacity 0.3s;
}

.subject-icon:hover .icon-bg {
  opacity: 0.3;
}

.subject-title {
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

/* 装饰元素样式 */
.decoration-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #FFD700;
  border-radius: 50%;
  top: -12px;
  right: 20px;
}

.decoration-line {
  position: absolute;
  width: 40px;
  height: 2px;
  background: #1865f2;
  transform: rotate(-45deg);
  top: 40px;
  right: -20px;
}

.decoration-wave {
  position: absolute;
  top: -15px;
  right: 10px;
  font-size: 20px;
  color: #90EE90;
  transform: rotate(-10deg);
}

.decoration-circle {
  position: absolute;
  width: 12px;
  height: 12px;
  border: 2px solid #87CEEB;
  border-radius: 50%;
  top: -8px;
  right: 15px;
}

.decoration-star {
  position: absolute;
  color: #DDA0DD;
  font-size: 20px;
  top: -12px;
  right: 20px;
}

.decoration-square {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #98FB98;
  transform: rotate(45deg);
  top: -10px;
  right: 25px;
}

.subject-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.subject-links a {
  text-decoration: none;
  color: #666;
  padding: 4px 0;
  transition: all 0.3s;
}

.subject-links a:hover {
  color: #1865f2;
  padding-left: 8px;
}

/* 图标背景色 */
.math .icon-bg { background: #FFD700; }
.science .icon-bg { background: #90EE90; }
.computer .icon-bg { background: #87CEEB; }
.arts .icon-bg { background: #DDA0DD; }
.economics .icon-bg { background: #98FB98; }

/* 数学符号装饰 */
.decoration-plus,
.decoration-minus,
.decoration-multiply,
.decoration-divide,
.decoration-equals {
  position: absolute;
  font-size: 14px;
  color: #FFD700;
  opacity: 0.6;
  animation: float 3s ease-in-out infinite;
}

.decoration-plus {
  top: -15px;
  right: -10px;
  animation-delay: 0s;
}

.decoration-minus {
  bottom: -10px;
  right: -8px;
  animation-delay: 0.5s;
}

.decoration-multiply {
  top: 50%;
  right: -12px;
  animation-delay: 1s;
}

.decoration-divide {
  top: -12px;
  left: -8px;
  animation-delay: 1.5s;
}

.decoration-equals {
  bottom: -8px;
  left: -10px;
  animation-delay: 2s;
}

/* 科学装饰 */
.decoration-atom {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid #90EE90;
  border-radius: 50%;
  top: -15px;
  right: -10px;
  animation: rotate 4s linear infinite;
}

.decoration-atom::before,
.decoration-atom::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #90EE90;
  border-radius: 50%;
  top: -2px;
  left: -2px;
}

.decoration-atom::before {
  transform: rotate(60deg);
}

.decoration-atom::after {
  transform: rotate(-60deg);
}

.decoration-dna {
  position: absolute;
  width: 2px;
  height: 30px;
  background: linear-gradient(to bottom, #90EE90 45%, transparent 45%, transparent 55%, #90EE90 55%);
  background-size: 100% 8px;
  left: -15px;
  animation: dnaMove 3s linear infinite;
}

.decoration-molecule {
  position: absolute;
  font-size: 16px;
  color: #90EE90;
  bottom: -15px;
  right: -12px;
  animation: pulse 2s ease-in-out infinite;
}

/* 计算机装饰 */
.decoration-binary {
  position: absolute;
  font-family: monospace;
  font-size: 12px;
  color: #87CEEB;
  top: -12px;
  right: -15px;
  animation: typeText 2s steps(2) infinite;
}

.decoration-bracket {
  position: absolute;
  color: #87CEEB;
  font-size: 16px;
  left: -12px;
  animation: bracketPulse 1.5s ease-in-out infinite;
}

.decoration-code {
  position: absolute;
  color: #87CEEB;
  font-size: 14px;
  bottom: -15px;
  right: -18px;
  animation: codeFloat 2s ease-in-out infinite;
}

/* 动画效果 */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes dnaMove {
  0% { background-position: 0 0; }
  100% { background-position: 0 8px; }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.2); opacity: 1; }
}

@keyframes typeText {
  0%, 100% { content: '10'; }
  50% { content: '01'; }
}

@keyframes bracketPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes codeFloat {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}

/* 悬停效果增强 */
.subject-icon:hover .icon-bg {
  opacity: 0.4;
  transform: scale(1.1);
}

.subject-icon:hover .decoration-atom,
.subject-icon:hover .decoration-dna,
.subject-icon:hover .decoration-molecule,
.subject-icon:hover .decoration-binary,
.subject-icon:hover .decoration-bracket,
.subject-icon:hover .decoration-code {
  animation-play-state: paused;
  transform: scale(1.2);
}

/* 添加发光效果 */
.math .icon-bg { box-shadow: 0 0 15px rgba(255, 215, 0, 0.3); }
.science .icon-bg { box-shadow: 0 0 15px rgba(144, 238, 144, 0.3); }
.computer .icon-bg { box-shadow: 0 0 15px rgba(135, 206, 235, 0.3); }
.arts .icon-bg { box-shadow: 0 0 15px rgba(221, 160, 221, 0.3); }
.economics .icon-bg { box-shadow: 0 0 15px rgba(152, 251, 152, 0.3); }

@media (max-width: 768px) {
  .dropdown-content {
    grid-template-columns: 1fr;
  }
}
</style> 