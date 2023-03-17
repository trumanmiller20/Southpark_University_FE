<template>
  <div v-for="student in students" :key="student.id" class="student-card">
    <h3>{{ student.name }}</h3>
    <h3>{{ student.email }}</h3>
    <form @submit.prevent="onSubmit(student.id)">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="newName">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="newEmail">
      <button type="submit">Save</button>
    </form>
    <button @click="deleteOneStudent(student.id)">Delete</button>
  </div>
</template>

<script>
  export default {
    name: 'StudentCard',
    props: {
      students: {
        type: Array,
        required: true
      },
      deleteStudent: {
        type: Function,
        required: true
      },
      editStudent: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        newName: '',
        newEmail: ''
      }
    },
    methods: {
      deleteOneStudent(studentId) {
        this.deleteStudent(studentId)
      },
      onSubmit(studentId) {
        this.editStudent(studentId, this.newName, this.newEmail)
        this.newName = ''
        this.newEmail = ''
      }
    }
  }
</script>



<style>
.student-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  background-color: rgb(46, 204, 133);
  border-radius: 10px;
  width: 150px;
  height: 100%;
}
</style>