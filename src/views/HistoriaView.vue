<template>
    <NavBarLayout>
      <section class="historia">
        <img src="https://via.placeholder.com/200" alt="Daniel Alomía Robles" class="profile-img" />
        <h2>Daniel Alomía Robles</h2>
        <p>
          Nació en la ciudad de Huánuco el 3 de enero de 1871. Falleció en Lima el 17 de julio de 1942.
          Daniel Alomía Robles fue hijo de Marcial Alomía y Micaela Robles. Su padre era un inmigrante
          de origen francés y su madre era peruana...
        </p>
      </section>
    </NavBarLayout>
  </template>
  
  <script>
  import NavBarLayout from "@/layout/NavBarLayout.vue";
  
  export default {
    name: "HistoriaView",
    components: { NavBarLayout },
  };
  </script>
  
  <style scoped>
  .historia {
    text-align: center;
  }
  
  .profile-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto 16px;
  }
  
  h2 {
    color: #4630eb;
    font-size: 1.5rem;
    margin-bottom: 16px;
  }
  
  p {
    color: #555;
    line-height: 1.6;
  }
  </style>
  