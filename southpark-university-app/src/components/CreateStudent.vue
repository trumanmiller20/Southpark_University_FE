<template>
  <div class="form-fields">
    <form>
      <label htmlFor="email">
      Email
      </label>
      <input class="email-field" name="email" type="email" placeholder="example@gmail.com" required />
      <label htmlFor="password">
      Password
      </label>
      <input class="password-field" name="password" type="password" required />
      <button class="button">Add Course</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'CreateStudent',
    props: {
    }
  }
</script>

<style></style>