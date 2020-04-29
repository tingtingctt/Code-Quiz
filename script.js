var timeEl = document.querySelector("#time");
var scoresEl = document.querySelector("#scores");
var startEl = document.querySelector("#start");
var quizEl = document.querySelector(".quiz");
var secondsLeft = 75;
var quizArray = [showQuiz1, showQuiz2, showQuiz3, showQuiz4, showQuiz5, showResult];
var scores = [];


// ------------------- Show Instruction/Start Page ---------------------------------

showStart();
showTime ();

// -------------- Retrieve Highscores from local storage ------------------------

if (localStorage.getItem("scores") !== ""){
  initScores();
};

function initScores() {
  var storedScores = JSON.parse(localStorage.getItem("scores"));
  if (storedScores !== null) {
    scores = storedScores;
  }
  console.log(scores);
}

// ------------------------ Timer Interval ------------------------------------

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      showResult();
    }
    else if (quizEl.getAttribute("id") === "5") {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function showTime() {
  timeEl.textContent = "Time: " + secondsLeft;
}

function hideTime() {
  timeEl.innerHTML = "";
}

//------------------------ Instruction/Start Page ------------------------------------

function showStart() {
  var startH1 = document.createElement("h1");
  var lineBreak = document.createElement("br");
  startH1.textContent = "Coding Quiz Challenge";
  startEl.appendChild(startH1);
  startEl.appendChild(lineBreak);
  
  var startP = document.createElement("p");
  startP.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by 10 seconds!";
  startEl.appendChild(startP);
  startEl.appendChild(lineBreak);

  var startBtn = document.createElement("button");
  startBtn.textContent = "Start Quiz";
  startEl.appendChild(startBtn);
}

//------------------------ Quiz pages-----------------------------------------
// quizArray[0] - Quiz 1
function showQuiz1() {
  startEl.innerHTML = "";
  quizEl.setAttribute ("id", "1");

  var quizH2 = document.createElement("h2");
  quizH2.textContent = "Commonly used data types DO NOT include:";
  quizEl.appendChild(quizH2);

  var quizBtn1 = document.createElement("button");
  quizBtn1.textContent = "1. strings";
  quizEl.appendChild(quizBtn1);

  var quizBtn2 = document.createElement("button");
  quizBtn2.textContent = "2. booleans";
  quizEl.appendChild(quizBtn2);

  var quizBtn3 = document.createElement("button");
  quizBtn3.textContent = "3. alerts";
  quizBtn3.setAttribute ("class", "correct");
  quizEl.appendChild(quizBtn3);

  var quizBtn4 = document.createElement("button");
  quizBtn4.textContent = "4. numbers";
  quizEl.appendChild(quizBtn4);
}

// quizArray[1] - Quiz 2
function showQuiz2() {
  quizEl.innerHTML = "";
  quizEl.setAttribute ("id", "2");

  var quizH2 = document.createElement("h2");
  quizH2.textContent = "The condition in an if/else statement is enclosed within:";
  quizEl.appendChild(quizH2);

  var quizBtn1 = document.createElement("button");
  quizBtn1.textContent = "1. quotes";
  quizEl.appendChild(quizBtn1);

  var quizBtn2 = document.createElement("button");
  quizBtn2.textContent = "2. curly brackets";
  quizEl.appendChild(quizBtn2);

  var quizBtn3 = document.createElement("button");
  quizBtn3.textContent = "3. parenthesis";
  quizBtn3.setAttribute ("class", "correct");
  quizEl.appendChild(quizBtn3);

  var quizBtn4 = document.createElement("button");
  quizBtn4.textContent = "4. square brackets";
  quizEl.appendChild(quizBtn4);
}

// quizArray[2] - Quiz 3
function showQuiz3() {
  quizEl.innerHTML = "";
  quizEl.setAttribute ("id", "3");

  var quizH2 = document.createElement("h2");
  quizH2.textContent = "Arrays in JavaScript can be used to store:";
  quizEl.appendChild(quizH2);

  var quizBtn1 = document.createElement("button");
  quizBtn1.textContent = "1. numbers and strings";
  quizEl.appendChild(quizBtn1);

  var quizBtn2 = document.createElement("button");
  quizBtn2.textContent = "2. other arrays";
  quizEl.appendChild(quizBtn2);

  var quizBtn3 = document.createElement("button");
  quizBtn3.textContent = "3. booleans";
  quizEl.appendChild(quizBtn3);

  var quizBtn4 = document.createElement("button");
  quizBtn4.textContent = "4. all of the above";
  quizBtn4.setAttribute ("class", "correct");
  quizEl.appendChild(quizBtn4);
}

// quizArray[3] - Quiz 4
function showQuiz4() {
  quizEl.innerHTML = "";
  quizEl.setAttribute ("id", "4");

  var quizH2 = document.createElement("h2");
  quizH2.textContent = "String values must be enclosed within";
  quizEl.appendChild(quizH2);

  var quizBtn1 = document.createElement("button");
  quizBtn1.textContent = "1. commas";
  quizEl.appendChild(quizBtn1);

  var quizBtn2 = document.createElement("button");
  quizBtn2.textContent = "2. curly brackets";
  quizEl.appendChild(quizBtn2);

  var quizBtn3 = document.createElement("button");
  quizBtn3.textContent = "3. quotes";
  quizEl.appendChild(quizBtn3);
  quizBtn3.setAttribute ("class", "correct");

  var quizBtn4 = document.createElement("button");
  quizBtn4.textContent = "4. parenthesis";
  quizEl.appendChild(quizBtn4);
}

// quizArray[4] - Quiz 5
function showQuiz5() {
  quizEl.innerHTML = "";
  quizEl.setAttribute ("id", "5");

  var quizH2 = document.createElement("h2");
  quizH2.textContent = "A very useful tool used during developement and debugging for printing content to the debugger is:";
  quizEl.appendChild(quizH2);

  var quizBtn1 = document.createElement("button");
  quizBtn1.textContent = "1. JavaScript";
  quizEl.appendChild(quizBtn1);

  var quizBtn2 = document.createElement("button");
  quizBtn2.textContent = "2. terminal/bash";
  quizEl.appendChild(quizBtn2);

  var quizBtn3 = document.createElement("button");
  quizBtn3.textContent = "3. for loops";
  quizEl.appendChild(quizBtn3);

  var quizBtn4 = document.createElement("button");
  quizBtn4.textContent = "4. console log";
  quizBtn4.setAttribute ("class", "correct");
  quizEl.appendChild(quizBtn4);
}

// quizArray[5] - Show Result
function showResult() {
  hideTime();
  quizEl.innerHTML = "";
  quizEl.setAttribute ("id", "5");

  var quizH2 = document.createElement("h2");
  var lineBreak = document.createElement("br");
  quizH2.textContent = "All Done!";
  quizEl.appendChild(quizH2);
  quizEl.appendChild(lineBreak);

  var resultP = document.createElement("p");
  resultP.textContent = "Your final score is " + secondsLeft;
  quizEl.appendChild(resultP);

  var form = document.createElement("form");
  quizEl.appendChild(form);
  var label = document.createElement("label");
  label.textContent = "Enter initials: ";
  form.appendChild(label);
  var input = document.createElement("input");
  input.setAttribute("class", "initials")
  form.appendChild(input);
  var submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.setAttribute("class", "submit")
  form.appendChild(submitBtn);
}


// ----------------------- Event Listeners ----------------------------------

startEl.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button")) {
    showQuiz1();
    setTime();
  }
});

quizEl.addEventListener("click", function(event) {
  event.preventDefault();
  var answer = event.target;
  if (answer.matches("button") && answer.getAttribute("class") === "correct") {
    var correctMsg = document.createElement("p");
    var line = document.createElement("hr");
    correctMsg.textContent = "Correct!";
    correctMsg.setAttribute ("style", "color: grey");
    line.setAttribute ("style", "color: grey");
    quizEl.appendChild(line);
    quizEl.appendChild(correctMsg);
  }

  else if (answer.matches("button") && answer.getAttribute("class") === "submit") {
    var input = document.querySelector(".initials");
    scores.push(input.value + "-" + secondsLeft);
    localStorage.setItem("scores", JSON.stringify(scores));
    console.log(scores);
    window.location.href = "./scores.html";
  }

  else if (answer.matches("button") && answer.getAttribute("class") !== "submit" && answer.getAttribute("class") !== "correct") {
    var wrongMsg = document.createElement("p");
    var line = document.createElement("hr");
    wrongMsg.textContent = "Wrong! You lost 10 seconds.";
    wrongMsg.setAttribute ("style", "color: grey");
    line.setAttribute ("style", "color: grey");
    quizEl.appendChild(line);
    quizEl.appendChild(wrongMsg);
    secondsLeft = secondsLeft - 10;
  }
  
  var i = answer.parentElement.getAttribute("id");
  setTimeout (quizArray[i], 1000);
});