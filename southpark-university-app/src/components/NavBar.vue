<template>
  <nav>
    <div class="title">
      <h1>Southpark University</h1>
    </div>
    <div class="links">
      <router-link to="homepage">Dashboard</router-link>
      <router-link to="allstudents">Students</router-link>
      <router-link to="allcourses">Courses</router-link>
      <router-link to="/" @click="handleLogout">Logout</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
  },
  methods: {
    handleLogout() {
      console.log('clear local storage')
      localStorage.clear()
    }
  }
}
</script>



<style>
nav {
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  margin-right: 20px;
}

a:hover {
  cursor: pointer;
}

.title h1 {
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 2.5em;
  margin-left: 15px;
}
</style>