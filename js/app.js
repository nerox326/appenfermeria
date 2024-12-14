// Módulo de Orden Secuencial
document.getElementById("check-order").addEventListener("click", () => {
  const inputs = document.querySelectorAll(".step-input");
  const feedback = document.getElementById("feedback");

  // Obtener el orden actual introducido por el usuario
  const userOrder = Array.from(inputs).map(input => parseInt(input.value));
  
  // Orden correcto
  const correctOrder = [1, 2, 3, 4, 5];

  // Verificar si el orden introducido es correcto
  if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
    feedback.textContent = "¡Correcto!";
  } else {
    feedback.textContent = "El orden no es correcto. Intenta de nuevo.";
  }
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
