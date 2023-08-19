const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const buttonSound = document.getElementById('button-sound');
    const btnSound = document.getElementById('btn-sound');

    function checkGuess() {
      const guess = parseInt(document.getElementById('guess').value);
      const resultMessage = document.getElementById('result');

      if (isNaN(guess) || guess < 1 || guess > 100) {
        resultMessage.textContent = 'Please enter a valid number between 1 and 100.';
        return;
      }

      attempts++;

      if (guess === secretNumber) {
        resultMessage.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
        // Play the button sound when the game is won
        playSound();

        congratulationGif.style.display = 'block';
      } else if (guess < secretNumber) {
        resultMessage.textContent = 'Try a higher number.';
        playmusic();
      } else {
        resultMessage.textContent = 'Try a lower number.';
        playmusic();
      }
    }

    function playSound() {
      buttonSound.play();
    }

    function playmusic() {
      btnSound.play()
    }