<template>
  <div class="fullscreen-container">
    <img src="icons\logo-login.png" alt="Logo Convicti" />
    <div class="login-form">
      <label for="email">E-mail</label>
      <input type="email" v-model="email" id="email" placeholder=" " />
      <label for="password">Senha</label>
      <input type="password" v-model="password" id="password" placeholder=" " />
      <q-btn @click="login" label="Entrar" class="login-button" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Add your login logic here
    },
  },
};
</script>

<style scoped lang="scss">
.fullscreen-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Minimum height of viewport */
  background-color: $BackgroundPrimary; // Make sure $BackgroundPrimary is defined
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: $BackgroundPrimary;
  border-radius: 5px;
  margin-top: 3rem;
}

label {
  font-weight: bold;
  color: white;
  align-self: flex-start;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.login-button {
  width: 30rem;
  background-color: $Secondary; // Customize this color
  color: white;
  border: none;
  margin-top: 2rem;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: darken($Secondary, 10%); // Darken the color on hover
}
</style>
