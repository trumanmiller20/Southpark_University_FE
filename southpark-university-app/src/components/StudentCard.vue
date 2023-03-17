<template>
  <div class="student-card">
    <h3>Name</h3>
    <h3>Email</h3>
    <h4>GPA</h4>
  </div>
</template>

<script>
  export default {
    name: 'StudentCard',
    props: {
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
  width: 150px;
  height: 100%;
}
</style>