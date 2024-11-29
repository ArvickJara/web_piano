<template>
  <div class="levels-container">
    <!-- Niveles -->
    <div
      v-for="(level, index) in levels"
      :key="index"
      class="level"
      :class="{ unlocked: level.unlocked }"
      :style="getLevelPosition(index)"
    >
      <div class="level-icon">
        {{ index + 1 }}
        <span v-if="level.unlocked" class="star">★</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameLevels",
  data() {
    return {
      levels: [
        { unlocked: true },
        { unlocked: true },
        { unlocked: false },
        { unlocked: false },
        { unlocked: false },
        { unlocked: false },
      ],
    };
  },
  methods: {
    getLevelPosition(index) {
      const positions = [
        { top: "420px", left: "40px" },
        { top: "360px", left: "120px" },
        { top: "290px", left: "200px" },
        { top: "210px", left: "150px" },
        { top: "130px", left: "70px" },
        { top: "40px", left: "150px" },
      ];
      return positions[index] || {};
    },
  },
};
</script>

<style scoped>
.levels-container {
  width: 100%;
  max-width: 400px;
  margin: auto;
  position: relative;
  height: 500px;
  background-color: transparent; /* Fondo transparente */
}

.level {
  position: absolute;
  transform: translate(-50%, -50%);
}

.level-icon {
  width: 50px;
  height: 50px;
  background-color: #ffcc00;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: all 0.3s ease-in-out;
}

.level-icon .star {
  color: #ffd700;
  font-size: 1rem;
  position: absolute;
  top: -10px;
  right: -10px;
}

.level.unlocked .level-icon {
  background: linear-gradient(135deg, #42a5f5, #7e57c2);
  color: #fff;
  animation: glow 1.5s infinite alternate;
}

.level.unlocked .level-icon .star {
  display: block;
}

.level-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 16px rgba(255, 215, 0, 0.5);
}

@keyframes glow {
  from {
    box-shadow: 0 0 10px #42a5f5, 0 0 20px #7e57c2;
  }
  to {
    box-shadow: 0 0 20px #7e57c2, 0 0 30px #42a5f5;
  }
}

.level:not(.unlocked) .level-icon {
  background-color: #bdbdbd;
  color: #757575;
  border: 3px solid #9e9e9e;
}

.level:not(.unlocked) .level-icon:hover {
  transform: scale(1.05);
}
</style>
