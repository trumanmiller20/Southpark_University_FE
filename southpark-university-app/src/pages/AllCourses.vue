<template>
  <div class="allcourses">
    <div>
      <CourseCard :courses="courses"/>
    </div>
  </div>
</template>

<script>
import User from '../services/api'
import CourseCard from '../components/CourseCard'
  export default {
    name: 'AllCourses',
    data: () => ({
      courses: [],
    }),
    //   props: {
    //   name: String,
      
    // },
    components: {
      CourseCard
    },
    mounted(){
      this.GetAllCourses()
    },
    methods: {
      async GetAllCourses() {
      const res = await
      User.get(`/course/`)
      console.log(res.data)
      this.courses = res.data
    }
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

