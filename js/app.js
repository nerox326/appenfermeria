// Módulo de Orden Secuencial
const steps = document.querySelectorAll("#steps li");
const feedback = document.getElementById("feedback");
let order = [];

steps.forEach((step, index) => {
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
