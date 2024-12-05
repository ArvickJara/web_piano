<template>
  <div class="profile-view">
    <h1 class="title">Perfil de Usuario</h1>

    <!-- Foto de perfil -->
    <div class="profile-pic-container">
      <img src="/public/1000007284.svg" alt="Foto de perfil" class="profile-pic" />
    </div>

    <!-- Campo para el nombre de usuario -->
    <div class="username-container">
      <input 
        type="text" 
        v-model="editableUserName" 
        placeholder="Nombre del usuario" 
        class="username-input" 
      />
      <button class="edit-btn" @click="saveUserName">
        Guardar
      </button>
    </div>

    <!-- Mostrar nombre de usuario actual -->
    <p class="current-username">
      <strong>Nombre de usuario actual:</strong> {{ userName }}
    </p>

    <!-- Botón guardar cambios -->
    <button class="save-btn" @click="saveUserName">Guardar Cambios</button>
  </div>
</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // Ajusta la ruta a tu configuración de Firebase
import { useUserStore } from "../stores/user"; // Ajusta la ruta a tu store de usuario

export default {
  name: "ProfileUserView",
  data() {
    return {
      editableUserName: "", // Campo editable para el nombre del usuario
    };
  },
  computed: {
    userStore() {
      return useUserStore(); // Accede a la tienda
    },
    userName() {
      return this.userStore.userName || "Usuario"; // Obtiene el nombre del usuario
    },
  },
  watch: {
    // Sincroniza el estado editable con el valor actual del usuario
    userName: {
      immediate: true,
      handler(newValue) {
        this.editableUserName = newValue;
      },
    },
  },
  methods: {
    saveUserName() {
      if (this.editableUserName.trim() === "") {
        alert("El nombre de usuario no puede estar vacío.");
        return;
      }
      this.userStore.setUserName(this.editableUserName); // Actualiza la tienda
      alert("Nombre de usuario guardado con éxito.");
    },
  },
};
</script>

<style scoped>
.profile-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f3f4f6;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
}

.title {
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.profile-pic-container {
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
}

.profile-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #6c63ff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

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
  background-color: #ffffff;
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
  background-color: #5a54e1;
  transform: scale(1.1);
}

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
  background-color: #5a54e1;
  transform: scale(1.05);
}

.current-username {
  margin-bottom: 15px;
  color: #4a4a4a;
  font-size: 1rem;
}

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

  .current-username {
    font-size: 0.9rem;
  }
}
</style>
