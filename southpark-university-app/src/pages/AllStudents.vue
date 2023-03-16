<template>
  <div class="allstudents">
    <StudentCard />
  </div>
</template>

<script>
import StudentCard from '../components/StudentCard'
  export default {
    name: 'AllStudents',
    props: {
    },
    components: {
      StudentCard
    }
  }
</script>

<style></style>