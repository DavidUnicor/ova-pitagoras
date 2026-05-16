<template>
  <div class="page-animation">
    <div class="mb-10 text-center text-md-left">
      <v-chip
        color="info"
        variant="flat"
        class="mb-4 font-weight-bold"
        elevation="2"
        >Módulo 2</v-chip
      >
      <h1 class="text-h2 font-weight-black text-white mb-2">
        Recursos de Apoyo
      </h1>
      <p class="text-h6 text-white opacity-70 font-weight-light">
        Explora el material audiovisual y práctico para reforzar tu aprendizaje.
      </p>
    </div>

    <!-- Layout without empty spaces -->
    <v-row class="mb-8">
      <!-- Main Video Resource taking full width or 12 cols -->
      <v-col cols="12">
        <v-card
          class="rounded-xl liquid-card elevation-0 overflow-hidden h-100 d-flex flex-column"
        >
          <v-toolbar color="primary" class="px-4 py-2">
            <v-icon size="32" color="white" class="mr-3">mdi-youtube</v-icon>
            <v-toolbar-title class="text-h5 font-weight-black text-white"
              >1. Video Explicativo Animado</v-toolbar-title
            >
          </v-toolbar>
          <v-card-text class="pa-6">
            <v-row>
              <v-col cols="12" md="8">
                <div
                  class="rounded-xl overflow-hidden border elevation-4 mb-4"
                  style="aspect-ratio: 16/9; background: #000"
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/2yfkEAt2ew0?si=3mh7T_tPM_Affcxl"
                    title="Teorema de Pitágoras"
                    frameborder="0"
                    allow="
                      accelerometer;
                      autoplay;
                      clipboard-write;
                      encrypted-media;
                      gyroscope;
                      picture-in-picture;
                      web-share;
                    "
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  >
                  </iframe>
                </div>
              </v-col>
              <v-col cols="12" md="4" class="d-flex flex-column justify-center">
                <h3 class="text-h4 font-weight-black mb-4 text-white">
                  Visualiza el Teorema
                </h3>
                <p
                  class="text-body-1 text-white opacity-80 mb-6"
                  style="line-height: 1.8"
                >
                  Comprende cómo los cuadrados de los catetos construyen el área
                  de la hipotenusa. Este video de Daniel Carreón explica de
                  forma sencilla y directa el concepto.
                </p>
                <v-btn
                  :color="progress.recursos.r1 ? 'success' : 'primary'"
                  size="x-large"
                  block
                  class="rounded-pill font-weight-bold mt-auto"
                  @click="markRead('r1')"
                >
                  <v-icon start>{{
                    progress.recursos.r1
                      ? "mdi-check-circle"
                      : "mdi-play-circle-outline"
                  }}</v-icon>
                  {{
                    progress.recursos.r1 ? "Video Visto" : "Marcar como Visto"
                  }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 3 smaller resources aligned nicely below -->
    <v-row class="mb-8">
      <!-- PDF Resource -->
      <v-col cols="12" md="4">
        <v-card
          class="rounded-xl liquid-card elevation-0 overflow-hidden h-100 d-flex flex-column hover-lift"
        >
          <div class="bg-error pa-4 text-center">
            <v-icon size="48" color="white">mdi-file-pdf-box</v-icon>
          </div>
          <v-card-text class="pa-6 d-flex flex-column h-100 text-center">
            <h3 class="text-h5 font-weight-black mb-3 text-white">
              2. Guía Académica
            </h3>
            <p class="text-body-1 text-white opacity-80 mb-6 flex-grow-1">
              Documento detallado de la UNAM con demostraciones geométricas y
              ejercicios para profundizar.
            </p>
            <v-btn
              color="error"
              block
              class="rounded-pill font-weight-bold mb-4"
              @click="
                openLink(
                  'https://portalacademico.cch.unam.mx/matematicas2/teorema-pitagoras',
                  'r2',
                )
              "
            >
              Descargar PDF
            </v-btn>
            <v-btn
              :variant="progress.recursos.r2 ? 'flat' : 'outlined'"
              :color="progress.recursos.r2 ? 'success' : 'white'"
              block
              class="rounded-pill"
              @click="markRead('r2')"
            >
              {{ progress.recursos.r2 ? "Revisado" : "Marcar Revisado" }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- History Resource -->
      <v-col cols="12" md="4">
        <v-card
          class="rounded-xl liquid-card elevation-0 overflow-hidden h-100 d-flex flex-column hover-lift"
        >
          <div class="bg-success pa-4 text-center">
            <v-icon size="48" color="white">mdi-history</v-icon>
          </div>
          <v-card-text class="pa-6 d-flex flex-column h-100 text-center">
            <h3 class="text-h5 font-weight-black mb-3 text-white">
              3. Biografía Oficial
            </h3>
            <p class="text-body-1 text-white opacity-80 mb-6 flex-grow-1">
              Explora la vida de Pitágoras de Samos en la World History
              Encyclopedia, un recurso académico verificado.
            </p>
            <v-btn
              color="success"
              block
              class="rounded-pill font-weight-bold mb-4"
              @click="
                openLink(
                  'https://www.worldhistory.org/trans/es/1-11003/pitagoras/',
                  'r3',
                )
              "
            >
              Ver Biografía
            </v-btn>
            <v-btn
              :variant="progress.recursos.r3 ? 'flat' : 'outlined'"
              :color="progress.recursos.r3 ? 'success' : 'white'"
              block
              class="rounded-pill"
              @click="markRead('r3')"
            >
              {{ progress.recursos.r3 ? "Revisado" : "Marcar Revisado" }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Practical Examples Resource -->
      <v-col cols="12" md="4">
        <v-card
          class="rounded-xl liquid-card elevation-0 overflow-hidden h-100 d-flex flex-column hover-lift"
        >
          <div class="bg-warning pa-4 text-center">
            <v-icon size="48" color="white">mdi-lightbulb-on</v-icon>
          </div>
          <v-card-text class="pa-6 d-flex flex-column h-100 text-center">
            <h3 class="text-h5 font-weight-black mb-3 text-white">
              4. Banco de Ejercicios
            </h3>
            <p class="text-body-1 text-white opacity-80 mb-6 flex-grow-1">
              Ejemplos resueltos y problemas de aplicación real para practicar
              antes de la evaluación.
            </p>
            <v-btn
              color="warning"
              block
              class="rounded-pill font-weight-bold mb-4 text-black"
              @click="
                openLink(
                  'https://www.matematicasonline.es/segundoeso/ejercicios/Pitagoras2-sol.pdf',
                  'r4',
                )
              "
            >
              Practicar Ejercicios
            </v-btn>
            <v-btn
              :variant="progress.recursos.r4 ? 'flat' : 'outlined'"
              :color="progress.recursos.r4 ? 'success' : 'white'"
              block
              class="rounded-pill"
              @click="markRead('r4')"
            >
              {{ progress.recursos.r4 ? "Revisado" : "Marcar Revisado" }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <div class="d-flex justify-space-between mt-12 align-center">
      <v-btn
        variant="text"
        to="/contenidos"
        color="white"
        class="font-weight-bold"
        prepend-icon="mdi-arrow-left"
        >Volver a Contenidos</v-btn
      >
      <v-btn
        color="primary"
        to="/actividades"
        append-icon="mdi-arrow-right"
        size="x-large"
        class="rounded-pill px-8 font-weight-bold text-secondary"
        elevation="4"
      >
        Ir a Actividades
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { useState } from "#app";

const progress = useState("progress");

const markRead = (id) => {
  if (progress.value && progress.value.recursos) {
    progress.value.recursos[id] = true;
  }
};

const openLink = (url, id) => {
  markRead(id);
  window.open(url, "_blank");
};
</script>

<style scoped>
.liquid-card {
  background: rgba(15, 23, 42, 0.95) !important;
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.6);
}

.hover-lift {
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hover-lift:hover {
  transform: translateY(-8px);
}
</style>
