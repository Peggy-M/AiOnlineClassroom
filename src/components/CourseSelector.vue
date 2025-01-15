<template>
  <div class="course-selector-overlay" v-if="show">
    <div class="course-selector-modal">
      <h2 class="modal-title">个性化可汗学院</h2>
      
      <div class="course-selector-content">
        <div class="mountain-background"></div>
        
        <h3 class="content-title">我们可以帮助你学习什么科目？</h3>
        <p class="content-subtitle">选择 4-5 项，现在会收集适合的课程</p>

        <!-- 数学课程 -->
        <div class="course-section">
          <h4 class="section-title">数学</h4>
          <div class="course-grid">
            <label class="course-checkbox" v-for="course in mathCourses" :key="course.id">
              <input type="checkbox" 
                     v-model="selectedCourses" 
                     :value="course.id"
                     @change="handleSelection">
              <span class="checkbox-label">{{ course.name }}</span>
            </label>
          </div>
        </div>

        <!-- 科学课程 -->
        <div class="course-section">
          <h4 class="section-title">科学</h4>
          <div class="course-grid">
            <label class="course-checkbox" v-for="course in scienceCourses" :key="course.id">
              <input type="checkbox" 
                     v-model="selectedCourses" 
                     :value="course.id"
                     @change="handleSelection">
              <span class="checkbox-label">{{ course.name }}</span>
            </label>
          </div>
        </div>

        <!-- 计算机课程 -->
        <div class="course-section">
          <h4 class="section-title">计算机</h4>
          <div class="course-grid">
            <label class="course-checkbox" v-for="course in computerCourses" :key="course.id">
              <input type="checkbox" 
                     v-model="selectedCourses" 
                     :value="course.id"
                     @change="handleSelection">
              <span class="checkbox-label">{{ course.name }}</span>
            </label>
          </div>
        </div>

        <div class="selection-footer">
          <button class="continue-btn" 
                  :disabled="selectedCourses.length < 4"
                  @click="handleContinue">
            选择1个科目再继续
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseSelector',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedCourses: [],
      mathCourses: [
        { id: 'math-1', name: '幼儿园' },
        { id: 'math-2', name: '一年级' },
        { id: 'math-3', name: '二年级' },
        { id: 'math-4', name: '三年级' },
        { id: 'math-5', name: '四年级' },
        { id: 'math-6', name: '五年级' },
        { id: 'math-7', name: '六年级' },
        { id: 'math-8', name: '七年级' },
        { id: 'math-9', name: '八年级' },
        { id: 'math-10', name: '初级代数' },
        { id: 'math-11', name: '代数基础' },
        { id: 'math-12', name: '代数1' },
        { id: 'math-13', name: '代数2' },
        { id: 'math-14', name: '基础几何' },
        { id: 'math-15', name: '高中几何' }
      ],
      scienceCourses: [
        { id: 'science-1', name: '生物' },
        { id: 'science-2', name: '化学' },
        { id: 'science-3', name: '有机化学' },
        { id: 'science-4', name: '物理' },
        { id: 'science-5', name: '宇宙学和天文学' },
        { id: 'science-6', name: '电器工程' }
      ],
      computerCourses: [
        { id: 'computer-1', name: '计算机科学' },
        { id: 'computer-2', name: '计算机编程' }
      ]
    }
  },
  methods: {
    handleSelection() {
      // 更新按钮文本
      const remainingCount = 4 - this.selectedCourses.length;
      if (remainingCount > 0) {
        this.$emit('update:buttonText', `选择${remainingCount}个科目再继续`);
      } else {
        this.$emit('update:buttonText', '继续');
      }
    },
    handleContinue() {
      if (this.selectedCourses.length >= 4) {
        this.$emit('continue', this.selectedCourses);
      }
    }
  }
}
</script>

<style scoped>
.course-selector-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
}

.course-selector-modal {
  width: 100%;
  max-width: 800px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.modal-title {
  text-align: center;
  padding: 24px;
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #333;
}

.course-selector-content {
  position: relative;
  padding: 32px;
}

.mountain-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(180deg, #e3f2fd 0%, transparent 100%);
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23a5d8ff" fill-opacity="0.2" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>');
  background-size: cover;
  opacity: 0.5;
  z-index: -1;
}

.content-title {
  font-size: 20px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.content-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 32px;
}

.course-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-bottom: 16px;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
}

.course-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.course-checkbox:hover {
  background: #f5f5f5;
}

.course-checkbox input[type="checkbox"] {
  width: 18px;
  height: 18px;
  border: 2px solid #1865f2;
  border-radius: 3px;
  cursor: pointer;
}

.checkbox-label {
  font-size: 14px;
  color: #333;
}

.selection-footer {
  margin-top: 32px;
  text-align: center;
}

.continue-btn {
  padding: 12px 32px;
  background: #1865f2;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.continue-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.continue-btn:not(:disabled):hover {
  background: #1557d0;
}
</style> 