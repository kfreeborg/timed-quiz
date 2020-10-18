var startButtonEl = document.getElementById("start-btn");
var nextButtonEl = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer-buttons");
//var choiceEl = Array.from(document.getElementsByClassName("choice"));
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
  nextQuestion();
};

// timer

function nextQuestion() {
  var node = document.getElementById("answer-buttons");
  node.innerHTML = "";
  showQuestion(currentQuestion);
  // nextButtonEl.classList.add("hide");
};

//answer

function showQuestion() {
  questionCounter += 1;
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  questionEl.innerText = currentQuestion.ques;
  console.log(questionCounter)

  currentQuestion.options.forEach((option) => {

    var button = document.createElement("button");
    button.textContent = option;
    button.classList.add("btn");
    answerEl.appendChild(button);

    if (availableQuestions.length === 0) {
      console.log("end");

    }



    button.addEventListener("click", (e) => {


      // acceptingAnswers = true;
      // if (!acceptingAnswers) return;

      // acceptingAnswers = false;
      // var selectedChoice = e.target;
      // var selectedAnswer = selectedChoice.dataset.answer;
      nextQuestion();
    });
  });
};


function selectAnswer() {
  // if
  // var selectedButton = event.target;
  // var correct = selectedButton.dataset.correct;
  // setStatusClass(document.body, correct);
};



// highscore

var questions = [
  {
    ques: "What is JavaScript?1",
    options: ["answer 1", "answer 2", "answer 3", "answer 4"],
    answer: "answer 1"
  },
  {
    ques: "What is JavaScript?2",
    options: ["answer 5", "answer 6", "answer 7", "answer 8"],
    answer: "answer 7"
  },
  {
    ques: "What is JavaScript?3",
    options: ["answer 9", "answer 10", "answer 11", "answer 12"],
    answer: "answer 12"
  },
  {
    ques: "What is JavaScript?4",
    options: ["answer 13", "answer 14", "answer 15", "answer 16"],
    answer: "answer 14"
  },
  {
    ques: "What is JavaScript?5",
    options: ["answer 17", "answer 18", "answer 19", "answer 20"],
    answer: "answer 17"
  }
];