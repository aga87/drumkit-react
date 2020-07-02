import React, { useState } from 'react';
import SoundBtns from './Components/SoundBtns';
import soundHiHat from './audio/hihat.mp3';
import soundChip1 from './audio/chip1.mp3';
import soundChip2 from './audio/chip2.mp3';
import soundSnare from './audio/snare.mp3';
import soundTom1 from './audio/tom1.mp3';
import soundTom2 from './audio/tom2.mp3';
import soundBass from './audio/bass.mp3';
import soundKick from './audio/kick.mp3';

function App() {
  // fixme: mode setMode?
  const [selected, setSelected] = useState('drumkit1');

  const soundData1 = [
    { name: 'Hi-hat', key: 'a', audio: soundHiHat },
    { name: 'Chip1', key: 's', audio: soundChip1 },
    { name: 'Chip2', key: 'd', audio: soundChip2 },
    { name: 'Snare', key: 'f', audio: soundSnare },
    { name: 'Tom1', key: 'h', audio: soundTom1 },
    { name: 'Tom2', key: 'j', audio: soundTom2 },
    { name: 'Bass', key: 'k', audio: soundBass },
    { name: 'Kick', key: 'l', audio: soundKick },
  ];

  function handleClick(e) {
    setSelected(e.target.value);
  }

  // todo: new screenshot and descr
  // todo: test accessibility/ check ie layout
  return (
    <div>
      <main className="c-drumkit" role="main">
        <h1 className="c-drumkit__heading t1">Drum Kit</h1>
        <SoundBtns soundData={soundData1} />
      </main>
      {/*todo:  https://www.w3.org/TR/wai-aria-practices-1.1/examples/toolbar/toolbar.html */}

      <div className="c-toolbar" role="toolbar">
        <label className="c-toolbar__label s1" htmlFor="modes">
          Mode:
        </label>
        <select className="o-select" id="modes" size="1">
          {/* todo: aria-selected?  */}
          <option
            value="drumkit1"
            selected={selected === 'drumkit1'}
            onClick={handleClick}
          >
            Drum Kit 1
          </option>
          <option
            value="drumkit2"
            selected={selected === 'drumkit2'}
            onClick={handleClick}
          >
            Drum Kit 2
          </option>
        </select>
      </div>
    </div>
  );
}

export default App;
