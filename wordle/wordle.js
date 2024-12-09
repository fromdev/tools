let targetWord = words[Math.floor(Math.random() * words.length)];
let currentGuess = "";
let attempts = 0;

const grid = document.getElementById("grid");
const keyboard = document.getElementById("keyboard");
const message = document.getElementById("message");
const newGameBtn = document.getElementById("new-game");

function initializeGrid() {
  grid.innerHTML = "";
  for (let i = 0; i < 30; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    grid.appendChild(tile);
  }
}

function initializeKeyboard() {
  const keys = "qwertyuiopasdfghjklzxcvbnm".split("");
  keyboard.innerHTML = "";
  keys.forEach((key) => {
    const keyBtn = document.createElement("button");
    keyBtn.classList.add("key");
    keyBtn.textContent = key;
    keyBtn.setAttribute("data-key", key);
    keyBtn.addEventListener("click", () => handleInput(key));
    keyboard.appendChild(keyBtn);
  });

  const enterKey = document.createElement("button");
  enterKey.classList.add("key");
  enterKey.textContent = "Enter";
  enterKey.addEventListener("click", handleSubmit);
  keyboard.appendChild(enterKey);

  const backspaceKey = document.createElement("button");
  backspaceKey.classList.add("key");
  backspaceKey.textContent = "Backspace";
  backspaceKey.addEventListener("click", handleBackspace);
  keyboard.appendChild(backspaceKey);
}

function handleInput(letter) {
  if (currentGuess.length < 5) {
    currentGuess += letter;
    updateGrid();
  }
}

function handleBackspace() {
  if (currentGuess.length > 0) {
    currentGuess = currentGuess.slice(0, -1); // Remove the last letter
    updateGrid();
  }
}

function handleSubmit() {
  if (currentGuess.length !== 5) {
    setMessage("Word must be 5 letters");
    return;
  }

  if (!words.includes(currentGuess)) {
    setMessage("Invalid word");
    return;
  }

  checkGuess();
  currentGuess = "";
  attempts++;

  if (currentGuess === targetWord) {
    setMessage("You Win!");
  } else if (attempts === 6) {
    setMessage(`Game Over! The word was: ${targetWord}`);
  }
}

function updateGrid() {
  const tiles = document.querySelectorAll(".tile");
  const startIdx = attempts * 5;
  for (let i = 0; i < 5; i++) {
    tiles[startIdx + i].textContent = currentGuess[i] || ""; // Clear unused tiles
  }
}

function checkGuess() {
  const tiles = document.querySelectorAll(".tile");
  currentGuess.split("").forEach((letter, index) => {
    const tile = tiles[attempts * 5 + index];
    const key = document.querySelector(`[data-key="${letter}"]`);

    if (letter === targetWord[index]) {
      tile.classList.add("correct");
      updateKeyboardColor(key, "correct");
    } else if (targetWord.includes(letter)) {
      tile.classList.add("present");
      updateKeyboardColor(key, "present");
    } else {
      tile.classList.add("absent");
      updateKeyboardColor(key, "absent");
    }
  });
}

function updateKeyboardColor(key, status) {
  // Update the keyboard key's color only if the new status is "better"
  if (key.classList.contains("correct")) return; // Already correct
  if (status === "correct") {
    key.className = "key correct";
  } else if (status === "present" && !key.classList.contains("correct")) {
    key.className = "key present";
  } else if (status === "absent" && !key.classList.contains("correct") && !key.classList.contains("present")) {
    key.className = "key absent";
  }
}

function setMessage(text) {
  message.textContent = text;
}

newGameBtn.addEventListener("click", startNewGame);

function startNewGame() {
  targetWord = words[Math.floor(Math.random() * words.length)];
  currentGuess = "";
  attempts = 0;
  setMessage("");
  initializeGrid();
  initializeKeyboard();
}

// Add event listener for direct keyboard input
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSubmit();
  } else if (event.key === "Backspace") {
    handleBackspace();
  } else if (/^[a-zA-Z]$/.test(event.key)) {
    handleInput(event.key.toLowerCase());
  }
});

initializeGrid();
initializeKeyboard();
