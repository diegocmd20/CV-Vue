<template>
  <div class="text-light bg-dark py-5">
    <div class="container text-center">
      <h1>Curriculum Vitae</h1>
    </div>
    <main class="container">
      <section id="resumen" class="text-center">
        <img :src=foto width="200" class="py-3" />
        <h2>Javier Rojas</h2>
        <h3>Resumen</h3>
        <p>
          Desarrollador web junior entusiasta con conocimientos en HTML, CSS,
          JavaScript y ReactJs.
        </p>
      </section>
      <hr />
      <section id="datos-personales">
        <h3>Datos Personales</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre:</th>
              <td class="text-end">Javier Rojas</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Rut:</th>
              <td class="text-end">11.111.111-1</td>
            </tr>
            <tr>
              <th>Celular:</th>
              <td class="text-end">9 9999 9999</td>
            </tr>
            <tr>
              <th>Portafolio:</th>
              <td class="text-end">
                <a
                  href="https://javierojas.vercel.app/"
                  target="_blank"
                  class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >Portafolio</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <hr />
      <section id="antecedentes-laborales">
        <h3>Antecedentes Laborales</h3>
        <b class="fw-normal">Programador Front-End</b>
        <p>
          Práctica laboral, apoyo en el desarrollo front-end de la página
          www.rubits.works<br />
          Me integré a un equipo de tres desarrolladores para construir un sitio
          web sobre la búsqueda de empleo para Rubits Works,<br />
          una ambiciosa startup de La Serena, Chile. Me uní a este equipo como
          soporte de desarrollo front-end usando tecnologías como React js. y
          Tailwind.
        </p>
      </section>
      <hr />
      <section id="habilidades">
        <h3>Habilidades</h3>
        <ul>
          <li>Html</li>
          <li>Css</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Tailwind</li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
</script>
