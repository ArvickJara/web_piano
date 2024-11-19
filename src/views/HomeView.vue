<template>
  <div>
    <h1>Lista de Items</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.nombre }}</li>
    </ul>

    <form @submit.prevent="addItem">
      <input v-model="newItem" placeholder="Agregar nuevo item" />
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default {
  data() {
    return {
      items: [],       // Lista de elementos de Firestore
      newItem: "",     // Nuevo elemento a agregar
    };
  },
  methods: {
    async fetchItems() {
      const querySnapshot = await getDocs(collection(db, "items"));
      this.items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    async addItem() {
      if (!this.newItem) return;
      try {
        await addDoc(collection(db, "items"), { nombre: this.newItem });
        this.newItem = "";
        this.fetchItems(); // Recargar lista
      } catch (error) {
        console.error("Error al agregar el item: ", error);
      }
    }
  },
  mounted() {
    this.fetchItems();
  }
};
</script>

<style>
/* Opcional: estilos personalizados */
</style>
