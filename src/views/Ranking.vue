<template>
    <div class="ranking-container">
      <!-- Título -->
      <h1 class="ranking-title">Ranking</h1>
  
      <!-- Podio principal -->
      <div class="podium">
        <!-- Segundo lugar -->
        <div class="podium-item">
          <div class="avatar-container second-place">
            <img src="https://via.placeholder.com/50" alt="Angie" class="avatar" />
          </div>
          <p class="name">Angie</p>
          <p class="score">1,469</p>
          <div class="place-badge second">2</div>
        </div>
  
        <!-- Primer lugar -->
        <div class="podium-item">
          <div class="avatar-container first-place">
            <img src="https://via.placeholder.com/50" alt="Arvic" class="avatar" />
          </div>
          <p class="name">Arvic</p>
          <p class="score">19,008</p>
          <div class="place-badge first">1</div>
        </div>
  
        <!-- Tercer lugar -->
        <div class="podium-item">
          <div class="avatar-container third-place">
            <img src="https://via.placeholder.com/50" alt="Carlos" class="avatar" />
          </div>
          <p class="name">Carlos</p>
          <p class="score">1,053</p>
          <div class="place-badge third">3</div>
        </div>
      </div>
  
      <!-- Lista de clasificaciones -->
      <div class="ranking-list">
        <div class="ranking-item">
          <div class="rank-number">4</div>
          <div class="details">
            <p class="name">Maria</p>
            <p class="score">590 Puntos</p>
          </div>
          <img src="https://via.placeholder.com/20" alt="Flag" class="flag" />
        </div>
  
        <div class="ranking-item">
          <div class="rank-number">5</div>
          <div class="details">
            <p class="name">Juan</p>
            <p class="score">448 Puntos</p>
          </div>
          <img src="https://via.placeholder.com/20" alt="Flag" class="flag" />
        </div>
      </div>
  
      <!-- Navegación inferior -->
      <div class="navigation">
        <button class="nav-button">📖</button>
        <button class="nav-button">📊</button>
        <button class="nav-button active">🎮</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Ranking',
  };
  </script>
  
  <style>
  /* Estilos generales */
  .ranking-container {
    font-family: Arial, sans-serif;
    background-color: #fff;
    min-height: 100vh;
    padding: 20px;
  }
  
  /* Título */
  .ranking-title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #6b46c1;
    margin-bottom: 20px;
  }
  
  /* Podio */
  .podium {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .podium-item {
    text-align: center;
  }
  
  .avatar-container {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;
  }
  
  .avatar {
    width: 70%;
    height: 70%;
    border-radius: 50%;
    border: 3px solid #fff;
  }
  
  .first-place {
    background-color: #facc15;
  }
  
  .second-place {
    background-color: #c4b5fd;
  }
  
  .third-place {
    background-color: #93c5fd;
  }
  
  .name {
    font-weight: bold;
    margin-top: 10px;
  }
  
  .score {
    color: #718096;
    font-size: 14px;
  }
  
  .place-badge {
    width: 40px;
    height: 24px;
    margin: 10px auto 0;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
  }
  
  .first {
    background-color: #fbbf24;
  }
  
  .second {
    background-color: #a78bfa;
  }
  
  .third {
    background-color: #60a5fa;
  }
  
  /* Lista de clasificaciones */
  .ranking-list {
    margin-bottom: 40px;
  }
  
  .ranking-item {
    display: flex;
    align-items: center;
    background-color: #f7fafc;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .rank-number {
    width: 40px;
    height: 40px;
    background-color: #e2e8f0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  
  .details {
    flex: 1;
    margin-left: 10px;
  }
  
  .flag {
    width: 20px;
    height: 15px;
  }
  
  /* Navegación inferior */
  .navigation {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    display: flex;
    justify-content: space-around;
  }
  
  .nav-button {
    background: none;
    border: none;
    font-size: 24px;
    color: #a0aec0;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  .nav-button:hover {
    color: #6b46c1;
  }
  
  .nav-button.active {
    color: #6b46c1;
  }
  </style>
  