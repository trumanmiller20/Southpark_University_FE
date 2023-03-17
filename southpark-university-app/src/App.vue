<template>
  <div id="app">
    <header>
      <NavBar :user="user"/>
    </header>
    <router-view :user="user"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({
  }),
  methods: {
    handleLogout() {
      this.$router.push('/')
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
