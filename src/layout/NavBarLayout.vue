<template>
  <div class="navbar-layout">
    <nav class="nav-bar">
      <ul class="nav-items">
        <li class="nav-item">
          <router-link to="/historia" class="nav-link">
            <span class="iconify" data-icon="fa6-solid:book" style="font-size: 2rem;"></span>
            <span class="label">Historia</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ranking" class="nav-link">
            <span class="iconify" data-icon="fa6-solid:chart-bar" style="font-size: 2rem;"></span>
            <span class="label">Ranking</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/juego" class="nav-link">
            <span class="iconify" data-icon="fa6-solid:gamepad" style="font-size: 2rem;"></span>
            <span class="label">Juego</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/niveles" class="nav-link">
            <span class="iconify" data-icon="icon-park-solid:game-ps" style="font-size: 2rem;"></span>
            <span class="label">Niveles</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/perfil" class="nav-link">
            <span class="iconify" data-icon="fa6-solid:user" style="font-size: 2rem;"></span>
            <span class="label">Perfil</span>
          </router-link>
        </li>
        <!-- Nuevo elemento de cierre de sesión -->
        <li class="nav-item logout-item">
          <button @click="logout" class="nav-link logout-btn">
            <span class="iconify" data-icon="majesticons:login" style="font-size: 2rem;"></span>
            <span class="label">Salir</span>
          </button>
        </li>
      </ul>
    </nav>
    <!-- Aquí se agrega el <router-view> para renderizar las vistas hijas -->
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Estilos generales del NavBar */
.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #6a0dad, #9b30ff); /* Gradiente morado */
  box-shadow: 0px -4px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  position: fixed;
  bottom: 0; /* Cambiado a 'bottom' para ubicarlo en la parte inferior */
  left: 0;
  right: 0;
  height: 70px;
}

.nav-items {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
}

.nav-item {
  margin: 0 10px;
}

/* Estilo de los enlaces del menú */
.nav-link {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 700;
  font-style: italic;
  text-decoration: none;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.nav-link .icon {
  font-size: 2rem;
  margin-bottom: 5px;
}

.nav-link .label {
  font-size: 0.9rem;
  margin-top: 5px;
}

/* Efectos al pasar el mouse */
.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
}

/* Estilos específicos para el botón de salida */
.logout-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Estilos para pantallas grandes */
@media (min-width: 768px) {
  .nav-bar {
    height: 70px;
    padding: 0 20px;
  }

  .nav-items {
    justify-content: space-around;
  }

  .nav-item {
    margin: 0 15px;
  }
}

/* Estilos para pantallas pequeñas */
@media (max-width: 767px) {
  .nav-bar {
    height: 60px;
  }

  .nav-items {
    flex-direction: row;
    overflow-x: auto;
    justify-content: space-around;
  }

  .nav-item {
    margin: 0 8px;
  }

  .nav-link {
    padding: 8px;
    font-size: 0.9rem;
  }

  .nav-link .icon {
    font-size: 1.8rem;
  }

  .nav-link .label {
    font-size: 0.8rem;
  }
}
</style>
