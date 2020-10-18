var startButtonEl = document.getElementById("start-btn");
var nextButtonEl = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer-buttons");
var yourScoreEl = document.getElementById("your-score");
var saveScoreEl = document.getElementById("save-score");
var enterInitialsEl = document.getElementById("enter-initials");
var initialsPage = document.getElementById("initials-storage");
var scoresPage = document.getElementById("score-storage");
var showScoreEl = document.getElementById("score-container");
var timerEl = document.getElementById("countdown");

startButtonEl.addEventListener("click", startQuiz);

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

function startQuiz() {
  countdown();
  startButtonEl.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];

  nextQuestion();
};

var timeLeft = 60

function countdown() {

  var timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timerEl.textContent = timeLeft;
      timeLeft -= 1;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = "Time's up!";
      clearInterval(timeInterval);
      endScore();
    }
  }, 1000)
};

function showQuestion() {

  questionCounter += 1;
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  questionEl.innerText = currentQuestion.ques;

  availableQuestions.splice(questionIndex, 1);

  currentQuestion.options.forEach((option) => {

    var button = document.createElement("button");
    button.textContent = option;
    button.classList.add("btn");
    button.classList.add("answer");
    answerEl.appendChild(button);

    button.addEventListener("click", (e) => {
      var answer = button.textContent;
      if (answer === currentQuestion.answer) {
        score += 1;
      } else {
        timeLeft -= 10;
      };
      nextQuestion();
    });
  });
  if (availableQuestions.length === 0) {
    endScore();
  };
};

function nextQuestion() {
  var node = document.getElementById("answer-buttons");
  node.innerHTML = "";
  showQuestion(currentQuestion);
};

function endScore() {
  questionContainerEl.classList.add("hide");
  yourScoreEl.classList.remove("hide");
  enterInitialsEl.classList.remove("hide");
  saveScoreEl.classList.remove("hide");
  timeLeft = 0;
  showScore();
};

function showScore() {
  document.getElementById("your-score").innerHTML = "Your score is " + score + "! Would you like to save results?";
};

saveScoreEl.addEventListener("click", function (event) {
  event.preventDefault();

  var initials = document.querySelector("#enter-initials").value;

  localStorage.setItem("store-score", score);
  localStorage.setItem("user-initials", initials);

  // return window.location.assign("./highscore.html");
  renderLastRegistered();
});

function renderLastRegistered() {
  var storeScore = localStorage.getItem("store-score");
  var initials = localStorage.getItem("user-initials");

  initialsPage.textContent = initials;
  scoresPage.textContent = storeScore;

  showScoreEl.classList.remove("hide");
  saveScoreEl.classList.add("hide");
  yourScoreEl.classList.add("hide");
  enterInitialsEl.classList.add("hide");
  // startButtonEl.classList.remove("hide");
};


var questions = [
  {
    ques: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    options: ["The User's machine running a Web browser.", "The Web server", "A central machine deep within Netscape's corporate offices", "None of the above"],
    answer: "The User's machine running a Web browser"
  },
  {
    ques: "What are variables used for in JavaScript Programs",
    options: ["Varying randomly", "Causing high-school algebra flashbacks", "Storing numbers, dates, or other values", "None of the above"],
    answer: "Storing numbers, dates, or other values"
  },
  {
    ques: "What should appear at the very end of your JavaScript <script> tag?",
    options: ["<script", "Once upon a time", "The End", "</script>"],
    answer: "</script>"
  },
  {
    ques: "What is the correct JavaScript syntax to write 'Hello World'?",
    options: ["System.out.println('Hello World')", "printIn('Hello World')", "document.write('Hello World')", "respone.write('Hello World')"],
    answer: "document.write('Hello World')"
  },
  {
    ques: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<scripting>", "<script>", "You don't"],
    answer: "<script>"
  },
  {
    ques: "What does the <noscript> tag do?",
    options: ["Enclose text to be displayed by non-JavaScript browsers.", "Sings TLC's 'I don't want no scrpits'", "Describes certain low-budget movies.", "Prevents scripts on the page from executing."],
    answer: "Enclose text to be displayed by non-JavaScript browsers."
  },
  {
    ques: "Which of the following best describes JavaScript?",
    options: ["The bane of my existance", "a scripting language precompiled in the browser.", "a compiled scripting language.", "an object-oriented scripting language."],
    answer: "an object-oriented scripting language."
  }
];