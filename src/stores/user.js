import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    userName: null, // Guardará el nombre de usuario
  }),
  actions: {
    setUserName(name) {
      this.userName = name; // Actualiza el nombre del usuario
    },
  },
});
