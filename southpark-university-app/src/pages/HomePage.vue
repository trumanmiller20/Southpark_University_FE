<template>
  <div class="homepage">
    <div class="statement">
      <h1>Culture</h1>
      <h1>Commitment</h1>
      <h1>Excellence</h1>
    </div>
    <div class="images">
      <img class="dashimg" alt="Image" src="https://acumen.education/wp-content/uploads/2022/07/Copy-of-website-Blog-pictures-1.png" />
    </div>
    <div class="buttons">
      <button class="button" id="students" @click="viewStudents">View Students</button>
       <button class="button" id="courses" @click="viewCourses">View Courses</button>
       <button class="button" id="addstudent" @click="addStudent">Add Student</button>
       <button class="button" id="addcourse" @click="addCourse">Add Course</button>
     </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    props: {
    },
    methods: {
      viewStudents() {
        this.$router.push(`/allstudents`)
      },
      viewCourses() {
        this.$router.push(`/allcourses`)
      },
      addStudent() {
        this.$router.push(`/addstudent`)
      },
      addCourse() {
        this.$router.push(`/addcourse`)
      },
    }
  }
</script>

<style>

.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.statement {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 20px;
}

.statement h1 {
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 3.5em;
}


.images {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.dashimg {
  max-width: 70%;
  margin: 20px;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
}

.button {
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  background-color: #2ECC71;
  border-style: none;
  border-radius: 10px;
  width: 150px;
  height: 35px;
}

.button:hover{
  background-color: #27AE60;
  cursor: pointer;
}
</style>