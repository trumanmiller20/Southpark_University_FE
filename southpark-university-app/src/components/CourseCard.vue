<template>
  <div v-for="course in courses" :key="course.id" class="course-card">
    <h3>{{ course.name }}</h3>
    
    <h4></h4>
  </div>
</template>
<script>
  export default {
    name: 'CourseCard',
    props: {
      courses: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style>
.course-card {
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