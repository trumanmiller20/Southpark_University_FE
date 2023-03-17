<template>
  <h1>Students</h1>
  <div class="allstudents">
    <div>
      <StudentCard
  :students="students"
  :delete-student="deleteStudent"
  :edit-student="editStudent"
/>

    </div>
  </div>
</template>

<script>
import User from '../services/api';
import StudentCard from '../components/StudentCard'
export default {
  name: 'AllStudents',
  data: () => ({
    students: [],
  }),
  components: {
    StudentCard
  },
  mounted() {
    this.GetAllStudents()
  },
  methods: {
    async GetAllStudents() {
      const res = await User.get(`/student/`)
      console.log(res.data)
      this.students = res.data
    },
    async deleteStudent(id) {
      await User.delete(`/student/${id}`)
      this.students = this.students.filter(student => student.id !== id)
    },
    async editStudent(id, newName, newEmail) {
      await User.put(`/student/${id}`, {name: newName, email: newEmail})
      const res = await User.get(`/student/`)
      this.students = res.data
    }
  }
}
</script>


<style>
h1 {
  text-align: center;
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
}
.allstudents {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>