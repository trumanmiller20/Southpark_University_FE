<template>
  <div class="account">
    <div v-if="account">
      <section class="image-container">
        <img class="signimg" alt="Image" src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Sign-check-icon.png" />
      </section>
      <h1>Sign in to your account</h1>
      <section class="form">
        <div class="form-fields">
          <form @submit.prevent="handleSignIn">
            <label htmlFor="email">
              Email
            </label>
            <input class="email-field" name="email" type="email" placeholder="example@gmail.com" required v-model="email" />
            <label htmlFor="password">
              Password
            </label>
            <input class="password-field" name="password" type="password" required v-model="password" />
            <button class="button" type="submit">Sign In</button>
          </form>
        </div>
      </section>
      <h2>Don't have an account?</h2>
      <button class="button" @click="showAccountForm">Create Account</button>
    </div>

    <div v-else>
      <section class="image-container">
        <img class="signimg" alt="Image" src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Sign-check-icon.png" />
      </section>
      <h1>Register for account</h1>
      <section class="form">
        <div class="form-fields">
          <form @submit.prevent="handleRegister">
            <label htmlFor="email">
              Email
            </label>
            <input class="email-field" name="email" type="email" placeholder="example@gmail.com" required v-model="email" />
            <label htmlFor="password">
              Password
            </label>
            <input class="password-field" name="password" type="password" required v-model="password" />
            <button class="button" type="submit">Create Account</button>
          </form>
        </div>
      </section>
      <h2>Already have an account?</h2>
      <button class="button" @click="showLoginForm">Sign In</button>
    </div>
  </div>
</template>

<script>
import { SignInUser, RegisterUser } from '../services/Auth'


export default {
  name: 'LoginForm',
  data: () => ({
    account: true,
    email: '',
    password: '',
    body: {
      email: '',
      password: '' 
    }
  }),
  methods: {
    async handleSignIn() {
  await SignInUser({ email: this.email, password: this.password })
  this.$emit('userLoggedIn', true) // emit the `userLoggedIn` event with a `true` payload
  console.log('user logged in')
  this.$router.push('/homepage')
    },
    async handleRegister() {
      await RegisterUser({ email: this.email, password: this.password })
      this.$router.push('/login')
    },
    showLoginForm() {
      this.account = true
    },
    showAccountForm() {
      this.account = false
    }
  }
}
</script>



<style>
.account {
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
}

.signimg {
  width: 250px;
  height: 250px;
}

.register {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  margin: 0 auto; 
  align-items: center; 
}

input {
  width: 250px;
  height: 50px;
  border-style: none;
  border-radius: 10px;
  margin: 15px 0 15px 0;
  text-align: center;
}

label {
  margin-top: 15px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
  font-weight: bold;
  text-align: center; /* Center the label text */
}

.form-fields {
  display: flex;
  flex-direction: column;
  margin-top: 20px; /* Remove these two lines */
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
  margin-top: 15px;
}


/* #27AE60 */

</style>