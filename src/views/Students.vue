<template>
  <div class="students">
    <h2>学生管理</h2>
    <div class="actions">
      <button @click="showAddDialog = true" class="btn-primary">添加学生</button>
    </div>
    
    <table class="student-table">
      <thead>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>班级</th>
          <th>联系电话</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.studentId }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.class }}</td>
          <td>{{ student.phone }}</td>
          <td>
            <button @click="editStudent(student)" class="btn-small">编辑</button>
            <button @click="deleteStudent(student.id)" class="btn-small btn-danger">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Students',
  data() {
    return {
      showAddDialog: false,
      students: [
        {
          id: 1,
          studentId: '2024001',
          name: '张三',
          class: '一年级一班',
          phone: '13800138000'
        }
      ]
    }
  },
  methods: {
    editStudent(student) {
      // 实现编辑学生的逻辑
    },
    deleteStudent(id) {
      // 实现删除学生的逻辑
    }
  }
}
</script>

<style scoped>
.students {
  max-width: 1200px;
  margin: 0 auto;
}

.actions {
  margin-bottom: 1rem;
}

.student-table {
  width: 100%;
  border-collapse: collapse;
}

.student-table th,
.student-table td {
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