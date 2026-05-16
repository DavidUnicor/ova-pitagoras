<template>
  <div class="page-animation">
    <div class="mb-10 text-center text-md-left">
      <v-chip color="success" variant="flat" class="mb-4 font-weight-bold" elevation="2">Módulo 3</v-chip>
      <h1 class="text-h2 font-weight-black text-white mb-2">Actividades Interactivas</h1>
      <p class="text-h6 text-white opacity-80 font-weight-light">Pon en práctica lo aprendido con estas actividades dinámicas.</p>
    </div>

    <v-row>
      <!-- Activity 1: Trivia de Conceptos -->
      <v-col cols="12">
        <v-card class="rounded-xl liquid-card elevation-0 overflow-hidden mb-6">
          <v-toolbar color="primary" class="px-6 py-2" height="80">
            <v-icon size="40" color="white" class="mr-4">mdi-brain</v-icon>
            <v-toolbar-title class="text-h5 font-weight-black text-white">Actividad 1: Trivia de Pitágoras</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn 
              :color="progress.actividades.a1 ? 'success' : 'white'" 
              variant="flat" 
              class="rounded-pill font-weight-bold"
              @click="markDone('a1')"
            >
              <v-icon start>{{ progress.actividades.a1 ? 'mdi-check-circle' : 'mdi-check' }}</v-icon>
              {{ progress.actividades.a1 ? 'Completado' : 'Marcar Completado' }}
            </v-btn>
          </v-toolbar>
          
          <v-card-text class="pa-6 pa-md-10 text-center">
            <div v-if="currentTrivia < triviaQuestions.length">
              <p class="text-h5 font-weight-bold text-white mb-8">{{ triviaQuestions[currentTrivia].question }}</p>
              
              <v-row justify="center">
                <v-col cols="12" sm="6" v-for="(option, idx) in triviaQuestions[currentTrivia].options" :key="idx">
                  <v-btn 
                    block 
                    size="x-large" 
                    color="primary" 
                    class="rounded-xl font-weight-black text-white elevation-4 transition-all" 
                    variant="elevated"
                    @click="checkTrivia(idx)"
                    :disabled="triviaAnswered"
                  >
                    {{ option }}
                  </v-btn>
                </v-col>
              </v-row>
            </div>

            <div v-else class="py-10">
              <v-icon size="80" color="success" class="mb-4">mdi-trophy-outline</v-icon>
              <h2 class="text-h4 font-weight-black text-white">¡Trivia Completada!</h2>
              <p class="text-h6 text-white opacity-80 mt-2">Puntaje: {{ triviaScore }} / {{ triviaQuestions.length }}</p>
              <v-btn color="primary" class="mt-6 rounded-pill font-weight-bold" @click="resetTrivia">Reiniciar Actividad</v-btn>
            </div>

            <v-alert v-if="triviaMsg" :type="triviaMsgType" variant="tonal" class="rounded-xl font-weight-bold mt-8 pop-in max-w-md mx-auto text-left">
              {{ triviaMsg }}
            </v-alert>

            <v-progress-linear :model-value="(currentTrivia / triviaQuestions.length) * 100" color="primary" height="10" class="mt-10 rounded-pill"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Activity 2: Identificar Lados -->
      <v-col cols="12" md="6">
        <v-card class="rounded-xl liquid-card elevation-0 overflow-hidden mb-6 h-100 d-flex flex-column hover-lift">
          <v-toolbar color="info" class="px-4 py-2">
            <v-icon size="32" color="white" class="mr-3">mdi-shape-square-plus</v-icon>
            <v-toolbar-title class="text-h6 font-weight-black text-white">Actividad 2: Geometría</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="pa-6 flex-grow-1 text-center">
            <p class="text-body-1 font-weight-medium mb-6 text-white">Selecciona en el gráfico interactivo cuál es la <strong>hipotenusa</strong>.</p>
            <div class="position-relative mx-auto my-8" style="width: 200px; height: 200px;">
              <svg viewBox="0 0 100 100" class="w-100 h-100 drop-shadow">
                <!-- a -->
                <line x1="15" y1="85" x2="15" y2="15" stroke="#3B82F6" stroke-width="12" stroke-linecap="round" class="hover-path" @click="checkSide('a')"/>
                <!-- b -->
                <line x1="15" y1="85" x2="85" y2="85" stroke="#10B981" stroke-width="12" stroke-linecap="round" class="hover-path" @click="checkSide('b')"/>
                <!-- c (hipotenusa) -->
                <line x1="15" y1="15" x2="85" y2="85" stroke="#F59E0B" stroke-width="12" stroke-linecap="round" class="hover-path" @click="checkSide('c')"/>
              </svg>
            </div>
            <v-alert v-if="sideMsg" :type="sideMsgType" variant="tonal" class="rounded-xl font-weight-bold mt-4 pop-in text-white">
              {{ sideMsg }}
            </v-alert>
          </v-card-text>
          <v-card-actions class="px-6 pb-6 pt-0 mt-auto justify-end">
            <v-btn 
              :color="progress.actividades.a2 ? 'success' : 'white'" 
              variant="flat" 
              class="rounded-pill font-weight-bold"
              @click="markDone('a2')"
            >
              <v-icon start>{{ progress.actividades.a2 ? 'mdi-check-circle' : 'mdi-check' }}</v-icon>
              {{ progress.actividades.a2 ? 'Completado' : 'Marcar Completado' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Activity 3: Memorama -->
      <v-col cols="12" md="6">
        <v-card class="rounded-xl liquid-card elevation-0 overflow-hidden mb-6 h-100 d-flex flex-column hover-lift">
          <v-toolbar color="warning" class="px-4 py-2">
            <v-icon size="32" color="white" class="mr-3">mdi-cards-playing</v-icon>
            <v-toolbar-title class="text-h6 font-weight-black text-white">Actividad 3: Memorama</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="pa-4 flex-grow-1 text-center">
            <p class="text-body-2 font-weight-medium mb-4 text-white">Encuentra las 6 parejas de conceptos matemáticos.</p>
            
            <v-row class="ma-0" dense>
              <v-col cols="3" v-for="(card, index) in memoryCards" :key="index" class="pa-1">
                <v-card 
                  height="80" 
                  class="d-flex align-center justify-center cursor-pointer font-weight-bold transition-all border-lg"
                  :style="{
                    backgroundColor: card.matched ? 'rgba(76, 175, 80, 0.4)' : (card.flipped ? 'rgba(33, 150, 243, 0.4)' : 'rgba(15, 23, 42, 0.6)'),
                    borderColor: card.error ? '#F44336' : (card.matched ? '#4CAF50' : 'rgba(255, 255, 255, 0.15)')
                  }"
                  @click="flipCard(index)"
                  style="user-select: none;"
                  elevation="4"
                >
                  <span v-if="card.flipped || card.matched" class="text-white text-center px-1" style="font-size: 0.7rem; line-height: 1.1;">
                    {{ card.text }}
                  </span>
                  <v-icon v-else color="rgba(255,255,255,0.3)" size="24">mdi-help-rhombus</v-icon>
                </v-card>
              </v-col>
            </v-row>
            <div v-if="memoryWon" class="mt-4 text-success font-weight-black text-subtitle-1 pop-in">
              ¡Parejas encontradas con éxito!
            </div>
            <v-btn v-if="memoryWon" size="small" variant="text" color="primary" @click="resetMemory" class="mt-2">Jugar de nuevo</v-btn>
          </v-card-text>
          <v-card-actions class="px-6 pb-6 pt-0 mt-auto justify-end">
            <v-btn 
              :color="progress.actividades.a3 ? 'success' : 'white'" 
              variant="flat" 
              class="rounded-pill font-weight-bold"
              @click="markDone('a3')"
            >
              <v-icon start>{{ progress.actividades.a3 ? 'mdi-check-circle' : 'mdi-check' }}</v-icon>
              {{ progress.actividades.a3 ? 'Completado' : 'Marcar Completado' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Activity 4: Arrastra y Suelta -->
      <v-col cols="12">
        <v-card class="rounded-xl liquid-card elevation-0 overflow-hidden mb-6">
          <v-toolbar color="error" class="px-6 py-2">
            <v-icon size="32" color="white" class="mr-3">mdi-drag-variant</v-icon>
            <v-toolbar-title class="text-h5 font-weight-black text-white">Actividad 4: Arma la Fórmula</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn 
              :color="progress.actividades.a4 ? 'success' : 'white'" 
              variant="flat" 
              class="rounded-pill font-weight-bold"
              @click="markDone('a4')"
            >
              <v-icon start>{{ progress.actividades.a4 ? 'mdi-check-circle' : 'mdi-check' }}</v-icon>
              {{ progress.actividades.a4 ? 'Completado' : 'Marcar Completado' }}
            </v-btn>
          </v-toolbar>
          <v-card-text class="pa-10 text-center">
            <p class="text-h6 text-white mb-8">Haz clic sobre las piezas en el orden correcto para formar la fórmula: <strong>a² + b² = c²</strong></p>
            
            <div class="d-flex justify-center gap-4 flex-wrap mb-10">
              <v-chip
                v-for="(piece, i) in draggablePieces"
                :key="i"
                color="primary"
                variant="elevated"
                size="x-large"
                class="font-weight-black px-6 py-4 cursor-pointer hover-lift text-h5 elevation-4"
                @click="selectPiece(piece)"
                :disabled="piece.used"
              >
                {{ piece.text }}
              </v-chip>
            </div>

            <div class="formula-dropzone d-flex justify-center align-center gap-2 pa-6 border border-opacity-50 rounded-xl elevation-2" style="min-height: 120px; background: rgba(0,0,0,0.3);">
              <v-chip 
                v-for="(item, i) in formulaBuilder" 
                :key="i"
                color="success"
                variant="elevated"
                size="x-large"
                class="font-weight-black text-h5 elevation-4 cursor-pointer"
                @click="removePiece(i)"
              >
                {{ item.text }}
              </v-chip>
              <span v-if="formulaBuilder.length === 0" class="text-h6 opacity-50 text-white font-weight-light">Arma la fórmula aquí...</span>
            </div>

            <v-alert v-if="formulaMsg" :type="formulaMsgType" variant="tonal" class="mt-8 font-weight-bold pop-in text-left max-w-md mx-auto">
              {{ formulaMsg }}
            </v-alert>
            
            <v-btn color="secondary" variant="outlined" class="mt-6 rounded-pill mr-4" @click="resetFormula">Limpiar</v-btn>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>

    <div class="d-flex justify-space-between mt-12 align-center">
      <v-btn variant="text" to="/recursos" color="white" class="font-weight-bold" prepend-icon="mdi-arrow-left">Volver a Recursos</v-btn>
      <v-tooltip location="top" :disabled="progressPercent === 100">
        <template v-slot:activator="{ props }">
          <div v-bind="props">
            <v-btn color="primary" to="/evaluacion" append-icon="mdi-arrow-right" size="x-large" class="rounded-pill px-8 font-weight-black text-white" elevation="6" :disabled="progressPercent < 100">
              {{ progressPercent < 100 ? 'Bloqueado (' + progressPercent + '%)' : 'Ir a Evaluación Final' }}
            </v-btn>
          </div>
        </template>
        <span>Debes completar todos los contenidos, recursos y actividades ({{progressPercent}}%)</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useState } from '#app'

const progress = useState('progress')

const progressPercent = computed(() => {
  if (!progress.value) return 0
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
})

const markDone = (id) => {
  if (progress.value && progress.value.actividades) {
    progress.value.actividades[id] = true
  }
}

// Actividad 1: Trivia
const triviaQuestions = [
  {
    question: '¿A qué tipo de triángulo se aplica el Teorema de Pitágoras?',
    options: ['Equilátero', 'Isósceles', 'Rectángulo', 'Escaleno'],
    correct: 2
  },
  {
    question: '¿Cómo se llama el lado más largo del triángulo rectángulo?',
    options: ['Cateto Opuesto', 'Hipotenusa', 'Base', 'Altura'],
    correct: 1
  },
  {
    question: '¿Qué forman los catetos en un triángulo rectángulo?',
    options: ['Un ángulo de 45°', 'Un ángulo llano', 'Un ángulo de 90°', 'Una circunferencia'],
    correct: 2
  },
  {
    question: '¿Cuál es la fórmula matemática correcta del Teorema?',
    options: ['a + b = c', 'a² - b² = c²', 'c² = a² + b²', 'c = a² + b²'],
    correct: 2
  },
  {
    question: 'Si los catetos son 3 y 4, ¿cuánto vale el cuadrado de la hipotenusa (c²)?',
    options: ['7', '12', '25', '16'],
    correct: 2
  }
]
const currentTrivia = ref(0)
const triviaScore = ref(0)
const triviaMsg = ref('')
const triviaMsgType = ref('info')
const triviaAnswered = ref(false)

const checkTrivia = (idx) => {
  if (triviaAnswered.value) return
  triviaAnswered.value = true

  if (idx === triviaQuestions[currentTrivia.value].correct) {
    triviaMsg.value = '¡Excelente! Respuesta correcta.'
    triviaMsgType.value = 'success'
    triviaScore.value++
  } else {
    triviaMsg.value = 'Ups, incorrecto. Repasa los contenidos teóricos.'
    triviaMsgType.value = 'error'
  }

  setTimeout(() => {
    triviaMsg.value = ''
    triviaAnswered.value = false
    currentTrivia.value++
    if (currentTrivia.value === triviaQuestions.length) {
      markDone('a1')
    }
  }, 1500)
}

const resetTrivia = () => {
  currentTrivia.value = 0
  triviaScore.value = 0
  triviaMsg.value = ''
  triviaAnswered.value = false
}

// Actividad 2: Identificar
const sideMsg = ref('')
const sideMsgType = ref('info')

const checkSide = (side) => {
  if (side === 'c') {
    sideMsg.value = '¡Correcto! Esa es la hipotenusa (el lado más largo opuesto al ángulo recto).'
    sideMsgType.value = 'success'
  } else {
    sideMsg.value = 'Incorrecto. Ese es un cateto. Intenta con el lado naranja.'
    sideMsgType.value = 'error'
  }
}

// Actividad 3: Memorama
const cardsRaw = [
  { id: 1, pairId: 1, text: 'Hipotenusa' },
  { id: 2, pairId: 1, text: 'Lado Mayor' },
  { id: 3, pairId: 2, text: 'Catetos' },
  { id: 4, pairId: 2, text: 'Forman 90°' },
  { id: 5, pairId: 3, text: 'Fórmula' },
  { id: 6, pairId: 3, text: 'a² + b² = c²' },
  { id: 7, pairId: 4, text: 'Ángulo Recto' },
  { id: 8, pairId: 4, text: 'Mide 90°' },
  { id: 9, pairId: 5, text: 'Pitágoras' },
  { id: 10, pairId: 5, text: 'Filósofo Griego' },
  { id: 11, pairId: 6, text: 'Triángulo' },
  { id: 12, pairId: 6, text: 'Rectángulo' }
]
const memoryCards = ref([])
const flippedIndices = ref([])
const memoryWon = ref(false)

const resetMemory = () => {
  memoryCards.value = [...cardsRaw].sort(() => Math.random() - 0.5).map(c => ({...c, flipped: false, matched: false, error: false}))
  flippedIndices.value = []
  memoryWon.value = false
}
resetMemory()

const flipCard = (index) => {
  if (memoryCards.value[index].flipped || memoryCards.value[index].matched || flippedIndices.value.length === 2) return
  
  memoryCards.value[index].flipped = true
  flippedIndices.value.push(index)

  if (flippedIndices.value.length === 2) {
    const idx1 = flippedIndices.value[0]
    const idx2 = flippedIndices.value[1]
    
    if (memoryCards.value[idx1].pairId === memoryCards.value[idx2].pairId) {
      setTimeout(() => {
        memoryCards.value[idx1].matched = true
        memoryCards.value[idx2].matched = true
        flippedIndices.value = []
        checkWin()
      }, 500)
    } else {
      memoryCards.value[idx1].error = true
      memoryCards.value[idx2].error = true
      setTimeout(() => {
        memoryCards.value[idx1].flipped = false
        memoryCards.value[idx2].flipped = false
        memoryCards.value[idx1].error = false
        memoryCards.value[idx2].error = false
        flippedIndices.value = []
      }, 1000)
    }
  }
}

const checkWin = () => {
  if (memoryCards.value.every(c => c.matched)) {
    memoryWon.value = true
  }
}

// Actividad 4: Constructor
const piecesRaw = [
  { text: 'a²', used: false },
  { text: '+', used: false },
  { text: 'b²', used: false },
  { text: '=', used: false },
  { text: 'c²', used: false },
  { text: '-', used: false },
  { text: '²', used: false },
  { text: '√', used: false },
  { text: 'x', used: false }
]
const draggablePieces = ref([])
const formulaBuilder = ref([])
const formulaMsg = ref('')
const formulaMsgType = ref('info')

const resetFormula = () => {
  draggablePieces.value = [...piecesRaw].sort(() => Math.random() - 0.5).map(p => ({...p, used: false}))
  formulaBuilder.value = []
  formulaMsg.value = ''
}
resetFormula()

const selectPiece = (piece) => {
  if (piece.used) return
  piece.used = true
  formulaBuilder.value.push(piece)
  checkFormula()
}

const removePiece = (index) => {
  const p = formulaBuilder.value[index]
  const original = draggablePieces.value.find(dp => dp.text === p.text && dp.used)
  if (original) original.used = false
  formulaBuilder.value.splice(index, 1)
  formulaMsg.value = ''
}

const checkFormula = () => {
  const resultStr = formulaBuilder.value.map(p => p.text).join('')
  if (resultStr === 'a²+b²=c²' || resultStr === 'b²+a²=c²' || resultStr === 'c²=a²+b²' || resultStr === 'c²=b²+a²') {
    formulaMsg.value = '¡Excelente! Has formado la fórmula correcta.'
    formulaMsgType.value = 'success'
  } else if (formulaBuilder.value.length >= 5) {
    formulaMsg.value = 'Esa no es la fórmula correcta. Intenta de nuevo.'
    formulaMsgType.value = 'error'
  } else {
    formulaMsg.value = ''
  }
}

</script>

<style scoped>
.liquid-card {
  background: rgba(15, 23, 42, 0.95) !important;
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.6);
}

.hover-path {
  cursor: pointer;
  transition: all 0.2s ease;
}

.hover-path:hover {
  stroke-width: 16;
  filter: brightness(1.5);
}

.hover-lift {
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.hover-lift:hover {
  transform: translateY(-5px);
}

.pop-in {
  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes popIn {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.transition-all {
  transition: all 0.3s ease;
}
</style>
