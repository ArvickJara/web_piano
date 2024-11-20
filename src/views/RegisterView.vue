<script>
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase"; // Asegúrate de que este archivo esté configurado correctamente
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase"; // Firestore para guardar datos adicionales

export default {
  data() {
    return {
      username: "", // Campo para el nombre de usuario
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        // Crear usuario con Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        // Agregar el nombre de usuario al perfil
        await updateProfile(userCredential.user, {
          displayName: this.username,
        });

        // Guardar datos adicionales en Firestore
        const userId = userCredential.user.uid;
        await setDoc(doc(db, "users", userId), {
          username: this.username,
          email: this.email,
        });

        this.$router.push("/home");

        alert("Registro exitoso");

         // Redirigir a la página de inicio de sesión
      } catch (error) {
        console.error("Error al registrar: ", error.message);
        alert(`Error: ${error.message}`);
      }
    },
  },
};
</script>

<template>
    <GuestLayout>
        <div class="register">
            <!-- <img src="logo" alt="Logo" class="logo" /> -->
            <h2>Registro</h2>
            <p>Hola, registrate para continuar</p>
            <form @submit.prevent="register">
                <input type="text" placeholder="Usuario" v-model="username" required />
                
                <input type="email" placeholder="Email" v-model="email" required />
                
                <input type="password" placeholder="Contraseña" v-model="password" required />
                <br>
                <button type="submit">Registrarse</button>
                <br>
                <button type="button" class="google-button" @click="loginWithGoogle">
                <img src="@/assets/google.svg" alt="Google Logo" />
                Google
                </button>
                
            </form>
            <br>
            
            <p>
                ¿Ya tienes una cuenta? <a href="/">Iniciar Sesión</a>
            </p>
        </div>
    </GuestLayout>
</template>



<style scoped>
.register {
    text-align: center;
}

.logo {
    width: 150px;
    margin: 0 auto 20px;
    display: block;
}

h2 {
    color: #4630eb;
    font-size: 1.5rem;
    margin-bottom: 5px;
}

p {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 15px;
}

form {
    display: flex;
    flex-direction: column;
}

input {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

button {
    padding: 10px;
    background-color: #4630eb;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
}

button:hover {
    background-color: #3520c9;
}

.google-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Espacio entre el logo y el texto */
  padding: 10px 20px;
  border: 1px solid #ccc; /* Borde gris claro */
  border-radius: 5px; /* Bordes redondeados */
  background-color: white; /* Fondo blanco */
  font-size: 1rem;
  color: #555; /* Texto gris oscuro */
  cursor: pointer;
  transition: all 0.3s ease; /* Transiciones suaves */
}

.google-button img {
  width: 20px; /* Tamaño del logo */
  height: 20px;
}

.google-button:hover {
  border-color: #aaa; /* Cambiar el borde al pasar el mouse */
  background-color: #f5f5f5; /* Fondo ligeramente más oscuro */
}
</style>