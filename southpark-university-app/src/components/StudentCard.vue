<template>
  <div v-for="student in students" :key="student.id" class="student-card">
    <h3>{{ student.name }}</h3>
    <h5>{{ student.email }}</h5>
  </div>
</template>

<script>
  export default {
    name: 'StudentCard',
    props: {
      students: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style>
.student-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  background-color: rgb(46, 204, 133);
  border-radius: 10px;
  border-style: outset;
  border-color: #27AE60;
  width: 180px;
  height: 175px;
  margin: 20px;
  overflow: auto;
}
</style>