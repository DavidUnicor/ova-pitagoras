<template>
  <div class="page-animation">
    <div class="mb-10 text-center text-md-left">
      <v-chip color="primary" variant="flat" class="mb-4 font-weight-bold" elevation="2">Módulo 1</v-chip>
      <h1 class="text-h2 font-weight-black text-white mb-2">Contenidos Teóricos</h1>
      <p class="text-h6 text-white opacity-70 font-weight-light">Estudia los conceptos fundamentales para dominar el teorema.</p>
    </div>

    <!-- Content Card 1: El Triángulo Rectángulo -->
    <v-card class="rounded-xl liquid-card elevation-0 overflow-hidden mb-8">
      <v-toolbar color="primary" class="px-4 py-2" height="70">
        <v-icon size="32" color="white" class="mr-3">mdi-triangle</v-icon>
        <v-toolbar-title class="text-h5 font-weight-black text-white">1. El Triángulo Rectángulo</v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-6 pa-md-10">
        <v-row align="center">
          <v-col cols="12" md="7">
            <h3 class="text-h4 font-weight-black mb-4 text-white">¿Qué es un triángulo rectángulo?</h3>
            <p class="text-body-1 text-white opacity-90 mb-4" style="line-height: 1.8;">
              Un triángulo rectángulo es aquel que tiene un ángulo recto, es decir, un ángulo que mide exactamente <strong>90 grados (90°)</strong>. Este ángulo recto suele representarse gráficamente con un pequeño cuadrado en la esquina correspondiente.
            </p>
            <p class="text-body-1 text-white opacity-90 mb-4" style="line-height: 1.8;">
              Esta figura geométrica es la base de toda la trigonometría y es la única forma geométrica sobre la cual se puede aplicar el Teorema de Pitágoras directamente. En la vida real, encontramos triángulos rectángulos en las esquinas de una habitación, en las rampas y en la sombra que proyecta un árbol al mediodía.
            </p>
            <v-alert type="info" variant="tonal" class="rounded-xl mb-4 text-white">
              <strong class="text-white">Dato curioso:</strong> La suma de los otros dos ángulos de un triángulo rectángulo siempre es 90°, ya que la suma total de los ángulos internos de cualquier triángulo es 180°.
            </v-alert>
          </v-col>
          <v-col cols="12" md="5" class="text-center">
            <div class="pa-6 rounded-xl liquid-glass-element border d-inline-block elevation-4">
              <svg width="200" height="200" viewBox="0 0 100 100" class="drop-shadow">
                <path d="M 20 20 L 20 80 L 80 80 Z" fill="none" stroke="#3B82F6" stroke-width="3" />
                <rect x="20" y="70" width="10" height="10" fill="none" stroke="#F59E0B" stroke-width="2" />
              </svg>
              <div class="font-weight-bold text-white mt-4 text-h6">Ángulo Recto (90°)</div>
            </div>
          </v-col>
        </v-row>
        <div class="mt-8 pt-6 border-t border-opacity-25 text-right">
          <v-btn 
            :color="progress.contenidos.c1 ? 'success' : 'primary'" 
            size="large"
            variant="flat"
            class="rounded-pill font-weight-bold hover-lift text-white"
            @click="markRead('c1')"
          >
            <v-icon start>{{ progress.contenidos.c1 ? 'mdi-check-all' : 'mdi-book-open-page-variant' }}</v-icon>
            {{ progress.contenidos.c1 ? 'Leído y Entendido' : 'Marcar como Leído' }}
          </v-btn>
        </div>
      </v-card-text>
    </v-card>

    <!-- Content Card 2: Catetos e Hipotenusa -->
    <v-card class="rounded-xl liquid-card elevation-0 overflow-hidden mb-8">
      <v-toolbar color="info" class="px-4 py-2" height="70">
        <v-icon size="32" color="white" class="mr-3">mdi-vector-line</v-icon>
        <v-toolbar-title class="text-h5 font-weight-black text-white">2. Catetos e Hipotenusa</v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-6 pa-md-10">
        <h3 class="text-h4 font-weight-black mb-6 text-white">Anatomía del Triángulo</h3>
        <p class="text-body-1 text-white opacity-90 mb-6" style="line-height: 1.8;">
          Para usar el teorema, es fundamental saber identificar las partes del triángulo rectángulo:
        </p>

        <v-row class="mb-6">
          <v-col cols="12" md="6">
            <v-card class="h-100 pa-6 rounded-xl bg-transparent border border-opacity-50 hover-lift">
              <div class="d-flex align-center mb-4">
                <v-avatar color="success" size="48" class="mr-4"><v-icon color="white">mdi-arrow-right-bottom</v-icon></v-avatar>
                <h4 class="text-h5 font-weight-bold text-white">Los Catetos (a y b)</h4>
              </div>
              <p class="text-body-1 text-white opacity-80">
                Son los dos lados menores del triángulo que, juntos, <strong>forman el ángulo de 90 grados</strong>. Normalmente se les llama cateto 'a' y cateto 'b'. No importa cuál es 'a' o cuál es 'b', el resultado de la fórmula será el mismo.
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="h-100 pa-6 rounded-xl bg-transparent border border-opacity-50 hover-lift">
              <div class="d-flex align-center mb-4">
                <v-avatar color="warning" size="48" class="mr-4"><v-icon color="white">mdi-arrow-top-right</v-icon></v-avatar>
                <h4 class="text-h5 font-weight-bold text-white">La Hipotenusa (c)</h4>
              </div>
              <p class="text-body-1 text-white opacity-80">
                Es el <strong>lado más largo</strong> del triángulo rectángulo. Siempre se encuentra <strong>exactamente enfrente</strong> (opuesto) al ángulo de 90 grados. Si te equivocas identificando la hipotenusa, toda la fórmula saldrá mal.
              </p>
            </v-card>
          </v-col>
        </v-row>

        <div class="mt-8 pt-6 border-t border-opacity-25 text-right">
          <v-btn 
            :color="progress.contenidos.c2 ? 'success' : 'info'" 
            size="large"
            variant="flat"
            class="rounded-pill font-weight-bold hover-lift text-white"
            @click="markRead('c2')"
          >
            <v-icon start>{{ progress.contenidos.c2 ? 'mdi-check-all' : 'mdi-book-open-page-variant' }}</v-icon>
            {{ progress.contenidos.c2 ? 'Leído y Entendido' : 'Marcar como Leído' }}
          </v-btn>
        </div>
      </v-card-text>
    </v-card>

    <!-- Content Card 3: El Teorema y Ejemplos -->
    <v-card class="rounded-xl liquid-card elevation-0 overflow-hidden mb-8">
      <v-toolbar color="warning" class="px-4 py-2" height="70">
        <v-icon size="32" color="white" class="mr-3">mdi-function-variant</v-icon>
        <v-toolbar-title class="text-h5 font-weight-black text-white">3. El Teorema de Pitágoras</v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-6 pa-md-10">
        <h3 class="text-h4 font-weight-black mb-4 text-white">La Fórmula Mágica</h3>
        <p class="text-body-1 text-white opacity-90 mb-6" style="line-height: 1.8;">
          El Teorema de Pitágoras establece que en todo triángulo rectángulo, el cuadrado de la longitud de la hipotenusa es igual a la suma de los cuadrados de las respectivas longitudes de los catetos. Matemáticamente se expresa así:
        </p>

        <v-card color="rgba(0,0,0,0.3)" class="pa-8 rounded-xl text-center mb-8 border border-opacity-50">
          <div class="text-h2 font-weight-black text-warning font-monospace" style="letter-spacing: 4px;">
            c² = a² + b²
          </div>
        </v-card>

        <h4 class="text-h5 font-weight-bold text-white mb-4">Ejemplos Resueltos paso a paso</h4>
        
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="h-100 pa-6 rounded-xl liquid-glass-element border">
              <h5 class="text-h6 font-weight-bold text-primary mb-3">Ejemplo 1: Encontrar la Hipotenusa</h5>
              <p class="text-body-2 text-white mb-3">Un triángulo tiene catetos de 3cm y 4cm. ¿Cuánto mide su hipotenusa (c)?</p>
              <div class="pa-4 bg-black rounded-lg text-white font-monospace text-body-2">
                c² = a² + b²<br>
                c² = 3² + 4²<br>
                c² = 9 + 16<br>
                c² = 25<br>
                c = √25<br>
                <span class="text-success font-weight-bold">c = 5 cm</span>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="h-100 pa-6 rounded-xl liquid-glass-element border">
              <h5 class="text-h6 font-weight-bold text-info mb-3">Ejemplo 2: Encontrar un Cateto</h5>
              <p class="text-body-2 text-white mb-3">La hipotenusa mide 13cm y un cateto mide 5cm. ¿Cuánto mide el otro cateto (b)?</p>
              <div class="pa-4 bg-black rounded-lg text-white font-monospace text-body-2">
                13² = 5² + b²<br>
                169 = 25 + b²<br>
                b² = 169 - 25<br>
                b² = 144<br>
                b = √144<br>
                <span class="text-success font-weight-bold">b = 12 cm</span>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <div class="mt-8 pt-6 border-t border-opacity-25 text-right">
          <v-btn 
            :color="progress.contenidos.c3 ? 'success' : 'warning'" 
            size="large"
            variant="flat"
            class="rounded-pill font-weight-bold hover-lift text-white"
            @click="markRead('c3')"
          >
            <v-icon start>{{ progress.contenidos.c3 ? 'mdi-check-all' : 'mdi-book-open-page-variant' }}</v-icon>
            {{ progress.contenidos.c3 ? 'Leído y Entendido' : 'Marcar como Leído' }}
          </v-btn>
        </div>
      </v-card-text>
    </v-card>

    <div class="d-flex justify-space-between mt-12 align-center">
      <v-btn variant="text" to="/" color="white" class="font-weight-bold" prepend-icon="mdi-arrow-left">Volver a Inicio</v-btn>
      <v-btn color="primary" to="/recursos" append-icon="mdi-arrow-right" size="x-large" class="rounded-pill px-8 font-weight-bold text-secondary" elevation="4">
        Ir a Recursos
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useState } from '#app'

const progress = useState('progress')

const markRead = (id) => {
  if (progress.value && progress.value.contenidos) {
    progress.value.contenidos[id] = true
  }
}
</script>

<style scoped>
.liquid-card {
  background: rgba(15, 23, 42, 0.95) !important;
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
}

.liquid-glass-element {
  background: rgba(30, 41, 59, 0.5) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.font-monospace {
  font-family: 'Courier New', Courier, monospace;
}
</style>
