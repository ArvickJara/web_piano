<template>
    <div class="game-levels-container">
      <h1 class="title">Niveles del Juego</h1>
      <div class="path">
        <div v-for="(level, index) in levels" :key="index" class="level" :class="{'unlocked': level.unlocked}">
          <div class="level-icon">{{ index + 1 }}</div>
          <div v-if="index !== levels.length - 1" class="line"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NivelesView",
    data() {
      return {
        levels: [
          { unlocked: true },  // Nivel 1 desbloqueado
          { unlocked: false }, // Nivel 2 aún no desbloqueado
          { unlocked: false }, // Nivel 3 aún no desbloqueado
          { unlocked: false }, // Nivel 4 aún no desbloqueado
          { unlocked: false }  // Nivel 5 aún no desbloqueado
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Contenedor de los niveles */
  .game-levels-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f4f8;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 350px;
    margin: auto;
  }
  
  /* Título */
  .title {
    color: #333;
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  
  /* Camino */
  .path {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
  }
  
  /* Nivel */
  .level {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
    width: 40px;
  }
  
  /* Línea entre los niveles */
  .line {
    width: 2px;
    height: 30px;
    background-color: #8c52e5;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  /* Icono del nivel */
  .level-icon {
    width: 40px;
    height: 40px;
    background-color: #8c52e5;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Estado desbloqueado */
  .unlocked .level-icon {
    background-color: #28a745; /* Verde para niveles desbloqueados */
    box-shadow: 0 4px 8px rgba(0, 128, 0, 0.3);
  }
  
  /* Animación de desbloqueo */
  .level.unlocked {
    animation: unlock 0.5s ease-out;
  }
  
  @keyframes unlock {
    from {
      transform: scale(0.5);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  </style>
  