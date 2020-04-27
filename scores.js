var scoreList = document.querySelector("#scoreList");
var clearScore = document.querySelector("#clear");
var scores = [];


if (localStorage.getItem("scores") !== ""){
    initScores();
    renderScores();
};


function initScores() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null) {
      scores = storedScores;
    }
    console.log(scores);
  }


  function renderScores() {
    scoreList.innerHTML = "";
  
    for (var i = 0; i < scores.length; i++) {
      var score = scores[i];
      var li = document.createElement("li");
      li.textContent = score;
      scoreList.appendChild(li);
    }
  }


  clearScore.addEventListener("click", function(event) {
    event.preventDefault();
    scores = [];
    localStorage.setItem("scores", scores);
    console.log(scores);
    renderScores();
  });