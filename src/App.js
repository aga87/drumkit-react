import React from 'react';
import Drumkit from './Components/Drumkit';
import soundHiHat from './audio/hihat.wav';
import soundChip1 from './audio/chip1.wav';
import soundChip2 from './audio/chip2.wav';
import soundSnare from './audio/snare.wav';
import soundTom1 from './audio/tom1.wav';
import soundTom2 from './audio/tom2.wav';
import soundBass from './audio/bass.mp3';
import soundKick from './audio/kick.wav';

function App() {
  return (
    <Drumkit
      soundData={[
        { name: 'Hi-hat', key: 'a', audio: soundHiHat },
        { name: 'Chip1', key: 's', audio: soundChip1 },
        { name: 'Chip2', key: 'd', audio: soundChip2 },
        { name: 'Snare', key: 'f', audio: soundSnare },
        { name: 'Tom1', key: 'h', audio: soundTom1 },
        { name: 'Tom2', key: 'j', audio: soundTom2 },
        { name: 'Bass', key: 'k', audio: soundBass },
        { name: 'Kick', key: 'l', audio: soundKick },
      ]}
    />
  );
}

export default App;
