// Módulo de Orden Secuencial
const stepsContainer = document.getElementById("steps");
const feedback = document.getElementById("feedback");

// Agregar eventos a los elementos dentro de la lista
stepsContainer.addEventListener("dragstart", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.add("dragging");
  }
});

stepsContainer.addEventListener("dragend", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.remove("dragging");
  }
});

stepsContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
  const dragging = document.querySelector(".dragging");
  const afterElement = getDragAfterElement(stepsContainer, e.clientY);
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
  const currentOrder = Array.from(stepsContainer.querySelectorAll("li")).map((step) => step.textContent.trim());

  const correctOrder = [
    "Abrir la ducha",
    "Mojarse el cuerpo",
    "Aplicar jabón",
    "Enjuagarse",
    "Secarse con una toalla"
  ];

  feedback.textContent = JSON.stringify(currentOrder) === JSON.stringify(correctOrder)
    ? "¡Correcto! Has ordenado los pasos correctamente."
    : "El orden no es correcto. Intenta de nuevo.";
});
