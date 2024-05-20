let winningBox;
let isGameOver = false;

function startGame() {
  winningBox = Math.floor(Math.random() * 9);
}

function guess(boxIndex) {
  if (isGameOver) return;

  const result = document.getElementById("result");
  const emojis = ["💎", "🍰", "🍫", "🍕", "🍔", "🍟", "🍉", "🎁", "🍇"];
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box, index) => {
    if (index === winningBox) {
      box.textContent = emojis[0]; // Reveal gem emoji in the winning box
    } else {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      box.textContent = randomEmoji; // Display random emoji in other boxes
    }
  });

  if (boxIndex === winningBox) {
    result.textContent = "Congratulations! You found the gem! 💎";
    document.body.classList.add("win-background");
  } else {
    result.textContent = "Oops! The gem was in another box! Try again!";
  }

  isGameOver = true;
}

function reset() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.textContent = ""; // Clear emojis
  });

  const result = document.getElementById("result");
  result.textContent = "";

  document.body.classList.remove("win-background"); // Remove winning background
  isGameOver = false;
  startGame();
}

startGame();
