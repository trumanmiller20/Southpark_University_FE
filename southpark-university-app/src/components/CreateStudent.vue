<template>
  <div class="form-fields">
    <form>
      <label>
        Name
      </label>
      <input class="name-field" name="name" type="name" placeholder="John Doe" required v-model="name" />
      <label>
        Email
      </label>
      <input class="email-field" name="email" type="email" placeholder="example@gmail.com" required v-model="email" />
      <button class="button" @click.prevent="createStudent">Add Student</button>
    </form>
  </div>
</template>

<script>
import User from '../services/api'
export default {
  name: 'CreateStudent',
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    async createStudent() {
  try {
    const response = await User.post('/student/register/', {
      email: this.email,
      name: this.name 
    })
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
