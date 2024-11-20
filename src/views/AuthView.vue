<template>
    <div>
      <h1>Registro</h1>
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Correo" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { auth } from "../firebase";
  
  export default {
    data() {
      return {
        email: "",
        password: ""
      };
    },
    methods: {
      async register() {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
          console.log("Usuario registrado: ", userCredential.user);
          alert("Registro exitoso");
        } catch (error) {
          console.error("Error al registrar: ", error.message);
        }
      }
    }
  };
  </script>
  