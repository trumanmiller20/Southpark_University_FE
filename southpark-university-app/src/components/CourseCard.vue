<template>
  <div className="course-card">
    <h3>Course:</h3>
  </div>
</template>

<script>
  export default {
    name: 'CourseCard',
    props: {
    }
  }
</script>

<style>
.course-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  background-color: rgb(46, 204, 133);
  border-radius: 10px;
  width: 150px;
  height: 150px;
}
</style>