<template>
  <section class="historia">
    <div class="profile-card">
      <img src="https://via.placeholder.com/200" alt="Daniel Alomía Robles" class="profile-img" />
      <h2>Daniel Alomía Robles</h2>
      <p>
        Nació en la ciudad de Huánuco el 3 de enero de 1871. Falleció en Lima el 17 de julio de 1942.
        Daniel Alomía Robles fue hijo de Marcial Alomía y Micaela Robles. Su padre era un inmigrante
        de origen francés y su madre era peruana...
      </p>
    </div>
    <button class="info-btn" @click="toggleInfo">¡Descubre más sobre él!</button>
    <div v-if="showExtraInfo" class="extra-info">
      <p>
        Daniel Alomía Robles es conocido por su obra más famosa, la canción "El condor pasa", que ha sido interpretada por artistas de todo el mundo y es un ícono de la música andina peruana.
      </p>
      <p>
        Fue un defensor de la música tradicional y contribuyó a la creación de la identidad musical del Perú.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "HistoriaView",
  data() {
    return {
      showExtraInfo: false,
    };
  },
  methods: {
    toggleInfo() {
      this.showExtraInfo = !this.showExtraInfo;
    },
  },
};
</script>

<style scoped>

.historia {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #f7c6c6, #e3f7ff);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.historia:hover {
  transform: scale(1.02);
}

.profile-card {
  text-align: center;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 16px;
  border: 5px solid #4630eb;
  transition: transform 0.3s;
}

.profile-img:hover {
  transform: rotate(15deg);
}

h2 {
  color: #4630eb;
  font-size: 2rem;
  margin-bottom: 12px;
}

p {
  color: #333;
  line-height: 1.6;
  font-size: 1rem;
}

.info-btn {
  background-color: #4630eb;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;
}

.info-btn:hover {
  background-color: #3153d3;
  transform: translateY(-3px);
}

.extra-info {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.extra-info p {
  color: #555;
  font-size: 0.95rem;
}
</style>