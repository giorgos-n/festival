const audio = document.getElementById('background-music');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pause Music';
    playButton.classList.add('playing');
  } else {
    audio.pause();
    playButton.textContent = 'Play Music';
    playButton.classList.remove('playing');
  }
});