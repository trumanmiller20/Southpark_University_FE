<template>
  <div class="student-card">
    <h1>Name:</h1>
    <h1>Email:</h1>
    <h2>GPA:</h2>
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
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
}
</style>