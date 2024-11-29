<template>
  <div class="ranking-container">
    <!-- Título -->
    <h1 class="ranking-title">Ranking</h1>

    <!-- Podio principal -->
    <div class="podium">
  <!-- Segundo lugar -->
  <div class="podium-item second-place-item">
    <div class="avatar-container second-place">
      <img src="https://via.placeholder.com/50" alt="Angie" class="avatar" />
    </div>
    <p class="name">Angie</p>
    <p class="score">1,469</p>
    <div class="place-badge second">2</div>
  </div>

  <!-- Primer lugar con animación -->
  <div class="podium-item first-place-item">
    <div class="avatar-container first-place">
      <img src="https://via.placeholder.com/50" alt="Arvic" class="avatar" />
    </div>
    <p class="name">Arvic</p>
    <p class="score">19,008</p>
    <div class="place-badge first">1</div>
  </div>

  <!-- Tercer lugar -->
  <div class="podium-item third-place-item">
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
  font-family: 'Arial', sans-serif;
  background-color: #f0f4f8;
  min-height: 100vh;
  padding: 20px;
}

.ranking-title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #4a00e0;
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
  position: relative;
}

/* Ajustar tamaños de los puestos */
.first-place-item {
  transform: scale(1.2); /* Aumenta el tamaño del primer lugar */
  background-color: #fbbf24; /* Color del primer lugar */
}

.second-place-item {
  transform: scale(1.1); /* Aumenta un poco el tamaño del segundo lugar */
  background-color: #a78bfa; /* Color del segundo lugar */
}

.third-place-item {
  transform: scale(1); /* Mantiene el tamaño original para el tercer lugar */
  background-color: #60a5fa; /* Color del tercer lugar */
}

/* Contenedor de la imagen de avatar */
.avatar-container {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.avatar {
  width: 70%;
  height: 70%;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Place badge */
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
  font-size: 16px;
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

/* Nombres y puntuaciones */
.name {
  font-weight: bold;
  margin-top: 10px;
}

.score {
  color: #2d3748;
  font-size: 14px;
}



/* Lista de clasificaciones */
.ranking-list {
  margin-bottom: 40px;
}

.ranking-item {
  display: flex;
  align-items: center;
  background-color: #e2e8f0;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.rank-number {
  width: 40px;
  height: 40px;
  background-color: #cbd5e0;
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

/* Animación especial para el primer puesto */
@keyframes first-place-animate {
  0% {
    transform: rotate(0deg) scale(1);
    box-shadow: 0 0 10px rgba(255, 207, 51, 0.6);
  }
  50% {
    transform: rotate(5deg) scale(1.1);
    box-shadow: 0 0 20px rgba(255, 207, 51, 0.8);
  }
  100% {
    transform: rotate(-5deg) scale(1);
    box-shadow: 0 0 10px rgba(255, 207, 51, 0.6);
  }
}
</style>
