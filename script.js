let signalGiven = false;
let gameOver = false;

document.getElementById("startBtn").addEventListener("click", startDuel);

function startDuel() {
  signalGiven = false;
  gameOver = false;
  document.getElementById("message").textContent = "Get ready...";
  document.getElementById("signal").textContent = "Ready...";

  let randomTime = Math.floor(Math.random() * 3000) + 2000; // Random time between 2-5 seconds
  setTimeout(() => {
    signalGiven = true;
    document.getElementById("signal").textContent = "GO!";
  }, randomTime);
}

window.addEventListener("keydown", (e) => {
  if (gameOver) return;

  if (signalGiven) {
    if (e.key === "a") {
      endDuel("Player 1 wins!");
    } else if (e.key === "l") {
      endDuel("Player 2 wins!");
    }
  } else {
    if (e.key === "a") {
      endDuel("Player 1 shot too early! Player 2 wins!");
    } else if (e.key === "l") {
      endDuel("Player 2 shot too early! Player 1 wins!");
    }
  }
});

function endDuel(message) {
  gameOver = true;
  document.getElementById("message").textContent = message;
}
