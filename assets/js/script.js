var startButtonEl = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");

/*var questionEl = document.getElementById("question");
var answerEl = document.querySelector("#answer-buttons"); */
var choiceEl = Array.from(document.getElementsByClassName("choice"));
startButtonEl.addEventListener("click", startQuiz);

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

function startQuiz() {
  startButtonEl.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions,);
  nextQuestion();
};

// timer

// show question

//answer

function nextQuestion() {
  questionCounter++;
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  questionContainerEl.innerText = currentQuestion.ques;

  choiceEl.innerText = currentQuestion["option"];
};

// highscore

var questions = [
  {
    ques: "What is JavaScript?1",
    option: "answer 1",
    option: "answer 2",
    option: "answer 3",
    option: "answer 4",
    answer: "answer 2"
  },
  {
    ques: "What is JavaScript?2",
    option: "answer 1",
    option: "answer 2",
    option: "answer 3",
    option: "answer 4",
    answer: "answer 2"
  },
  {
    ques: "What is JavaScript?3",
    option: "answer 1",
    option: "answer 2",
    option: "answer 3",
    option: "answer 4",
    answer: "answer 2"
  },
  {
    ques: "What is JavaScript?4",
    option: "answer 1",
    option: "answer 2",
    option: "answer 3",
    option: "answer 4",
    answer: "answer 2"
  },
  {
    ques: "What is JavaScript?5",
    option: "answer 1",
    option: "answer 2",
    option: "answer 3",
    option: "answer 4",
    answer: "answer 2"
  }
];