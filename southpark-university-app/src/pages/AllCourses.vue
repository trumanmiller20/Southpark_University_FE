<template>
  <div class="allcourses">
    <CourseCard />
  </div>
</template>

<script>
import CourseCard from '../components/CourseCard'
  export default {
    name: 'AllCourses',
    props: {
    },
    components: {
      CourseCard
    }
  }
</script>

<style>
.allcourses {
  display: flex;
  flex-wrap: row wrap;
  margin: 25px;
}
</style>