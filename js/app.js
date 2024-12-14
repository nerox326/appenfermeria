// Verificar respuestas del quiz
const quizForm = document.getElementById("quiz-form");
const quizFeedback = document.getElementById("quiz-feedback");
document.getElementById("check-quiz").addEventListener("click", () => {
const answers = {
q1: "a",
q2: "a",
q3: "a",
q4: "c",
};
let score = 0;
for (const [question, correctAnswer] of Object.entries(answers)) {
const userAnswer = quizForm[question].value;
if (userAnswer === correctAnswer) {
score++;
}
}
quizFeedback.textContent = Tu puntuación es ${score} de ${Object.keys(answers).length};
});

