<template>
  <div class="form-fields">
    <form>
      <label>
        Course Name
      </label>
      <input class="course-name" v-model="name" name="course-name" placeholder="i.e. Accounting II" required />
      <button class="button" @click.prevent="createCourse">Add Course</button>
    </form>
  </div>
</template>

<script>
import User from '../services/api'
export default {
  name: 'CreateCourse',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    async createCourse() {
      try {
        const response = await User.post('/course/create/', { name: this.name })
        console.log(response.data)
        this.$router.push({ path: '/homepage' })
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>


<style></style>