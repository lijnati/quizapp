const questions = [
  {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyper Transfer Markup Language", "High Level Text Markup Language"],
      correctAnswer: 0
  },
  {
    question: "Which of the following is a CSS preprocessor?",
    options: ["SASS", "Ruby", "JavaScript", "Java"],
    correctAnswer: 0
  },
  {
    question: " What is the purpose of JavaScript?",
    options: ["Styling web pages", "Creating interactive elements on web pages", "Managing databases", "Server-side scripting"],
    correctAnswer: 1
  },
  {
    question: "Which of the following is NOT a commonly used version control system in web development?",
    options: ["Git", "Subversion (SVN)", "Mercurial", "Ruby on Rails"],
    correctAnswer: 3
  },
  // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function showQuestion() {
  const currentQuizQuestion = questions[currentQuestion];
  questionElement.innerText = currentQuizQuestion.question;

  optionsContainer.innerHTML = "";
  currentQuizQuestion.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.innerText = option;
      optionElement.addEventListener("click", () => checkAnswer(index));
      optionsContainer.appendChild(optionElement);
  });
}

function checkAnswer(selectedOption) {
  const correctOption = questions[currentQuestion].correctAnswer;
  if (selectedOption === correctOption) {
      score++;
  }
}

function showResult() {
  resultElement.innerText = `You scored ${score} out of ${questions.length}!`;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
      showQuestion();
  } else {
      showResult();
      nextButton.style.display = "none";
  }
}

nextButton.addEventListener("click", nextQuestion);

showQuestion();