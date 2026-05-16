<template>
  <div class="page-animation">
    <v-row class="fill-height align-center py-10" justify="center">
      <v-col cols="12" md="6" class="text-center text-md-left">
        <v-chip color="primary" class="mb-6 text-subtitle-2 font-weight-black text-uppercase tracking-wide text-white" variant="flat" elevation="4">
          Geometría - Grado 9°
        </v-chip>
        <h1 class="text-h2 font-weight-black mb-6 text-white" style="line-height: 1.1; letter-spacing: -1px;">
          Descubre el Poder del <br/>
          <span class="text-primary" style="background: linear-gradient(90deg, #F59E0B, #FCD34D); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 2px 10px rgba(245,158,11,0.3));">Teorema de Pitágoras</span>
        </h1>
        <p class="text-h6 text-white opacity-80 mb-8 pr-md-8 font-weight-light">
          Un Objeto Virtual de Aprendizaje de nueva generación. Interactivo, dinámico y diseñado para que domines las matemáticas sin esfuerzo.
        </p>
        <div class="d-flex flex-column flex-sm-row gap-4 justify-center justify-md-start">
          <v-btn size="x-large" color="primary" to="/contenidos" class="rounded-pill hover-lift font-weight-black px-8" elevation="10">
            Empezar la Aventura
            <v-icon right class="ml-2">mdi-rocket-launch-outline</v-icon>
          </v-btn>
        </div>
      </v-col>
      
      <v-col cols="12" md="6" class="d-flex justify-center mt-10 mt-md-0 relative">
        <div class="hero-visual">
          <div class="triangle hover-lift"></div>
          <div class="square-c hover-lift liquid-glass-element"></div>
          <div class="square-a hover-lift liquid-glass-element"></div>
          <div class="square-b hover-lift liquid-glass-element"></div>
          <div class="formula-badge liquid-glass text-white border">
            a² + b² = c²
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="mt-16 pt-10">
      <v-col cols="12" sm="4" v-for="(feature, i) in features" :key="i">
        <v-card class="h-100 rounded-xl hover-lift liquid-glass" elevation="0">
          <v-card-text class="pa-8 text-center">
            <v-avatar :color="feature.color" size="70" class="mb-5 elevation-4" variant="flat">
              <v-icon :icon="feature.icon" size="36" color="white"></v-icon>
            </v-avatar>
            <h3 class="text-h5 font-weight-black text-white mb-3">{{ feature.title }}</h3>
            <p class="text-body-1 text-white opacity-80 font-weight-medium">{{ feature.desc }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    icon: 'mdi-brain',
    color: 'primary',
    title: 'Aprendizaje Visual',
    desc: 'Teoría explicada mediante gráficos modernos e interfaces inmersivas.'
  },
  {
    icon: 'mdi-gamepad-variant',
    color: 'info',
    title: 'Práctica Interactiva',
    desc: 'Ejercicios nativos en tiempo real para poner a prueba tu conocimiento.'
  },
  {
    icon: 'mdi-lock-check',
    color: 'success',
    title: 'Reto Final',
    desc: 'Desbloquea la evaluación al completar el 100% del progreso del curso.'
  }
])
</script>

<style scoped>
.hero-visual {
  position: relative;
  width: 320px;
  height: 320px;
  perspective: 1000px;
}

.triangle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 140px solid transparent;
  border-bottom: 180px solid #F8FAFC; /* white */
  z-index: 2;
  border-radius: 4px;
}

.liquid-glass {
  background: rgba(30, 41, 59, 0.7) !important;
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.liquid-glass-element {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.square-c {
  position: absolute;
  top: 20px;
  left: 70px;
  width: 228px;
  height: 228px;
  border: 3px dashed #F59E0B; /* primary */
  transform: rotate(52deg);
  z-index: 1;
  border-radius: 16px;
}

.square-a {
  position: absolute;
  bottom: -110px;
  left: 20px;
  width: 140px;
  height: 140px;
  border: 3px dashed #3B82F6; /* info */
  z-index: 1;
  border-radius: 12px;
}

.square-b {
  position: absolute;
  top: -20px;
  left: -150px;
  width: 180px;
  height: 180px;
  border: 3px dashed #10B981; /* success */
  z-index: 1;
  border-radius: 12px;
}

.formula-badge {
  position: absolute;
  bottom: 0;
  right: -40px;
  padding: 12px 24px;
  font-weight: 900;
  font-size: 1.5rem;
  z-index: 3;
  font-family: 'Courier New', Courier, monospace;
}

.tracking-wide {
  letter-spacing: 0.05em;
}
</style>
