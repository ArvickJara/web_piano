<template>
  <div>
    <h1>Bienvenido, {{ userName }} 🎉</h1>
    <p>¡Nos alegra tenerte aquí!</p>
  </div>
</template>

<script>
import { useUserStore } from "../stores/user";

export default {
  computed: {
    userName() {
      const userStore = useUserStore();
      return userStore.userName || "Usuario";
    },
  },
};
</script>

<style scoped>
h1 {
  color: #4630eb;
}
p{
  color: black;
}
</style>
