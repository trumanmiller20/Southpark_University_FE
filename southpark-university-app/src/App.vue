<template>
  <div id="app">
    <NavBar :loggedIn="loggedIn" @logout="handleLogout" />
    <router-view @userLoggedIn="updateLoggedInStatus" />
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      loggedIn: false
    }
  },
  methods: {
    updateLoggedInStatus(status) {
      this.loggedIn = status
      console.log('Logged in status updated:', status)
    },
    handleLogout() {
      this.loggedIn = false
      this.$router.push('/login')
    }
  }
}
</script>



<style>
html body{
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #234E70;;
}

header {
  background-color: #212121;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 5em;
}
</style>
