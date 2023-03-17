<template>
  <div class="allstudents">
    <div>
    <StudentCard :students="students" />
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
    // props: {
    //   name: String,
    //   email: String
    // },
    components: {
      StudentCard
    },
    mounted() {
      this.GetAllStudents()
    },
    methods: {
      async GetAllStudents() {
      const res = await 
      User.get(`/student/`)
      console.log(res.data)
      this.students = res.data
      }
    }
  }
</script>

<style>
.allstudents {
  display: flex;
  flex-wrap: row wrap;
  margin: 25px;
}
</style>