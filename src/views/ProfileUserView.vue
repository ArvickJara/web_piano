<template>
  <div class="profile-view">
    <h1 class="title">Perfil de Usuario</h1>
    
    <!-- Foto de perfil -->
    <div class="profile-pic-container">
      <img src="https://via.placeholder.com/150" alt="Foto de perfil" class="profile-pic" />
    </div>

    <!-- Campo para el nombre de usuario -->
    <div class="username-container">
      <input 
        type="text" 
        v-model="userName" 
        placeholder="Nombre del usuario" 
        class="username-input" 
      />
      <button class="edit-btn">
        ✏️
      </button>
    </div>

    <!-- Botón guardar -->
    <button class="save-btn" @click="saveUserName">Guardar</button>

    <!-- Enlace para cerrar sesión -->
    <a href="#" class="logout-link" @click.prevent="logout">Cerrar sesión</a>
  </div>
</template>
<script>
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // Ajusta la ruta a tu configuración de Firebase
import { useUserStore } from "../stores/user"; // Ajusta la ruta a tu store de usuario

export default {
  name: "ProfileUserView",
  computed: {
    userName() {
      const userStore = useUserStore();
      return userStore.userName || "Usuario"; // Valor por defecto
    },
  },
  methods: {
    async logout() {
      try {
        await signOut(auth);
        alert("Sesión cerrada con éxito");
        this.$router.push("/"); // Redirige a la página de inicio
      } catch (error) {
        console.error("Error al cerrar sesión:", error.message);
        alert("Ocurrió un error al cerrar sesión. Intenta nuevamente.");
      }
    },
    saveUserName() {
      const userStore = useUserStore();
      userStore.userName = this.userName; // Guarda el nombre de usuario editado en el store
      alert("Nombre de usuario guardado con éxito");
    },
  },
};
</script>

<style scoped>
/* Estilo general de la vista de perfil */
.profile-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff; /* Fondo blanco */
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  max-width: 400px; /* Ancho máximo para mejorar la presentación */
  margin: auto;
  overflow-x: auto;
}

/* Título */
.title {
  color: #4a4a4a; /* Gris oscuro */
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 600;
}

/* Estilo de la foto de perfil */
.profile-pic-container {
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
}

.profile-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%; /* Forma circular */
  border: 4px solid #6c63ff; /* Color de borde */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Contenedor de nombre de usuario */
.username-container {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
}

.username-input {
  font-size: 1rem;
  padding: 8px 12px;
  border: 2px solid #6c63ff;
  border-radius: 8px;
  outline: none;
  background-color: #f8f9fa; /* Fondo claro */
  color: #333;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 260px;
  margin-right: 10px;
}

.edit-btn {
  background-color: #6c63ff;
  color: #fff;
  padding: 6px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.edit-btn:hover {
  background-color: #5a54e1; /* Color más oscuro */
  transform: scale(1.1);
}

/* Botón guardar */
.save-btn {
  background-color: #6c63ff;
  color: #fff;
  padding: 8px 15px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  margin-bottom: 15px;
  width: 100%;
  max-width: 200px;
}

.save-btn:hover {
  background-color: #5a54e1; /* Color más oscuro */
  transform: scale(1.05);
}

/* Estilo del enlace de cerrar sesión */
.logout-link {
  display: block;
  margin-top: 10px;
  text-decoration: none;
  font-size: 1rem;
  color: #6c63ff; /* Color del enlace */
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s;
}

.logout-link:hover {
  color: #5a54e1;
  text-decoration: underline;
}

/* Media Queries para hacer la vista responsiva */
@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
  }

  .profile-pic {
    width: 100px;
    height: 100px;
  }

  .username-input,
  .save-btn {
    font-size: 0.9rem;
  }

  .profile-view {
    padding: 15px;
    border-radius: 8px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.2rem;
  }

  .profile-pic {
    width: 80px;
    height: 80px;
  }

  .username-input {
    padding: 6px;
  }

  .edit-btn,
  .save-btn {
    padding: 4px 8px;
    font-size: 0.8rem;
  }

  .logout-link {
    font-size: 0.9rem;
  }
}
</style>
