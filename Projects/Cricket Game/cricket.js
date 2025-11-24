let computerChoice;
//This will generate random number between 0 to 3
let scoreStr = localStorage.getItem("score");
let score;
resetScore(scoreStr);
// Create object to store score
function resetScore(scoreStr) {
  score = JSON.parse(scoreStr) || {
    win: 0,
    lost: 0,
    tie: 0,
  };
  score.displayScore = function () {
    return `No of matches Won:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
  };
  showResult();
}

function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}

function getResult(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Ball") {
      score.win++;
      return "User Won.";
    } else if (computerMove === "Bat") {
      score.tie++;
      return `It's a tie.`;
    } else if (computerMove === "Stump") {
      score.lost++;
      return "Computer has won.";
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Ball") {
      score.tie++;
      return `It's a tie.`;
    } else if (computerMove === "Bat") {
      score.lost++;
      return `Computer has won.`;
    } else if (computerMove === "Stump") {
      score.win++;
      return "User won.";
    }
  } else if (userMove === "Stump") {
    if (computerMove === "Ball") {
      score.lost++;
      return `Computer has won.`;
    } else if (computerMove === "Bat") {
      score.win++;
      return `User Won`;
    } else if (computerMove === "Stump") {
      score.tie++;
      return `It's a tie.`;
    }
  }
}

function showResult(userMove, computerMove, result) {
  // console.log(score);
  localStorage.setItem("Score", JSON.stringify(score));
  document.querySelector("#user-move").innerText =
    userMove !== undefined ? `You have chosen ${userMove}.` : "";
  document.querySelector("#computer-move").innerText =
    computerMove !== undefined ? `Computer choice is ${computerMove}.` : "";
  document.querySelector("#result").innerText =
    result !== undefined ? result : "";
  document.querySelector("#score").innerText = `${score.displayScore()}`;
  // alert(
  //   `You have chosen ${userMove}. Computer choice is ${computerMove}

  //   ${result}

  //   ${score.displayScore()}`
  // );
}
