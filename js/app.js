// Módulo de Orden Secuencial
const steps = document.querySelectorAll("#steps li");
const feedback = document.getElementById("feedback");

// Función para manejar el inicio y fin del arrastre
steps.forEach((step) => {
  step.addEventListener("dragstart", () => {
    step.classList.add("dragging");
  });

  step.addEventListener("dragend", () => {
    step.classList.remove("dragging");
  });
});

document.getElementById("check-order").addEventListener("click", () => {
  const currentOrder = Array.from(document.querySelectorAll("#steps li"))
    .map(step => step.textContent);

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

// Módulo de Preguntas de Opción Múltiple
document.getElementById("submit-questions").addEventListener("click", () => {
  const respuestas = {
    pregunta1: document.querySelector('input[name="pregunta1"]:checked'),
    pregunta2: document.querySelector('input[name="pregunta2"]:checked'),
    pregunta3: document.querySelector('input[name="pregunta3"]:checked'),
    pregunta4: document.querySelector('input[name="pregunta4"]:checked')
  };

  let resultado = "Respuestas seleccionadas:\n";

  for (let pregunta in respuestas) {
    if (respuestas[pregunta]) {
      resultado += `${pregunta}: ${respuestas[pregunta].value}\n`;
    } else {
      resultado += `${pregunta}: No respondida\n`;
    }
  }

  alert(resultado); // Muestra las respuestas seleccionadas
});
