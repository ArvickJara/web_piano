<template>
  <div class="game-container">
    <h1 class="title">Juego de Piano</h1>

    <!-- Teclas del piano -->
    <div class="piano-keys-container">
      <div
        v-for="(key, index) in pianoKeys"
        :key="index"
        :class="['piano-key', { highlighted: highlightedKey === index }]"
        @click="playKey(index)"
        :style="{ backgroundColor: key.color }"
      ></div>
    </div>

    <!-- Barra de progreso -->
    <div class="progress-bar-container">
      <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>

    <p class="score">Puntos: {{ score }}</p>

    <!-- Vista de fin del juego -->
    <div v-if="gameOver" class="game-over">
      <h2>¡Juego Terminado!</h2>
      <p>Has obtenido {{ score }} puntos.</p>
      <button @click="restartGame">Reiniciar</button>
    </div>
  </div>
</template>

<script>
import { db, auth, addDoc, collection, updateDoc, query, where, getDocs } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default {
  name: "PianoGame",
  data() {
    return {
      pianoKeys: [
        { color: "red" },
        { color: "blue" },
        { color: "green" },
        { color: "yellow" }
      ],
      highlightedKey: null,
      score: 0,
      progress: 0,
      gameOver: false,
      gameSequence: [],
      userSequence: [],
      maxRounds: 5,
      currentUser: null // Usuario autenticado
    };
  },
  methods: {
    async saveScore() {
      if (!this.currentUser) {
        console.error("No hay un usuario autenticado.");
        return;
      }

      try {
        // Referencia a la colección de usuarios
        const usersCollection = collection(db, "users");
        const userQuery = query(usersCollection, where("email", "==", this.currentUser.email));
        const querySnapshot = await getDocs(userQuery);

        if (querySnapshot.empty) {
          console.error("El usuario no existe en la tabla 'users'.");
          return;
        }

        // Obtener el documento del usuario
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        // Sumar los puntos actuales con los nuevos
        const nuevosPuntos = (userData.puntos || 0) + this.score;

        // Actualizar los puntos en Firebase
        await updateDoc(userDoc.ref, {
          puntos: nuevosPuntos
        });

        console.log("Puntos actualizados en Firebase:", nuevosPuntos);
      } catch (error) {
        console.error("Error guardando los puntos en Firebase:", error);
      }
    },
    startGame() {
      this.gameOver = false;
      this.score = 0;
      this.progress = 0;
      this.gameSequence = [];
      this.userSequence = [];
      this.nextRound();
    },
    nextRound() {
      if (this.gameSequence.length === this.maxRounds) {
        this.endGame();
        return;
      }
      const randomKey = Math.floor(Math.random() * this.pianoKeys.length);
      this.gameSequence.push(randomKey);
      this.userSequence = [...this.gameSequence];
      this.highlightKey(randomKey);
    },
    highlightKey(index) {
      this.highlightedKey = index;
      setTimeout(() => {
        this.highlightedKey = null;
      }, 500);
    },
    playKey(index) {
      if (this.gameOver) return;
      if (this.userSequence[0] === index) {
        this.userSequence.shift();
        this.score += 10;
        this.progress = (this.gameSequence.length / this.maxRounds) * 100;

        if (this.userSequence.length === 0) {
          setTimeout(this.nextRound, 1000);
        }
      } else {
        this.endGame();
      }
    },
    async endGame() {
      this.gameOver = true;
      await this.saveScore(); // Guarda los puntos del usuario autenticado en la colección 'users'
    },
    restartGame() {
      this.startGame();
    }
  },
  mounted() {
    this.startGame();

    // Escuchar cambios de autenticación
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = user;
        console.log("Usuario autenticado:", user.email);
      } else {
        this.currentUser = null;
        console.warn("No hay usuario autenticado. No se guardarán los puntos.");
      }
    });
  }
};
</script>



<style scoped>
.game-container {
  text-align: center;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #f7f9fc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.piano-keys-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.piano-key {
  width: 60px;
  height: 60px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s;
}

.piano-key.highlighted {
  transform: scale(1.2);
}

.progress-bar-container {
  width: 100%;
  height: 20px;
  background: #ddd;
  border-radius: 10px;
  margin-bottom: 10px;
}

.progress-bar {
  height: 100%;
  background: #4caf50;
  transition: width 0.3s;
}

.score {
  font-size: 1.5rem;
  margin: 20px 0;
}

.game-over {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #45a049;
}
</style>
