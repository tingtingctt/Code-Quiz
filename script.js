var timeEl = document.querySelector("#time");
var scoresEl = document.querySelector("#scores");
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var secondsLeft = 75;

showStart();
showTime ();


function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

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
  startBtn.setAttribute("style", "margin-left: 150px");
  startEl.appendChild(startBtn);

}

function showQuiz1() {
  startEl.innerHTML = "";

  var quizH2 = document.createElement("h2");
  var lineBreak = document.createElement("br");
  quizH2.textContent = "Commonly used data types DO NOT include:";
  quizEl.appendChild(quizH2);
  quizEl.appendChild(lineBreak);

  var quizBtn1 = document.createElement("button");
  quizBtn1.textContent = "1. strings";
  quizEl.appendChild(quizBtn1);
  quizEl.appendChild(lineBreak);

  var quizBtn2 = document.createElement("button");
  quizBtn2.textContent = "2. booleans";
  quizEl.appendChild(quizBtn2);
  quizEl.appendChild(lineBreak);

  var quizBtn3 = document.createElement("button");
  quizBtn3.textContent = "3. alerts";
  quizBtn3.setAttribute ("class", "correct");
  quizEl.appendChild(quizBtn3);
  quizEl.appendChild(lineBreak);

  var quizBtn4 = document.createElement("button");
  quizBtn4.textContent = "4. numbers";
  quizEl.appendChild(quizBtn4);
}


function showQuiz2() {
  quizEl.innerHTML = "";

  var quizH2 = document.createElement("h2");
  var lineBreak = document.createElement("br");
  quizH2.textContent = "The condition in an if/else statement is enclosed within:";
  quizEl.appendChild(quizH2);
  quizEl.appendChild(lineBreak);

  var quizBtn1 = document.createElement("button");
  quizBtn1.textContent = "1. quotes";
  quizEl.appendChild(quizBtn1);
  quizEl.appendChild(lineBreak);

  var quizBtn2 = document.createElement("button");
  quizBtn2.textContent = "2. curly brackets";
  quizEl.appendChild(quizBtn2);
  quizEl.appendChild(lineBreak);

  var quizBtn3 = document.createElement("button");
  quizBtn3.textContent = "3. parenthesis";
  quizBtn3.setAttribute ("class", "correct");
  quizEl.appendChild(quizBtn3);
  quizEl.appendChild(lineBreak);

  var quizBtn4 = document.createElement("button");
  quizBtn4.textContent = "4. square brackets";
  quizEl.appendChild(quizBtn4);
}

function showScores() {
  scoresEl.setAttribute("display", "block");
}

function hideScores() {
  scoresEl.setAttribute("display", "none");
}

function showTime() {
  timeEl.textContent = "Time: " + secondsLeft;
}

function hideTime() {
  timeEl.innerHTML = "";
}


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
  if (answer.matches("button") && answer.getAttribute("class") !== "correct") {
    var wrongMsg = document.createElement("p");
    var line = document.createElement("hr");
    wrongMsg.textContent = "Wrong! You lost 10 seconds.";
    wrongMsg.setAttribute ("style", "color: grey");
    line.setAttribute ("style", "color: grey");
    quizEl.appendChild(line);
    quizEl.appendChild(wrongMsg);
  }
  
  setTimeout (showQuiz2, 1000);
});