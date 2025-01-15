import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    classes: [],
    students: [],
    attendance: []
  },
  mutations: {
    SET_CLASSES(state, classes) {
      state.classes = classes
    },
    SET_STUDENTS(state, students) {
      state.students = students
    },
    SET_ATTENDANCE(state, attendance) {
      state.attendance = attendance
    }
  },
  actions: {
    // 这里可以添加异步操作
  },
  modules: {
  }
}) 