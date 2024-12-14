// Módulo Matemático
document.getElementById("check-answer").addEventListener("click", () => {
  const respuesta = parseInt(document.getElementById("respuesta").value);
  const resultado = document.getElementById("resultado");
  
  if (respuesta === 55) {
    resultado.textContent = "¡Correcto!";
  } else if (respuesta) {
    resultado.textContent = "Respuesta incorrecta. Intenta de nuevo.";
  } else {
    resultado.textContent = "Por favor, ingresa una respuesta.";
  }
});

// Preguntas de Selección Múltiple
document.getElementById("check-quiz").addEventListener("click", () => {
  const quizFeedback = document.getElementById("quiz-feedback");
  let correctas = 0;

  // Respuestas correctas
  const respuestasCorrectas = {
    pregunta1: "a", // Santiago
    pregunta2: "a", // Violeta Parra
    pregunta3: "a", // Fiestas patrias
    pregunta4: "c", // Gabriel Boric
  };

  // Recorremos las preguntas
  Object.keys(respuestasCorrectas).forEach((pregunta) => {
    const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
    if (seleccionada && seleccionada.value === respuestasCorrectas[pregunta]) {
      correctas++;
    }
  });

  // Mostrar resultados
  quizFeedback.textContent = `Respuestas correctas: ${correctas} de 4.`;
});
