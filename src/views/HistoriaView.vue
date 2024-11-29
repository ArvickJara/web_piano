<template>
  <NavBarLayout>
    <section class="historia">
      <!-- Imagen de perfil -->
      <img
        src="@/assets/daniel.jpg"
        alt="Daniel Alomía Robles"
        class="profile-img"
      />

      <!-- Título principal -->
      <h2>Daniel Alomía Robles</h2>

      <!-- Contenido dividido en secciones -->
      <article class="section">
        <h3>Infancia y Formación</h3>
        <p>
          Nació el 3 de enero de 1871 en Huánuco, Perú. Aunque inicialmente
          estudió medicina en la Universidad Nacional Mayor de San Marcos en
          Lima, abandonó esa carrera para dedicarse por completo a la música,
          impulsado por su pasión por las tradiciones culturales andinas.
        </p>
      </article>

      <article class="section">
        <h3>Legado como Musicólogo</h3>
        <p>
          Alomía Robles realizó extensos viajes por las regiones más remotas de
          los Andes peruanos, documentando canciones, melodías y danzas
          tradicionales. Esta labor le permitió preservar más de 700
          composiciones populares y melodías indígenas, muchas de las cuales
          podrían haberse perdido sin su intervención. Sus investigaciones
          sentaron las bases para el estudio de la música folclórica peruana,
          resaltando la influencia de las culturas indígenas en el panorama
          musical nacional.
        </p>
      </article>

      <article class="section">
        <h3>"El Cóndor Pasa"</h3>
        <p>
          En 1913, compuso "El Cóndor Pasa" como parte de una zarzuela del mismo
          nombre. La obra, escrita en cinco actos, aborda temas sociales y
          culturales de la época, especialmente la explotación de los mineros
          indígenas. El tema principal de la zarzuela se convirtió en un ícono
          cultural, representando el espíritu andino. Décadas después, la
          melodía alcanzó fama internacional gracias a la versión adaptada por
          Simon & Garfunkel en 1970, titulada "El Cóndor Pasa (If I Could)".
        </p>
      </article>

      <article class="section">
        <h3>Trabajo y Reconocimientos</h3>
        <p>
          Fue reconocido por sus esfuerzos en la recopilación y difusión de la
          música indígena. Su trabajo ayudó a destacar la importancia de las
          culturas originarias en la identidad nacional peruana. En 1919, se
          mudó a Nueva York, donde trabajó como cónsul del Perú y continuó
          promoviendo la música andina.
        </p>
      </article>

      <article class="section">
        <h3>Fallecimiento y Legado</h3>
        <p>
          Daniel Alomía Robles falleció el 18 de junio de 1942 en Lima, Perú. Su
          legado ha trascendido fronteras, consolidándolo como uno de los
          mayores exponentes de la música tradicional andina. "El Cóndor Pasa"
          fue declarado Patrimonio Cultural de la Nación en Perú, y su trabajo
          sigue siendo fuente de inspiración para estudiosos y artistas en todo
          el mundo.
        </p>
      </article>

      <!-- Frase clave -->
      <blockquote class="quote">
        “En cada melodía indígena hay un alma y una historia que debemos
        preservar”.
      </blockquote>
    </section>
  </NavBarLayout>
</template>

<script>
export default {};
</script>

<style scoped>
/* Contenedor principal */
.historia {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

/* Imagen de perfil */
.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 7%;
  margin: 0 auto 16px;
}

/* Títulos principales y secundarios */
h2 {
  color: #4630eb;
  font-size: 1.8rem;
  margin-bottom: 16px;
}

h3 {
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 12px;
  text-align: left;
}

/* Párrafos */
p {
  color: #555;
  line-height: 1.8;
  text-align: left;
  margin-bottom: 20px;
}

/* Frase destacada */
.quote {
  font-size: 1.2rem;
  font-style: italic;
  color: #4630eb;
  margin-top: 20px;
  border-left: 4px solid #4630eb;
  padding-left: 12px;
  text-align: left;
}

/* Secciones */
.section {
  margin-bottom: 30px;
}
</style>
