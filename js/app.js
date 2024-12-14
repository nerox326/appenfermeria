// Módulo de Orden Secuencial
const steps = document.querySelectorAll("#steps li");
const stepsContainer = document.getElementById("steps");
const feedback = document.getElementById("feedback");

// Añadir eventos para arrastrar y soltar
steps.forEach((step) => {
  step.addEventListener("dragstart", () => {
    step.classList.add("dragging");
  });

  step.addEventListener("dragend", () => {
    step.classList.remove("dragging");
  });
});

stepsContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
  const afterElement = getDragAfterElement(stepsContainer, e.clientY);
  const dragging = document.querySelector(".dragging");
  if (afterElement == null) {
    stepsContainer.appendChild(dragging);
  } else {
    stepsContainer.insertBefore(dragging, afterElement);
  }
});

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll("li:not(.dragging)")];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

document.getElementById("check-order").addEventListener("click", () => {
  const currentOrder = Array.from(document.querySelectorAll("#steps li"))
    .map((step) => step.textContent);

  const correctOrder = [
    "Abrir la ducha",
    "Mojarse el cuerpo",
    "Aplicar jabón",
    "Enjuagarse",
    "Secarse con una toalla"
  ];

  feedback.textContent = JSON.stringify(currentOrder) === JSON.stringify(correctOrder)
    ? "¡Correcto!"
    : "El orden no es correcto. Intenta de nuevo.";
});

// Módulo Matemático
document.getElementById("check-answer").addEventListener("click", () => {
  const respuesta = parseInt(document.getElementById("respuesta").value);
  const resultado = document.getElementById("resultado");
  
  if (respuesta === 55) {
    resultado.textContent = "¡Correcto!";
  } else {
    resultado.textContent = "Respuesta incorrecta. Intenta de nuevo.";
  }
});

document.getElementById("submit-quiz").addEventListener("click", () => {
  const respuestas = {
    q1: "a",  // Respuesta correcta para la pregunta 1
    q2: "a",  // Respuesta correcta para la pregunta 2
    q3: "a",  // Respuesta correcta para la pregunta 3
    q4: "c",  // Respuesta correcta para la pregunta 4
  };
  
  let score = 0;
  let feedback = "";

  // Verificar las respuestas
  for (let i = 1; i <= 4; i++) {
    const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === respuestas[`q${i}`]) {
      score++;
    }
  }

  // Dar retroalimentación
  if (score === 4) {
    feedback = "¡Todas las respuestas son correctas!";
  } else {
    feedback = `Has acertado ${score} de 4 respuestas.`;
  }

  document.getElementById("quiz-feedback").textContent = feedback;
});
