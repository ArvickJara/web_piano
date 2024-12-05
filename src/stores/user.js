import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    userName: localStorage.getItem("userName") || null, // Recupera el nombre almacenado
  }),
  actions: {
    setUserName(name) {
      this.userName = name;
      localStorage.setItem("userName", name); // Almacena en localStorage
    },
  },
});
