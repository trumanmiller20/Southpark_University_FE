<template>
  <div class="form-fields">
    <form>
      <label>
      Course Name
      </label>
      <input class="course-name" name="course-name" placeholder="i.e. Accounting II" required />
      <button class="button" @click="navigateToDash">Add Course</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'CreateCourse',
    props: {
    },
    methods: {
      navigateToDash() {
        this.$router.push({path: `/homepage` })
      }
    }
  }
</script>

<style></style>