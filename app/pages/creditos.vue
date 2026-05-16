<template>
  <div class="page-animation py-10">
    <div class="text-center mb-16">
      <v-chip
        color="primary"
        variant="flat"
        class="mb-4 font-weight-bold elevation-4"
      >
        EQUIPO DE DESARROLLO
      </v-chip>
      <h1 class="text-h2 font-weight-black text-white">
        Creadores del Proyecto
      </h1>
      <p class="text-h6 text-white opacity-80 mt-2 font-weight-light">
        Universidad de Córdoba - Licenciatura en Informática
      </p>
    </div>

    <v-container>
      <v-row justify="center" class="gap-y-8">
        <!-- Card David -->
        <v-col cols="12" lg="10" xl="8">
          <v-card class="liquid-card hover-lift pa-6 pa-md-10">
            <v-row align="center" justify="center">
              <v-col cols="12" md="4" class="d-flex justify-center">
                <div class="avatar-ring">
                  <v-avatar size="200" color="primary" class="elevation-12">
                    <v-img src="/img/david.jpg" cover alt="David">
                      <template v-slot:placeholder>
                        <v-icon size="80" color="white">mdi-account</v-icon>
                      </template>
                    </v-img>
                  </v-avatar>
                </div>
              </v-col>
              <v-col cols="12" md="8" class="text-center text-md-left">
                <div class="pl-md-8">
                  <h2 class="text-h3 font-weight-black text-white mb-2">
                    DAVID
                  </h2>
                  <v-chip
                    color="primary"
                    variant="tonal"
                    class="mb-4 font-weight-black"
                  >
                    Estudiante Apasionado
                  </v-chip>
                  <p
                    class="text-h6 text-white opacity-80 font-weight-light leading-relaxed"
                  >
                    Entusiasta de la tecnología y el desarrollo de software.
                    Encargado de darle vida al código, la arquitectura y el
                    diseño visual de este OVA interactivo.
                  </p>
                  <div
                    class="mt-8 d-flex justify-center justify-md-start gap-4"
                  >
                    <v-btn
                      icon="mdi-instagram"
                      size="large"
                      variant="flat"
                      color="pink"
                      class="text-white elevation-4"
                      href="https://www.instagram.com/deivsrx"
                      target="_blank"
                    ></v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <!-- Card Sebastian -->
        <v-col cols="12" lg="10" xl="8">
          <v-card class="liquid-card hover-lift pa-6 pa-md-10">
            <v-row align="center" justify="center">
              <v-col cols="12" md="4" class="d-flex justify-center">
                <div class="avatar-ring">
                  <v-avatar size="200" color="info" class="elevation-12">
                    <v-img src="/img/sebas.jpg" cover alt="Sebastian">
                      <template v-slot:placeholder>
                        <v-icon size="80" color="white">mdi-account</v-icon>
                      </template>
                    </v-img>
                  </v-avatar>
                </div>
              </v-col>
              <v-col cols="12" md="8" class="text-center text-md-left">
                <div class="pl-md-8">
                  <h2 class="text-h3 font-weight-black text-white mb-2">
                    SEBASTIAN
                  </h2>
                  <v-chip
                    color="info"
                    variant="tonal"
                    class="mb-4 font-weight-black"
                  >
                    Estudiante Apasionado
                  </v-chip>
                  <p
                    class="text-h6 text-white opacity-80 font-weight-light leading-relaxed"
                  >
                    Amante de las matemáticas y la educación. Responsable de la
                    calidad pedagógica, el rigor académico y el diseño del
                    contenido didáctico de este proyecto.
                  </p>
                  <div
                    class="mt-8 d-flex justify-center justify-md-start gap-4"
                  >
                    <v-btn
                      icon="mdi-instagram"
                      size="large"
                      variant="flat"
                      color="pink"
                      class="text-white elevation-4"
                      href="https://www.instagram.com/sebx.box"
                      target="_blank"
                    ></v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="text-center mt-16 pb-10">
      <div
        class="px-10 py-6 mb-8 d-flex align-center justify-center elevation-12 mx-auto"
        style="
          background-color: white;
          border-radius: 9999px;
          max-width: 800px;
          width: 95%;
        "
      >
        <img
          src="/img/logo-uni.png"
          style="
            width: 100%;
            height: auto;
            max-height: 150px;
            object-fit: contain;
          "
          alt="Universidad de Córdoba"
        />
      </div>
      <h3 class="text-h4 font-weight-bold text-white mb-2">
        Universidad de Córdoba
      </h3>
      <p class="text-body-1 text-white opacity-50">
        Facultad de Educación y Ciencias Humanas <br />
        Programa de Licenciatura en Informática
      </p>

      <v-btn
        color="primary"
        variant="flat"
        to="/"
        size="x-large"
        class="rounded-pill font-weight-bold px-10 mt-10 hover-lift"
        elevation="8"
      >
        Ir al Inicio
        <v-icon right class="ml-2">mdi-home</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script setup>
// Lógica de créditos
</script>

<style scoped>
.liquid-card {
  background: rgba(15, 23, 42, 0.95) !important;
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border-radius: 40px !important;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.avatar-ring {
  padding: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f59e0b, #3b82f6, #10b981);
  display: inline-block;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
}

.hover-lift:hover {
  transform: translateY(-10px);
  border-color: rgba(245, 158, 11, 0.5);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.7);
}

.gap-4 {
  gap: 1rem;
}

.gap-y-8 {
  row-gap: 2rem;
}

.leading-relaxed {
  line-height: 1.6;
}

/* Responsive fixes */
@media (max-width: 600px) {
  .text-h3 {
    font-size: 2rem !important;
  }
}
</style>
