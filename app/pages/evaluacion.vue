<template>
  <div class="page-animation">
    <div class="mb-10 text-center text-md-left">
      <v-chip
        color="warning"
        variant="flat"
        class="mb-4 font-weight-bold"
        elevation="2"
        >Módulo 4</v-chip
      >
      <h1 class="text-h2 font-weight-black text-white mb-2">
        Evaluación Final
      </h1>
      <p class="text-h6 text-white opacity-70 font-weight-light">
        Demuestra lo que has aprendido completando este reto.
      </p>
    </div>

    <!-- Locked State -->
    <v-card
      v-if="progressPercent < 100"
      class="rounded-xl liquid-card elevation-0 text-center py-16 px-6"
    >
      <v-icon size="100" color="error" class="mb-6 opacity-80"
        >mdi-lock-outline</v-icon
      >
      <h2 class="text-h3 font-weight-black text-white mb-4">
        Evaluación Bloqueada
      </h2>
      <p class="text-h6 text-white opacity-80 mb-8 max-w-md mx-auto">
        Debes completar el 100% del material del curso (Contenidos, Recursos,
        Actividades) para poder presentar la evaluación. Has completado el
        {{ progressPercent }}%.
      </p>
      <v-progress-circular
        :model-value="progressPercent"
        color="primary"
        size="120"
        width="12"
        class="mb-8"
      >
        <span class="text-h5 font-weight-bold text-white"
          >{{ progressPercent }}%</span
        >
      </v-progress-circular>
      <div>
        <v-btn
          color="primary"
          size="x-large"
          to="/contenidos"
          class="rounded-pill font-weight-bold hover-lift px-8"
          >Ir a completar el curso</v-btn
        >
      </div>
    </v-card>

    <!-- Quiz State -->
    <v-card
      class="rounded-xl liquid-card elevation-0 overflow-hidden"
      v-else-if="!showResults"
    >
      <v-toolbar color="warning" class="px-6 py-2" height="15">
        <v-progress-linear
          :model-value="(currentQuestion / questions.length) * 100"
          color="white"
          height="15"
          class="w-100"
          striped
          animated
        ></v-progress-linear>
      </v-toolbar>

      <v-card-text class="pa-6 pa-md-12">
        <div class="d-flex align-center justify-space-between mb-8">
          <v-chip
            color="warning"
            variant="tonal"
            class="font-weight-black text-uppercase tracking-wide text-white"
            >Pregunta {{ currentQuestion + 1 }} de
            {{ questions.length }}</v-chip
          >
        </div>

        <h2
          class="text-h4 font-weight-black text-white mb-6"
          style="line-height: 1.4"
        >
          {{ questions[currentQuestion].text }}
        </h2>

        <!-- Image for the question if any -->
        <div v-if="questions[currentQuestion].image" class="text-center mb-8">
          <v-img
            :src="questions[currentQuestion].image"
            max-height="300"
            contain
            class="mx-auto rounded-lg elevation-4 bg-white pa-2"
          ></v-img>
        </div>

        <!-- Multiple Choice Options A, B, C, D -->
        <div class="d-flex flex-column gap-4">
          <v-card
            v-for="(option, i) in questions[currentQuestion].options"
            :key="i"
            @click="answers[currentQuestion] = i"
            class="pa-6 rounded-xl border transition-swing cursor-pointer option-card"
            :class="{ 'selected-option': answers[currentQuestion] === i }"
            elevation="0"
          >
            <div class="d-flex align-center">
              <v-avatar
                :color="answers[currentQuestion] === i ? 'primary' : 'white'"
                size="40"
                class="mr-4 font-weight-black"
                :class="
                  answers[currentQuestion] === i ? 'text-white' : 'text-black'
                "
              >
                {{ ["A", "B", "C", "D"][i] }}
              </v-avatar>
              <span class="text-h6 font-weight-medium text-white">{{
                option.text
              }}</span>
              <v-spacer></v-spacer>
              <v-icon
                v-if="answers[currentQuestion] === i"
                color="primary"
                size="32"
                >mdi-check-circle</v-icon
              >
            </div>
          </v-card>
        </div>

        <div class="d-flex justify-space-between mt-12">
          <v-btn
            variant="outlined"
            color="white"
            size="large"
            @click="prevQuestion"
            :disabled="currentQuestion === 0"
            class="rounded-pill px-8 font-weight-bold"
          >
            Anterior
          </v-btn>
          <v-btn
            color="primary"
            size="large"
            @click="nextQuestion"
            v-if="currentQuestion < questions.length - 1"
            :disabled="answers[currentQuestion] === null"
            class="rounded-pill px-8 font-weight-bold hover-lift elevation-4"
          >
            Siguiente <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
          <v-btn
            color="success"
            size="large"
            @click="finishExam"
            v-if="currentQuestion === questions.length - 1"
            :disabled="answers[currentQuestion] === null"
            class="rounded-pill px-8 font-weight-black hover-lift elevation-4"
          >
            Finalizar Evaluación <v-icon right>mdi-flag-checkered</v-icon>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>

    <!-- Results Screen -->
    <v-card class="rounded-xl liquid-card elevation-0 py-16 px-6" v-else>
      <v-card-text class="text-center">
        <div class="result-icon-container mb-8">
          <v-avatar
            :color="finalScore >= 3.0 ? 'success' : 'error'"
            size="160"
            class="elevation-6"
          >
            <v-icon size="100" color="white">
              {{
                finalScore >= 3.0
                  ? "mdi-trophy-award"
                  : "mdi-alert-circle-outline"
              }}
            </v-icon>
          </v-avatar>
        </div>

        <h2 class="text-h2 font-weight-black text-white mb-4">
          {{ finalScore >= 3.0 ? "¡Aprobaste!" : "Necesitas repasar" }}
        </h2>

        <v-chip
          size="x-large"
          :color="finalScore >= 3.0 ? 'success' : 'error'"
          class="font-weight-black text-h4 mb-8 pa-6"
          variant="tonal"
        >
          Nota Final: {{ finalScore.toFixed(1) }} / 5.0
        </v-chip>

        <p class="text-h6 opacity-80 text-white mb-12 max-w-md mx-auto">
          Respondiste correctamente {{ correctAnswersCount }} de
          {{ questions.length }} preguntas.
        </p>

        <div class="d-flex flex-wrap justify-center gap-6 mb-12">
          <v-btn
            variant="outlined"
            color="white"
            size="x-large"
            @click="resetExam"
            class="rounded-pill px-8 font-weight-bold hover-lift"
            >Reintentar Evaluación</v-btn
          >
          <v-btn
            color="primary"
            size="x-large"
            to="/creditos"
            class="rounded-pill px-8 font-weight-black hover-lift elevation-4"
          >
            Ver Créditos Finales <v-icon right class="ml-2">mdi-star</v-icon>
          </v-btn>
        </div>

        <v-divider class="mb-8 border-opacity-25" color="white"></v-divider>

        <!-- Retroalimentación -->
        <h3 class="text-h4 font-weight-black text-white mb-8 text-left">
          Retroalimentación Detallada
        </h3>

        <v-expansion-panels variant="accordion">
          <v-expansion-panel
            v-for="(q, index) in questions"
            :key="index"
            class="mb-2 border rounded-lg feedback-panel"
          >
            <v-expansion-panel-title class="font-weight-bold text-white">
              <v-icon
                :color="isAnswerCorrect(index) ? 'success' : 'error'"
                class="mr-4"
              >
                {{
                  isAnswerCorrect(index)
                    ? "mdi-check-circle"
                    : "mdi-close-circle"
                }}
              </v-icon>
              Pregunta {{ index + 1 }}
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text-left pa-4">
              <p class="font-weight-bold mb-2 text-white">{{ q.text }}</p>
              <div class="mb-4">
                <p class="mb-1 text-white opacity-80">
                  <span class="font-weight-bold">Tu respuesta:</span>
                  {{ getOptionText(q, answers[index]) }}
                </p>
                <p class="text-success font-weight-bold">
                  <span class="font-weight-bold">Respuesta correcta:</span>
                  {{ getOptionText(q, getCorrectOptionIndex(q)) }}
                </p>
              </div>
              <v-alert
                type="info"
                variant="tonal"
                class="text-body-2 font-weight-bold rounded-xl"
              >
                {{ q.feedback }}
              </v-alert>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useState } from "#app";

const progress = useState("progress");

const progressPercent = computed(() => {
  if (!progress.value) return 0;
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

const currentQuestion = ref(0);
const answers = ref(new Array(20).fill(null));
const showResults = ref(false);

const questions = [
  {
    text: "¿En qué tipo de triángulos es aplicable el Teorema de Pitágoras?",
    image: "/right_triangle_diagram_1778955834882.png",
    options: [
      {
        text: "En triángulos equiláteros (todos los lados iguales)",
        correct: false,
      },
      { text: "En cualquier tipo de polígono de tres lados", correct: false },
      {
        text: "En triángulos rectángulos (que tienen un ángulo de 90°)",
        correct: true,
      },
      { text: "En triángulos isósceles", correct: false },
    ],
    feedback:
      "El teorema de Pitágoras SOLO se puede aplicar a triángulos que poseen un ángulo recto (90 grados).",
  },
  {
    text: "Identifica visualmente cuál es la fórmula correcta observando este triángulo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Pythagorean.svg",
    options: [
      { text: "a + b = c", correct: false },
      { text: "a² + b² = c²", correct: true },
      { text: "c² - a² = b", correct: false },
      { text: "a² * b² = c²", correct: false },
    ],
    feedback:
      "El área de los cuadrados construidos sobre los catetos (a y b) equivale al área del cuadrado construido sobre la hipotenusa (c).",
  },
  {
    text: "Un arquitecto diseña una rampa. Si la base mide 4 metros y la altura 3 metros, ¿cuánto medirá la longitud de la rampa?",
    options: [
      { text: "5 metros", correct: true },
      { text: "7 metros", correct: false },
      { text: "12 metros", correct: false },
      { text: "6 metros", correct: false },
    ],
    feedback:
      "Aplicando el teorema: c² = 3² + 4² = 9 + 16 = 25. La raíz cuadrada de 25 es 5.",
  },
  {
    text: "¿Cómo se llama el lado más largo de un triángulo rectángulo?",
    options: [
      { text: "Cateto Mayor", correct: false },
      { text: "Base", correct: false },
      { text: "Diagonal", correct: false },
      { text: "Hipotenusa", correct: true },
    ],
    feedback:
      "La hipotenusa siempre es el lado de mayor longitud y se encuentra opuesto al ángulo recto.",
  },
  {
    text: "Si la hipotenusa de un triángulo rectángulo mide 10 cm y un cateto mide 6 cm, ¿cuánto mide el otro cateto?",
    options: [
      { text: "4 cm", correct: false },
      { text: "8 cm", correct: true },
      { text: "16 cm", correct: false },
      { text: "64 cm", correct: false },
    ],
    feedback: "b² = c² - a² -> b² = 100 - 36 = 64. La raíz de 64 es 8.",
  },
  {
    text: "¿Quién es considerado el creador o descubridor formal de este teorema en la antigua Grecia?",
    options: [
      { text: "Tales de Mileto", correct: false },
      { text: "Pitágoras de Samos", correct: true },
      { text: "Euclides", correct: false },
      { text: "Arquímedes", correct: false },
    ],
    feedback:
      "Aunque civilizaciones anteriores ya lo usaban empíricamente, se le atribuye a la escuela pitagórica su primera demostración formal.",
  },
  {
    text: "El Teorema de Pitágoras se usa para calcular la distancia entre dos puntos en un plano cartesiano.",
    options: [
      { text: "Verdadero", correct: true },
      { text: "Falso", correct: false },
      { text: "Solo si los puntos están en el mismo eje", correct: false },
      { text: "Solo en trigonometría esférica", correct: false },
    ],
    feedback:
      "Correcto, la fórmula de la distancia entre dos puntos se deriva directamente del teorema de Pitágoras.",
  },
  {
    text: "Si tienes un triángulo de lados 5, 12 y 13. ¿Es un triángulo rectángulo?",
    options: [
      { text: "No, porque los lados deben ser pares", correct: false },
      { text: "Sí, porque 5+12 es casi 13", correct: false },
      { text: "Sí, porque 5² + 12² = 13²", correct: true },
      { text: "No, porque 13 no es múltiplo de 5", correct: false },
    ],
    feedback:
      'A esto se le conoce como una "Terna Pitagórica". 25 + 144 = 169.',
  },
  {
    text: "¿Cómo se llaman los dos lados que forman el ángulo de 90 grados en un triángulo rectángulo?",
    options: [
      { text: "Hipotenusas", correct: false },
      { text: "Aristas", correct: false },
      { text: "Diagonales", correct: false },
      { text: "Catetos", correct: true },
    ],
    feedback:
      "Se denominan catetos (cateto opuesto y cateto adyacente según el ángulo de referencia).",
  },
  {
    text: "¿Cuál de las siguientes NO es una terna pitagórica?",
    options: [
      { text: "3, 4, 5", correct: false },
      { text: "4, 5, 6", correct: true },
      { text: "5, 12, 13", correct: false },
      { text: "6, 8, 10", correct: false },
    ],
    feedback:
      "4² + 5² = 16 + 25 = 41. Pero 6² = 36. Como 41 ≠ 36, no es una terna pitagórica.",
  },
  {
    text: "Si dos catetos miden lo mismo (por ejemplo, a=1 y b=1), ¿cuánto mide la hipotenusa?",
    options: [
      { text: "2", correct: false },
      { text: "Raíz de 2 (√2)", correct: true },
      { text: "1", correct: false },
      { text: "0.5", correct: false },
    ],
    feedback: "c² = 1² + 1² = 2. Por tanto c = √2.",
  },
  {
    text: "Un árbol proyecta una sombra de 15m. Si la distancia desde la punta de la sombra hasta la cima del árbol es de 17m, ¿cuál es la altura del árbol?",
    image: "/tree_shadow_math_1778956309396.png",
    options: [
      { text: "8m", correct: true },
      { text: "10m", correct: false },
      { text: "12m", correct: false },
      { text: "20m", correct: false },
    ],
    feedback: "a² = c² - b² -> a² = 17² - 15² = 289 - 225 = 64. Altura = 8m.",
  },
  {
    text: "Completa la frase: El _________ de la hipotenusa es igual a la suma de los cuadrados de los catetos.",
    options: [
      { text: "Cubo", correct: false },
      { text: "Doble", correct: false },
      { text: "Cuadrado", correct: true },
      { text: "Triple", correct: false },
    ],
    feedback: "La fórmula es c elevado al cuadrado.",
  },
  {
    text: "¿Se puede aplicar el teorema de Pitágoras en un cuadrado?",
    options: [
      { text: "No, porque un cuadrado no es un triángulo", correct: false },
      { text: "Solo en el perímetro", correct: false },
      {
        text: "Sí, trazando una diagonal se forman dos triángulos rectángulos",
        correct: true,
      },
      { text: "Sí, pero solo para calcular su área", correct: false },
    ],
    feedback:
      "La diagonal del cuadrado actúa como la hipotenusa de un triángulo rectángulo cuyos catetos son los lados del cuadrado.",
  },
  {
    text: "Si la hipotenusa c es igual a la suma de los catetos (c = a + b), ¿qué forma tiene el triángulo?",
    options: [
      { text: "Ese triángulo no puede existir (línea recta)", correct: true },
      { text: "Equilátero", correct: false },
      { text: "Isósceles", correct: false },
      { text: "Rectángulo", correct: false },
    ],
    feedback:
      "Por desigualdad triangular, la suma de dos lados siempre debe ser estrictamente mayor que el tercer lado para formar un triángulo.",
  },
  {
    text: "La civilización de los ____________ también conocía y usaba este concepto matemático siglos antes que Pitágoras.",
    options: [
      { text: "Vikingos", correct: false },
      { text: "Babilonios", correct: true },
      { text: "Celtas", correct: false },
      { text: "Incas", correct: false },
    ],
    feedback:
      "Hay tablillas babilónicas antiguas que demuestran el conocimiento de ternas pitagóricas.",
  },
  {
    text: "En la navegación, ¿para qué sirve el Teorema de Pitágoras?",
    options: [
      { text: "Para calcular el peso del barco", correct: false },
      { text: "Para calcular el tiempo de viaje solamente", correct: false },
      { text: "Para predecir el clima", correct: false },
      {
        text: "Para encontrar la distancia más corta (línea recta) entre dos puntos",
        correct: true,
      },
    ],
    feedback:
      "Se usa constantemente en la navegación y el trazado de rutas para encontrar distancias directas.",
  },
  {
    text: "Si los catetos miden 30 cm y 40 cm, la hipotenusa mide 50 cm.",
    options: [
      { text: "Verdadero", correct: true },
      { text: "Falso", correct: false },
      { text: "Faltan datos", correct: false },
      { text: "La hipotenusa sería 70 cm", correct: false },
    ],
    feedback: "Es un múltiplo de la terna 3, 4, 5 (multiplicado por 10).",
  },
  {
    text: "Un monitor de 50 pulgadas (hipotenusa) tiene un ancho de 40 pulgadas. ¿Cuál es su altura en pulgadas?",
    image: "/monitor_diagonal_math_1778956696770.png",
    options: [
      { text: "30 pulgadas", correct: true },
      { text: "20 pulgadas", correct: false },
      { text: "35 pulgadas", correct: false },
      { text: "45 pulgadas", correct: false },
    ],
    feedback:
      "El tamaño de las pantallas se mide por su diagonal. Es la terna 3,4,5 multiplicada por 10. Altura = 30.",
  },
  {
    text: "¿Qué fórmula se deriva del teorema para despejar un cateto (a)?",
    options: [
      { text: "a = √(b² - c²)", correct: false },
      { text: "a = √(c² - b²)", correct: true },
      { text: "a = c + b", correct: false },
      { text: "a = c² + b²", correct: false },
    ],
    feedback:
      "Para hallar un cateto, a la hipotenusa al cuadrado se le resta el otro cateto al cuadrado, y a todo se le saca raíz.",
  },
];

const nextQuestion = () => {
  if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value++;
  }
};

const prevQuestion = () => {
  if (currentQuestion.value > 0) {
    currentQuestion.value--;
  }
};

const isAnswerEmpty = (index) => {
  return answers.value[index] === null || answers.value[index] === undefined;
};

const finishExam = () => {
  showResults.value = true;
};

const resetExam = () => {
  answers.value = new Array(20).fill(null);
  currentQuestion.value = 0;
  showResults.value = false;
};

const isAnswerCorrect = (index) => {
  const q = questions[index];
  const ans = answers.value[index];
  return ans !== null && q.options[ans] && q.options[ans].correct;
};

const getCorrectOptionIndex = (q) => {
  return q.options.findIndex((o) => o.correct);
};

const getOptionText = (q, index) => {
  if (index === null || index === undefined || !q.options[index])
    return "Sin responder";
  return ["A)", "B)", "C)", "D)"][index] + " " + q.options[index].text;
};

const correctAnswersCount = computed(() => {
  let correct = 0;
  questions.forEach((_, index) => {
    if (isAnswerCorrect(index)) correct++;
  });
  return correct;
});

const finalScore = computed(() => {
  // Escala de 0.0 a 5.0
  return (correctAnswersCount.value / questions.length) * 5.0;
});
</script>

<style scoped>
.liquid-card {
  background: rgba(15, 23, 42, 0.95) !important;
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.6);
}

.option-card {
  background-color: rgba(2, 6, 23, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  transition: all 0.3s ease;
}

.option-card:hover {
  background-color: rgba(30, 41, 59, 0.8);
  transform: translateX(10px);
  border-color: rgba(245, 158, 11, 0.5) !important;
}

.selected-option {
  background-color: rgba(245, 158, 11, 0.2) !important;
  border-color: #f59e0b !important;
  border-width: 2px !important;
}

.feedback-panel {
  background: rgba(15, 23, 42, 0.4) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.gap-4 {
  gap: 1rem;
}

.gap-6 {
  gap: 1.5rem;
}

.max-w-md {
  max-width: 600px;
}

.tracking-wide {
  letter-spacing: 0.1em;
}

.result-icon-container {
  animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes popIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
