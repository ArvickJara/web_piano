<template>

<div class="navbar-layout">
  <header class="header-bar">
  <div class="header-content">
    <!-- Puntos en el lado izquierdo -->
    <div class="points">
      <span class="points-count">100 puntos</span>
    </div>

    <!-- Nombre de usuario y foto de perfil en el lado derecho -->
    <div class="user-info">
      <span class="user-name">Nombre de Usuario</span>
      <img src="/public/1000007284.svg" alt="Foto de perfil" class="profile-pic" />
    </div>
  </div>
</header>
    <!-- Menú lateral -->
    <menu class="menu">
      <button class="menu__item active">
        <router-link to="/historia" class="menu__icon">
          <span class="iconify" data-icon="fa6-solid:book"></span>
        </router-link>
        <strong class="menu__text active">Historia</strong>
      </button>

      <button class="menu__item">
        <router-link to="/ranking" class="menu__icon">
          <span class="iconify" data-icon="fa6-solid:chart-bar"></span>
        </router-link>
        <strong class="menu__text">Ranking</strong>
      </button>

      <button class="menu__item">
        <router-link to="/juego" class="menu__icon">
          <span class="iconify" data-icon="fa6-solid:gamepad"></span>
        </router-link>
        <strong class="menu__text">Juego</strong>
      </button>

      <button class="menu__item">
        <router-link to="/niveles" class="menu__icon">
          <span class="iconify" data-icon="icon-park-solid:game-ps"></span>
        </router-link>
        <strong class="menu__text">Niveles</strong>
      </button>

      <button class="menu__item">
        <router-link to="/perfil" class="menu__icon">
          <span class="iconify" data-icon="fa6-solid:user"></span>
        </router-link>
        <strong class="menu__text">Perfil</strong>
      </button>

      <!-- Nuevo botón de cierre de sesión -->
      <button class="menu__item logout-button">
        <span class="iconify" data-icon="solar:logout-2-bold"></span>
        <strong class="menu__text">Cerrar sesión</strong>
      </button>
    </menu>

    <!-- Aquí se agrega el <router-view> para renderizar las vistas hijas -->
    <router-view />
  </div>

</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from "../firebase"

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".menu__item");
  let activeButton = document.querySelector(".menu__item.active");

  buttons.forEach(item => {
    const text = item.querySelector(".menu__text");
    setLineWidth(text, item);

    window.addEventListener("resize", () => {
      setLineWidth(text, item);
    });

    item.addEventListener("click", function() {
      if (this.classList.contains("active")) return;

      // Remueve la clase activa de la opción previamente activa
      if (activeButton) {
        activeButton.classList.remove("active");
        activeButton.querySelector(".menu__text").classList.remove("active");
      }

      // Agrega la clase activa a la opción actual y su texto
      this.classList.add("active");
      this.querySelector(".menu__text").classList.add("active");
      activeButton = this;

      handleTransition(this, text);
    });
  });

  function setLineWidth(text, item) {
    const lineWidth = text.offsetWidth + "px";
    item.style.setProperty("--lineWidth", lineWidth);
  }

  function handleTransition(item, text) {
    item.addEventListener("transitionend", (e) => {
      if (e.propertyName != "flex-grow" || !item.classList.contains("active")) return;
      text.classList.add("active");
    });
  }

  // Agregar la lógica de cierre de sesión
  document.querySelector(".logout-button").addEventListener("click", async () => {
    try {
      await signOut(auth);
      alert("Sesión cerrada con éxito");
      window.location.href = "/"; // Redirige al inicio
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
      alert("Ocurrió un error al cerrar sesión. Intenta nuevamente.");
    }
  });
});
</script>

<style scoped>
.header-bar {
  background-color: #f8f9fa; /* Fondo claro */
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.points {
  font-size: 16px;
  font-weight: bold;
  color: #333; /* Texto oscuro */
  padding: 5px 10px; /* Espaciado interno */
  border: 2px solid #6a0dad; /* Borde morado */
  border-radius: 20px; /* Bordes redondeados */
  background-color: #f3e9ff; /* Fondo suave morado */
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-name {
  font-size: 14px;
  font-weight: bold;
  color: #6a0dad; /* Texto morado */
  padding: 5px 10px; /* Espaciado interno */
  border: 2px solid #6a0dad; /* Borde morado */
  border-radius: 20px; /* Bordes redondeados */
  background-color: #f3e9ff; /* Fondo suave morado */
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%; /* Imagen circular */
  object-fit: cover;
  border: 2px solid #6a0dad; /* Borde morado */
}
/*-----------------------*/
.menu {
  margin: 0;
  width: 45em; /* Ajuste de ancho para PC */
  height: 6em; /* Ajuste de altura para PC */
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed; /* Fija el menú en la parte inferior de la pantalla */
  bottom: 0; /* Coloca el menú en la parte inferior */
  left: 50%;
  transform: translateX(-50%); /* Centra el menú horizontalmente */
  user-select: none;
  background-color: #fefefe;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 0 1.9em; /* Ajusta el espaciado si es necesario */
  border-radius: 10px;
  z-index: 1000;
  -webkit-tap-highlight-color: transparent;
  flex-wrap: nowrap; /* Evita que los elementos se ajusten en móviles */
}

@media (max-width: 42.625em) {
  
  .menu {
    
    font-size: .55em ;
    
  }
  
}

.menu::after {

    height: 5% ;
    width: 35% ;
    bottom: 10% ;
    content: " " ;
    position: absolute ;
    border-radius: 1em ;
    background-color: #f2f3f4 ;


}

.menu__item {

    all: unset ;
    flex-grow: 1 ;
    display: flex ;
    cursor: pointer ;
    overflow: hidden ;
    padding-top: 0.5em ;
    position: relative ;
    align-items: center ;
    color: var(--color-1) ;
    justify-content: center ;
    transition: flex-grow var(--duration) var(--cubic) ;
    
}

.menu__icon {
    
    font-size: 1.05em ;
    stroke: currentColor ;
    transition: transform var(--duration) var(--cubic) ;
    
}

.menu__item::before {

    top: 9% ;
    left: 18.4% ;
    width: 1.5em ;
    height: 1.5em ;
    content: " ";
    position: absolute ;
    border-radius: 50% ;
    transform: scale(0) ;
    transform-origin: center ;
    background-color: #fdecef ;
    transition: transform var(--duration) var(--cubic) ;

}

.menu__item::after {

    left: 0;
    bottom: 0 ;
    content: " " ;
    height: 0.25em ;
    position: absolute ;
    border-radius: 2em ;
    transform-origin: left center ;
    background-color: currentColor ;
    width: calc( var(--lineWidth) + 5px ) ;
    transform: translate3d(3em , 0, 0) scaleX(0) ;
    transition: transform calc( var(--duration) + .2s) var(--cubic) ;

}


.menu__text {

    left: 4.15em ;
    font-size: 1.5em ;
    position: absolute ;
    text-transform: capitalize ;
    letter-spacing: .01em ;
    transform: translate3d(0, 109%, 0) ;
    transition: transform calc( var(--duration) / 3.7 ) ;

}

.menu__item.active {
    
    flex-grow: 2.7 ;
    color: var(--color-2) ;
    
}

.menu__item.active .menu__icon {
    
    transform: translate3d(-95% , 0, 0) ;

    
}

.menu__item.active::before {

    transform: scale(1) ;

}

.menu__item.active::after {

    transform: translate3d(6.3em , 0, 0) scaleX(1) ;
    transition: transform var(--duration) var(--cubic) ;

}

.menu__text.active {

    transform: translate3d(0 , 0, 0) ;
    transition: transform calc(var(--duration) / 1.5) ;
}

.iconify {

    --duration-icon: 1s ;
    
    fill: none ; 
    width: 2.5em ;
    height: 2.5em ;
    display: block ;
    stroke-width: 15 ;
    stroke-miterlimit: 10 ;
    
}


.active #home-anm {

    animation: home var(--duration-icon) ;
}

@keyframes home {

    25% {

        transform: translate3d(0, -.8em , 0) ;

    }

    50% {

        transform: translate3d(0, .5em , 0) ;

    }


}

#strategy-anm {
    
    transform: scaleX(.85) ;
    transform-origin: center ;

}

.active #strategy-anm {
    
    animation: strategy var(--duration-icon) ;

}

@keyframes strategy {
    
    50% {

        transform: scaleX(1) ;
        
    }
    
    100%{
        
        transform: scaleX(.85) ;

    }

}

.active #strategy-cir1 {

    animation: strategy-cir1 var(--duration-icon);
}

.active #strategy-cir2 {

    animation: strategy-cir2 var(--duration-icon) .1s;
}

.active #strategy-cir3 {

    animation: strategy-cir3 var(--duration-icon) .2s;
}

@keyframes strategy-cir1 {
    
    50% {

        transform: translate3d(-.7em,-0.7em,0);
        
    }
    
    100%{
        
        transform: translate3d(0,0,0);


    }

}

@keyframes strategy-cir2 {
    
    35% {

        transform: translate3d(0,-0.7em,0);
        
    }
    
    100%{
        
        transform: translate3d(0,0,0);


    }

}

@keyframes strategy-cir3 {
    
    35% {

        transform: translate3d(.7em,-0.7em,0);
        
    }
    
    100%{
        
        transform: translate3d(0,0,0);


    }

}


.active #period-anm {

    transform-origin: center 100% ;
    animation: period var(--duration-icon) ;

}

.active #period-cir {

    transform-origin: center ;
    animation: period-cir var(--duration-icon) ;

}

.active #period-line {

    stroke-dasharray: 66 ;
    animation: period-line calc( var(--duration-icon) / 2.5 ) reverse ;

}


@keyframes period {

    35% {

        transform: scaleY(.85) ;

    }

    60% , 70% {

        transform: scaleY(1.2) ;

    }

    100% {
        
        transform: scaleY(1) ;

    }

}

@keyframes period-cir {

    0%{

       opacity: 0 ;

    }

    35% {

        opacity: 1 ;
        transform: translate3d(15%, -55%, 0) ;

    }

    60%{

        opacity: 0 ;
        transform: translate3d(-8%, -50%, 0) ;

    }

}

@keyframes period-line {


    100% {

        stroke-dashoffset: 66 ;

    }

}


.active #security-cir {

    transform-box: fill-box ;
    transform-origin: center ;
    animation: security-cir calc( var(--duration-icon) / 1.5 ) ;

}

@keyframes security-cir {


    0% {

        transform: scale(0) ;
        
    }
    
    100% {
        
        transform: scale(1) ;
        
    }

}

.active #security-strok {

    stroke-dasharray: 96;
    animation: security-strok calc( var(--duration-icon) / 1.2 ) ;

}

@keyframes security-strok {


    0% {

        stroke-dashoffset: 60 ;
        
    }
    
    100% {
        
        stroke-dashoffset: 230 ;
        
    }

}

.active #settings-anm {

    transform-box: fill-box ;
    transform-origin: center ;
    animation: settings-anm calc( var(--duration-icon) / 1.5 ) ;

}

@keyframes settings-anm {


    0% {

        transform: rotate(-60deg);
        
    }
    
    50% {
        
        transform: rotate(60deg);
        
    }

}

</style>
