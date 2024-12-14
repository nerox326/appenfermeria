// Módulo de Orden Secuencial
const stepsContainer = document.getElementById("steps");
const feedback = document.getElementById("feedback");

// Evento para manejar el inicio del arrastre
stepsContainer.addEventListener("dragstart", (e) => {
  e.target.classList.add("dragging");
});

// Evento para manejar el fin del arrastre
stepsContainer.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});

// Evento para manejar el arrastre sobre el contenedor
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

// Función para obtener el elemento más cercano a la posición actual
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

// Verificación del orden de las casillas
document.getElementById("check-order").addEventListener("click", () => {
  const currentOrder = Array.from(document.querySelectorAll("#steps li")).map((step) => step.textContent);

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
