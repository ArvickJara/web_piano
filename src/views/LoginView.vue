<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "../firebase"; // Asegúrate de importar Firestore
import { useUserStore } from "../stores/user";
import { signInWithPopup } from "firebase/auth";

const email = ref("");
const password = ref("");
const router = useRouter();
const userStore = useUserStore();

const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const user = userCredential.user;

    // Consulta Firestore para obtener el username
    const userDoc = doc(db, "users", user.uid); // Ruta donde guardas los datos del usuario
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      userStore.setUserName(userData.username); // Actualiza el username desde Firestore
    } else {
      console.error("No se encontró el documento del usuario.");
    }

    // Redirige al Home
    router.push("/perfil");
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    alert("Correo o contraseña incorrectos.");
  }
};

// Inicio de sesión con Google
const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Verificar si el usuario ya existe en Firestore
    const userDocRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      // Si no existe, guardar el usuario en Firestore
      await setDoc(userDocRef, {
        username: user.displayName || "Usuario sin nombre",
        email: user.email,
        photoURL: user.photoURL || "",
        createdAt: new Date(),
      });
    }

    console.log("Inicio de sesión exitoso con Google");
    router.push("/perfil"); // Redirige al perfil
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error.message);
    alert("Hubo un problema al iniciar sesión con Google.");
  }
};
</script>

<template>
  <GuestLayout>
    <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <p>Hola, inicia sesión para continuar</p>
      <form @submit.prevent="login">
        <input type="email" placeholder="Email" v-model="email" required />
        <input type="password" placeholder="Contraseña" v-model="password" required />
        <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
        <button type="submit">Iniciar</button>
        <button type="button" class="google-button" @click="loginWithGoogle">
          <img src="@/assets/google.svg" alt="Google Logo" />
          Google
        </button>
      </form>
      <p>
        No tienes cuenta? <a href="/register">Registrarse</a>
      </p>
    </div>
  </GuestLayout>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 400px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #4630eb;
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

input, button {
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box; /* Incluye padding y border en el ancho total */
}

input {
  border: 1px solid #ccc;
}

button {
  background-color: #4630eb;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
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

@media (max-width: 768px) {
  .login-container {
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  form {
    gap: 0.75rem;
  }

  input {
    font-size: 0.9rem;
  }

  button, .google-button {
    font-size: 0.9rem;
  }
}
</style>
