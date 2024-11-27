<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

    <header>
        <img alt="Udh logo" class="logo" src="@/assets/Paisi.svg" width="300" height="115" />

        <div class="wrapper">

            <nav>
                <RouterLink to="/">Login</RouterLink>
                <RouterLink to="/register">registrarse</RouterLink>
            </nav>
        </div>
    </header>

    <main>

        <div class="border">
            <RouterView />
        </div>

    </main>

</template>


<style scoped>
/* Header general */
header {
    line-height: 1.5;
    max-height: 100vh;
}

/* Logo */
.logo {
    display: block;
    margin: 0 auto 2rem;
}

/* Navegación */
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

/* Enlaces generales */
nav a {
    display: inline-block;
    padding: 0 1rem;
    font-size: 1rem;
    color: blue;
    /* Azul como color predeterminado */
    text-decoration: none;
    border-left: 1px solid var(--color-border);
    transition: color 0.3s ease, background-color 0.3s ease;
    /* Suaviza las transiciones */
}

/* Quitar el borde del primer enlace */
nav a:first-of-type {
    border: 0;
}

/* Enlace activo (seleccionado) */
nav a.router-link-exact-active {
    color: gray;
    /* Color plomo para el enlace activo */
    font-weight: bold;
    /* Resaltar el enlace activo */
}

/* Hover: cuando el mouse pasa sobre el enlace */
nav a:hover {
    color: darkblue;
    /* Azul oscuro en hover */
}

/* Enlace con foco (al hacer clic o usar el teclado) */
nav a:focus,
nav a:active {
    color: gray;
    /* Cambia a plomo */
}

/* Ajustes para pantallas grandes */
@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;
        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
