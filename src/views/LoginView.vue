<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "../firebase"; // Asegúrate de importar Firestore
import { useUserStore } from "../stores/user";

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
    router.push("/home");
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
    const userDoc = doc(db, "users", user.uid);
    const docSnap = await getDoc(userDoc);

    if (!docSnap.exists()) {
      // Si no existe, guardarlo en Firestore
      await setDoc(userDoc, {
        username: user.displayName,
        email: user.email,
      });
    }

    userStore.setUserName(user.displayName); // Guardar el nombre del usuario en el estado

    router.push("/home"); // Redirigir al Home
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error.message);
    alert("No se pudo iniciar sesión con Google.");
  }
};

</script>
<template>
    <GuestLayout>
        <div class="login">
            <!--<img src="logo.png" alt="Logo" class="logo" />-->
            <h2>Iniciar Sesión</h2>
            <p>Hola, inicia sesión para continuar</p>
            <form @submit.prevent="login">
                <input type="email" placeholder="Email" v-model="email" required />
                <input type="password" placeholder="Contraseña" v-model="password" required />
                <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
                <button type="submit">Iniciar</button>
                <br>
                <button type="button" class="google-button" @click="loginWithGoogle">
                <img src="@/assets/google.svg" alt="Google Logo" />
                Google
                </button>
            </form>
            <br>
            <p>
                No tienes cuenta? <a href="/register">Registrarse</a>
            </p>
        </div>
    </GuestLayout>
</template>


<style scoped>
.login {
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

.forgot-password {
    font-size: 0.8rem;
    color: #4630eb;
    text-decoration: none;
    margin-bottom: 20px;
}

.forgot-password:hover {
    text-decoration: underline;
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