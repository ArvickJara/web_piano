<template>
  <div class="navbar-layout">
    <!-- NavBar fijo -->
    <nav class="nav-bar">
      <ul class="nav-items">
        <li class="nav-item">
          <RouterLink to="/historia" class="nav-link">
            <span class="icon">📚</span>
            <span class="label">Historia</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/ranking" class="nav-link">
            <span class="icon">📊</span>
            <span class="label">Ranking</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/juego" class="nav-link">
            <span class="icon">🎮</span>
            <span class="label">Juego</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/niveles" class="nav-link">
            <span class="icon">🔄</span>
            <span class="label">Niveles</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/perfil" class="nav-link">
            <span class="icon">👤</span>
            <span class="label">Perfil</span>
          </RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Contenido dinámico de las rutas -->
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Estilos del NavBar */
.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-top: 1px solid #ddd;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  position: fixed;
}

.nav-items {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 0 10px;
}

.nav-link {
  text-decoration: none;
  color: #444;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-link .icon {
  font-size: 1.5rem;
}

.nav-link .label {
  font-size: 0.9rem;
  margin-top: 5px;
}

/* Estilos para pantallas grandes */
@media (min-width: 768px) {
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    padding: 0 20px;
    border-top: none;
    border-bottom: 1px solid #ddd;
  }

  .nav-items {
    justify-content: space-around;
    flex-grow: 1;
  }

  .nav-item {
    margin: 0 15px;
  }
}

/* Estilos para pantallas pequeñas */
@media (max-width: 767px) {
  .nav-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
  }

  .content {
    margin-bottom: 60px; /* Ajusta el contenido para evitar que se sobreponga */
  }
}
</style>
