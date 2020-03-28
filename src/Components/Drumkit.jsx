import React from 'react';

import SoundBtn from './SoundBtn';

// todo:  autofocus first button on first render

// fixme: import from the public folder?

//
import soundHiHat from '../audio/hihat.wav';
import soundChip1 from '../audio/chip1.wav';
import soundChip2 from '../audio/chip2.wav';
import soundSnare from '../audio/snare.wav';
import soundTom1 from '../audio/tom1.wav';
import soundTom2 from '../audio/tom2.wav';
import soundBass from '../audio/bass.wav';
import soundKick from '../audio/kick.wav';

function Drumkit() {
  // fixme: on window

  //   const keys = ['a', 's', 'd', 'f', 'h', 'j', 'k', 'l'];

  const soundData = [
    // todo: add name
    { name: 'Hi-hat', key: 'a', audio: soundHiHat },
    { name: 'Chip1', key: 's', audio: soundChip1 },
    { name: 'Chip2', key: 'd', audio: soundChip2 },
    { name: 'Snare', key: 'f', audio: soundSnare },
    { name: 'Tom1', key: 'h', audio: soundTom1 },
    { name: 'Tom2', key: 'j', audio: soundTom2 },
    { name: 'Bass', key: 'k', audio: soundBass },
    { name: 'Kick', key: 'l', audio: soundKick },
  ];

  const soundBtns = soundData.map((data) => (
    // fixme: classname
    <li className="l-sound-btn-list__item" key={data.key}>
      <SoundBtn
        name={data.name}
        keyshortcut={data.key}
        audioFile={data.audio}
      />
    </li>
  ));

  return (
    <main className="c-drumkit">
      <h1 className="c-drumkit__heading t1">Drum Kit</h1>
      <ul className="l-sound-btn-list" role="presentation">
        {soundBtns}
      </ul>
    </main>
  );
}

export default Drumkit;
