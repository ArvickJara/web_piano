<script>
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        await updateProfile(userCredential.user, {
          displayName: this.username,
        });

        const userId = userCredential.user.uid;
        await setDoc(doc(db, "users", userId), {
          username: this.username,
          email: this.email,
        });

        this.$router.push("/home");
        alert("Registro exitoso");
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
      <h2>Registro</h2>
      <p>Hola, regístrate para continuar</p>
      <form @submit.prevent="register">
        <input type="text" placeholder="Usuario" v-model="username" required />
        <input type="email" placeholder="Email" v-model="email" required />
        <input type="password" placeholder="Contraseña" v-model="password" required />
        <button type="submit">Registrarse</button>
        <button type="button" class="google-button" @click="loginWithGoogle">
          <img src="@/assets/google.svg" alt="Google Logo" />
          Google
        </button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <a href="/">Iniciar Sesión</a>
      </p>
    </div>
  </GuestLayout>
</template>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 400px;
  margin: 0 auto;
  background-color: #f9f9f9; /* Fondo blanco para un look limpio */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd; /* Borde sutil */
}


h2 {
  color: #4630eb; /* Mismo color de encabezado */
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

p {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1.5rem;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease-in-out;
}

input:focus {
  border-color: #4630eb; /* Cambio de color al enfocar */
  outline: none; /* Elimina el borde de enfoque predeterminado */
}

button {
  padding: 10px;
  background-color: #4630eb;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3520c9;
}

.google-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  color: #555;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.google-button img {
  width: 20px;
  height: 20px;
}

.google-button:hover {
  border-color: #aaa;
  background-color: #f5f5f5;
}

.forgot-password {
  font-size: 0.8rem;
  color: #4630eb;
  text-decoration: none;
  margin-top: -1rem;
  display: block;
  text-align: right;
}

.forgot-password:hover {
  text-decoration: underline;
}

/* Responsividad */
@media (max-width: 768px) {
  .register {
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  form {
    gap: 0.75rem;
  }

  input, button, .google-button {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .register {
    padding: 1rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  input, button, .google-button {
    padding: 8px;
    font-size: 0.85rem;
  }
}

</style>
