<template>
  <div class="layout-container">
    <!-- Math Background -->
    <div class="animated-bg"></div>
    <div class="math-symbol sym-1">a² + b² = c²</div>
    <div class="math-symbol sym-2">∑</div>
    <div class="math-symbol sym-3">√x</div>
    <div class="math-symbol sym-4">π</div>
    <div class="math-symbol sym-5">θ</div>
    <div class="math-symbol sym-6">∞</div>
    <div class="math-symbol sym-7">∫</div>

    <!-- Innovative Floating Navbar -->
    <v-app-bar
      elevation="24"
      class="floating-nav mt-6 mx-auto rounded-pill"
      height="80"
      max-width="1000"
      style="left: 0; right: 0"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.display.mobile"
        @click="drawer = !drawer"
        color="primary"
      ></v-app-bar-nav-icon>

      <div class="d-flex align-center px-6">
        <v-avatar color="primary" size="48" class="elevation-4 mr-3">
          <v-icon color="white" size="28">mdi-math-compass</v-icon>
        </v-avatar>
        <div class="d-none d-sm-flex flex-column">
          <span
            class="text-subtitle-2 font-weight-bold text-primary"
            style="line-height: 1"
            >OVA Interactivo</span
          >
          <span
            class="text-h6 font-weight-black text-white"
            style="line-height: 1.2"
            >Teorema de Pitágoras</span
          >
        </div>
      </div>

      <v-spacer></v-spacer>

      <template v-if="!$vuetify.display.mobile">
        <div class="px-6 d-flex gap-2">
          <v-tooltip
            v-for="item in navItems"
            :key="item.title"
            location="bottom"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                :to="item.to"
                :disabled="item.to === '/evaluacion' && progressPercent < 100"
                variant="text"
                class="text-capitalize rounded-pill font-weight-black nav-btn text-white"
                exact
              >
                <v-icon
                  start
                  size="22"
                  :color="
                    item.to === '/evaluacion' && progressPercent < 100
                      ? 'grey'
                      : 'primary'
                  "
                  >{{ item.icon }}</v-icon
                >
                {{ item.title }}
              </v-btn>
            </template>
            <span v-if="item.to === '/evaluacion' && progressPercent < 100"
              >Comienza a aprender para desbloquear ({{
                progressPercent
              }}%)</span
            >
            <span v-else>{{ item.title }}</span>
          </v-tooltip>
        </div>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      v-if="$vuetify.display.mobile"
      class="liquid-glass border-0"
      theme="dark"
    >
      <div class="pa-4 text-center">
        <v-icon color="primary" size="64">mdi-math-compass</v-icon>
        <div class="text-h6 font-weight-bold mt-2 text-white">
          OVA Pitágoras
        </div>
      </div>
      <v-divider class="mb-4 border-opacity-50"></v-divider>
      <v-list nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          :disabled="item.to === '/evaluacion' && progressPercent < 100"
          color="primary"
          rounded="xl"
          class="mb-2 font-weight-bold"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Floating Circular Progress Widget (Enlarged) -->
    <v-card
      class="progress-widget liquid-glass-element rounded-xl pa-4 d-flex align-center elevation-10"
      hover
    >
      <v-progress-circular
        :model-value="progressPercent"
        color="success"
        size="80"
        width="10"
        class="font-weight-black text-h6"
      >
        {{ progressPercent }}%
      </v-progress-circular>
      <div class="ml-4 mr-4">
        <div
          class="text-subtitle-1 font-weight-bold text-uppercase text-primary"
          style="letter-spacing: 1px"
        >
          Progreso
        </div>
        <div
          class="text-h6 font-weight-black text-white"
          style="line-height: 1"
        >
          del Curso
        </div>
      </div>
    </v-card>

    <v-main class="position-relative pt-16 mt-16">
      <v-container
        class="py-12 position-relative z-1"
        fluid
        style="max-width: 1200px"
      >
        <slot />
      </v-container>
    </v-main>

    <v-footer
      class="text-center d-flex flex-column py-8 mt-auto liquid-glass border-t border-opacity-25"
      theme="dark"
    >
      <div class="d-flex flex-column align-center justify-center mb-6 w-100">
        <!-- Adaptive Horizontal Logo Centered -->
        <div
          class="px-10 py-6 mb-8 d-flex align-center justify-center elevation-12"
          style="background-color: white; border-radius: 9999px; max-width: 800px; width: 95%;"
        >
          <img
            src="/img/logo-uni.png"
            style="max-height: 250px; width: 100%; object-fit: contain;"
            alt="Universidad de Córdoba"
          >
        </div>
        <div class="text-center px-4">
          <div class="text-h4 text-white font-weight-black mb-1">
            Universidad de Córdoba
          </div>
          <div class="text-h6 text-primary font-weight-bold opacity-90">
            Licenciatura en Informática
          </div>
        </div>
      </div>

      <v-divider class="w-50 mx-auto my-4 border-opacity-50"></v-divider>

      <div class="text-body-2 text-white font-weight-medium opacity-80 mb-2">
        <strong>OVA:</strong> Teorema de Pitágoras interactivo
      </div>
      <div class="text-caption text-white font-weight-light opacity-60">
        Desarrollado por: David & Sebastian © {{ new Date().getFullYear() }}
      </div>
    </v-footer>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useState } from "#app";

const drawer = ref(false);

// Global State
const progress = useState("progress", () => ({
  contenidos: { c1: false, c2: false, c3: false },
  recursos: { r1: false, r2: false, r3: false, r4: false },
  actividades: { a1: false, a2: false, a3: false, a4: false },
}));

const progressPercent = computed(() => {
  let completed = 0;
  let total = 0;

  for (const section in progress.value) {
    const items = progress.value[section];
    for (const key in items) {
      total++;
      if (items[key]) completed++;
    }
  }

  return total === 0 ? 0 : Math.round((completed / total) * 100);
});

const navItems = [
  { title: "Inicio", to: "/", icon: "mdi-home-variant" },
  {
    title: "Contenidos",
    to: "/contenidos",
    icon: "mdi-book-open-page-variant",
  },
  { title: "Recursos", to: "/recursos", icon: "mdi-video-vintage" },
  { title: "Actividades", to: "/actividades", icon: "mdi-puzzle" },
  { title: "Evaluación", to: "/evaluacion", icon: "mdi-shield-check" },
  { title: "Créditos", to: "/creditos", icon: "mdi-account-group" },
];
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.floating-nav {
  background: rgba(15, 23, 42, 0.85) !important;
  backdrop-filter: blur(25px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5) !important;
}

.progress-widget {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 100;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.progress-widget:hover {
  transform: scale(1.05) translateY(-5px);
}

.z-1 {
  z-index: 1;
}

.nav-btn {
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0 16px;
}

.nav-btn:hover:not(:disabled) {
  background-color: rgba(245, 158, 11, 0.2);
  transform: translateY(-2px);
  color: #fcd34d !important;
}

.v-btn--active {
  background-color: rgba(245, 158, 11, 0.25);
  color: #f59e0b !important;
}
</style>
