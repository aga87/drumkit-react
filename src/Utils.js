function playAudio(audio) {
  // Rewind to the beginning
  audio.currentTime = 0;
  audio.play();
}

export default playAudio;
