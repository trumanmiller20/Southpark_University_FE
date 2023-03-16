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

<style>
.allstudents {
  display: flex;
  flex-wrap: row wrap;
  margin: 25px;
}
</style>