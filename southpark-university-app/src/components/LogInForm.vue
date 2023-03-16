<template>
  <div class="account" v-if="account">
    <div class="login">
      <section class="image-container">
        <img class="signimg" alt="Image" src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Sign-check-icon.png" />
      </section>
      <h1>Sign in to your account</h1>
      <section class="form">
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
          </form>
        </div>
      </section>
      <h2> Don't have an account?
      </h2>
        <button class="button">Create Account</button>
    </div>
  </div>

  <div class="account" v-else>
    <div class="register">
      <section class="image-container">
        <img class="signimg" alt="Image" src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Sign-check-icon.png" />
      </section>
      <h1>Register for account</h1>
      <section class="form">
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
          </form>
        </div>
      </section>
        <button class="button">Create Account</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginForm',
    data: () => ({
      account: true
    }),
    props: {
    },
    methods: {
      // onClick
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