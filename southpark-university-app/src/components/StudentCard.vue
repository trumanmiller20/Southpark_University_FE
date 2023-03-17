<template>
  <div v-for="student in students" :key="student.id" class="student-card">
    <h3 class="student-name">{{ student.name }}</h3>
    <h3 class="student-email">{{ student.email }}</h3>
    <form @submit.prevent="onSubmit(student.id)">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="newName">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="newEmail">
      <button type="submit">Edit</button>
    </form>
    <button class="delete-btn" @click="deleteOneStudent(student.id)">Delete</button>
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
  border-style: outset;
  border-color: #27AE60;
  width: 300px;
  height: 280px;
  margin: 20px;
  padding: 20px;
  overflow: auto;
}

.student-name {
  font-size: 28px;
  margin-bottom: 10px;
}

.student-email {
  font-size: 18px;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

label {
  margin-bottom: 5px;
}

input[type="text"] {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  background-color: #f2f2f2;
}

button[type="submit"] {
  background-color: #27AE60;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
}

.delete-btn {
  background-color: #c0392b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
  margin-top: 10px;
}
</style>

