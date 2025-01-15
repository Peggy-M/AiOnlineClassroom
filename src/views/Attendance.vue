<template>
  <div class="attendance">
    <h2>考勤管理</h2>
    <div class="actions">
      <button @click="takeAttendance" class="btn-primary">开始考勤</button>
    </div>
    
    <div class="attendance-list">
      <h3>今日考勤记录</h3>
      <table class="attendance-table">
        <thead>
          <tr>
            <th>课程</th>
            <th>学生</th>
            <th>状态</th>
            <th>时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="record in attendanceRecords" :key="record.id">
            <td>{{ record.className }}</td>
            <td>{{ record.studentName }}</td>
            <td>{{ record.status }}</td>
            <td>{{ record.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Attendance',
  data() {
    return {
      attendanceRecords: [
        {
          id: 1,
          className: '数学',
          studentName: '张三',
          status: '出席',
          time: '2024-03-20 08:00'
        }
      ]
    }
  },
  methods: {
    takeAttendance() {
      // 实现开始考勤的逻辑
    }
  }
}
</script>

<style scoped>
.attendance {
  max-width: 1200px;
  margin: 0 auto;
}

.actions {
  margin-bottom: 1rem;
}

.attendance-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.attendance-table th,
.attendance-table td {
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
</style> 