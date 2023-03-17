<template>
  <div class="form-fields">
    <form>
      <label>
        Email
      </label>
      <input class="email-field" name="email" type="email" placeholder="example@gmail.com" required v-model="email" />
      <label>
        Password
      </label>
      <input class="password-field" name="password" type="password" required v-model="password" />
      <button class="button" @click.prevent="addStudent">Add Student</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateStudent',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async addStudent() {
      const data = {
        email: this.email,
        password: this.password
      }
      try {
        // make API call to add student using `data`
        await this.$http.post('/students/register', data)
        // redirect to homepage after successful addition
        this.$router.push('/homepage')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style></style>
