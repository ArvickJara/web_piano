<template>
    <div class="game-progress-container">
      <h1 class="title">Progreso del Juego</h1>
  
      <!-- Contenedor de los corazones -->
      <div class="hearts-container">
        <div v-for="(heart, index) in hearts" :key="index" class="heart" :class="{'filled': heart.filled}">
          ❤️
        </div>
      </div>
  
      <!-- Barra de progreso -->
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
      <p class="progress-text">{{ progress }}% completado</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "JugarView",
    data() {
      return {
        // Estado de los corazones de vida (true significa lleno)
        hearts: [
          { filled: true },
          { filled: true }
        ],
        // Progreso actual del juego en porcentaje
        progress: 45 // Puedes cambiar esto para probar diferentes valores
      };
    }
  };
  </script>
  
  <style scoped>
  /* Contenedor general */
  .game-progress-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f4f8;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: auto;
  }
  
  /* Título */
  .title {
    color: #333;
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  
  /* Contenedor de los corazones */
  .hearts-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  /* Corazón */
  .heart {
    font-size: 2rem;
    margin: 0 10px;
    color: #ccc; /* Color por defecto */
    transition: color 0.3s;
  }
  
  /* Corazón lleno */
  .heart.filled {
    color: #e74c3c; /* Rojo para corazones llenos */
  }
  
  /* Barra de progreso */
  .progress-bar-container {
    width: 100%;
    background-color: #ddd;
    border-radius: 10px;
    overflow: hidden;
    height: 20px;
    margin-bottom: 10px;
  }
  
  .progress-bar {
    height: 100%;
    background-color: #8c52e5;
    transition: width 0.5s;
  }
  
  /* Texto de progreso */
  .progress-text {
    font-size: 1rem;
    color: #333;
  }
  </style>
  