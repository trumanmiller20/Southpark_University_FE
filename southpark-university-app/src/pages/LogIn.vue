<template>
  <div class="login-container">
    
    <LogInForm />
  </div>
</template>

<script>

import LogInForm from '../components/LogInForm';

  export default {
    name: 'LogIn',
    props: {
    },
    components: {
      LogInForm
    }
  }
</script>

<style>
</style>