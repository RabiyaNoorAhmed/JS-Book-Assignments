const friends = ["Rabiya", "Iqra", "Amna", "Saima", "Hafsa"];
const clues = ["She likes to read books.", "She loves playing video games.", "She is a great cook.", "She is a talented artist.", "She loves hiking."];
console.log(friends, clues)
const clueElement = document.getElementById("clue");
const guessInput = document.getElementById("guess");
const messageElement = document.getElementById("message");

function generateRandomClue() {
    const randomIndex = Math.floor(Math.random() * friends.length);
    clueElement.textContent = `Clue: ${clues[randomIndex]}`;
    return friends[randomIndex].toLowerCase();
}

let correctFriend = generateRandomClue();

function checkGuess() {
    const guess = guessInput.value.toLowerCase();
    if (guess === correctFriend) {
        messageElement.textContent = "Congratulations! You guessed the correct friend!";
        messageElement.style.color = "green";
        correctFriend = generateRandomClue();
    } else {
        messageElement.textContent = "Oops! Wrong guess. Try again!";
        messageElement.style.color = "red";
    }
    guessInput.value = "";
}
