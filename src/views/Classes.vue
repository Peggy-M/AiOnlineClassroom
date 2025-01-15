<template>
  <div class="classes">
    <h2>课程管理</h2>
    <div class="actions">
      <button @click="showAddDialog = true" class="btn-primary">添加课程</button>
    </div>
    
    <table class="class-table">
      <thead>
        <tr>
          <th>课程名称</th>
          <th>教师</th>
          <th>上课时间</th>
          <th>学生人数</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.id">
          <td>{{ course.name }}</td>
          <td>{{ course.teacher }}</td>
          <td>{{ course.time }}</td>
          <td>{{ course.studentCount }}</td>
          <td>
            <button @click="editCourse(course)" class="btn-small">编辑</button>
            <button @click="deleteCourse(course.id)" class="btn-small btn-danger">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Classes',
  data() {
    return {
      showAddDialog: false,
      courses: [
        {
          id: 1,
          name: '数学',
          teacher: '张老师',
          time: '周一 08:00-09:40',
          studentCount: 30
        }
      ]
    }
  },
  methods: {
    editCourse(course) {
      // 实现编辑课程的逻辑
    },
    deleteCourse(id) {
      // 实现删除课程的逻辑
    }
  }
}
</script>

<style scoped>
.classes {
  max-width: 1200px;
  margin: 0 auto;
}

.actions {
  margin-bottom: 1rem;
}

.class-table {
  width: 100%;
  border-collapse: collapse;
}

.class-table th,
.class-table td {
  padding: 0.75rem;
  border: 1px solid #dee2e6;
}

.btn-primary {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.btn-small {
  padding: 0.25rem 0.5rem;
  margin: 0 0.25rem;
  border-radius: 4px;
  cursor: pointer;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
  border: none;
}
</style> 