<template>
  <div class="profile-view">
    <h1 class="title">Perfil</h1>
    
    <!-- Foto de perfil -->
    <div class="profile-pic-container">
      <img src="https://via.placeholder.com/150" alt="Foto de perfil" class="profile-pic" />
    </div>

    <!-- Campo para el nombre de usuario -->
    <div class="username-container">
      <input type="text" placeholder="Nombre del usuario" class="username-input" />
      <button class="edit-btn">
        ✏️
      </button>
    </div>

    <!-- Botón guardar -->
    <button class="save-btn">Guardar</button>

    <!-- Enlace para cerrar sesión -->
    <a href="#" class="logout-link">Cerrar sesión</a>
  </div>
</template>

<script>
export default {
  name: "ProfileUserView",
};
</script>

<style scoped>
/* Contenedor principal */
.profile-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px); /* Altura total menos el NavBar */
  padding: 20px;
  box-sizing: border-box;
}

/* Título */
.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4630eb;
  margin-bottom: 20px;
}

/* Imagen de perfil */
.profile-pic-container {
  margin: 20px auto;
}
.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #ddd;
}

/* Campo de nombre de usuario */
.username-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
.username-input {
  padding: 10px;
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  margin-right: 10px;
}
.edit-btn {
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  color: #4630eb;
}

/* Botón guardar */
.save-btn {
  padding: 10px 20px;
  background-color: #4630eb;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.save-btn:hover {
  background-color: #3520c9;
}

/* Enlace para cerrar sesión */
.logout-link {
  display: block;
  margin-top: 20px;
  text-decoration: none;
  font-size: 1rem;
  color: #4630eb;
  cursor: pointer;
}
.logout-link:hover {
  text-decoration: underline;
}

/* Ajustes específicos para pantallas grandes */
@media (min-width: 1024px) {
  .profile-view {
    min-height: calc(100vh - 60px); /* Centrado verticalmente con NavBar */
    padding-top: 0;
  }
}

/* Ajustes para pantallas pequeñas (móviles) */
@media (max-width: 767px) {
  .profile-view {
    min-height: calc(100vh - 60px); /* Espacio suficiente para NavBar */
    justify-content: flex-start; /* Contenido más cerca del centro */
    padding-top: 40px; /* Espaciado desde la parte superior */
  }
}
</style>
