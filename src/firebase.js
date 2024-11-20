// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Para Firestore
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Para autenticación

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCgcnH6KgVt6o5F70cjD3LlVX8RYhSoSDQ",
  authDomain: "gamificacion-2d3c5.firebaseapp.com",
  projectId: "gamificacion-2d3c5",
  storageBucket: "gamificacion-2d3c5.firebasestorage.app",
  messagingSenderId: "679352775776",
  appId: "1:679352775776:web:5571e7b764ba9509fcff05",
  measurementId: "G-MY5DYWXKY0"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Servicios de Firebase
const db = getFirestore(app); // Base de datos
const auth = getAuth(app);    // Autenticación
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
