const audio = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

musicToggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicToggle.textContent = "Mute Music";
  } else {
    audio.pause();
    musicToggle.textContent = "Unmute Music";
  }
});
