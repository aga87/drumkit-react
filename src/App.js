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
import sound2Snare from './audio/2snare.mp3';
import sound2HiHat from './audio/2hihat.mp3';
import sound2Tom1 from './audio/2tom1.mp3';
import sound2Tom2 from './audio/2tom2.mp3';
import sound2Cymbal1 from './audio/2cymbal1.mp3';
import sound2Cymbal2 from './audio/2cymbal2.mp3';
import sound2Kick from './audio/2kick.mp3';

// fixme: clean up event listener in soundbtn?

function App() {
  // fixme: mode setMode? npm run build
  const [selected, setSelected] = useState('drumkit1');
  const [skin, setSkin] = useState('purple');

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

  const soundData2 = [
    { name: 'Snare', key: 'a', audio: sound2Snare },
    { name: 'Hi-hat', key: 's', audio: sound2HiHat },
    { name: 'Tom1', key: 'd', audio: sound2Tom1 },
    { name: 'Tom2', key: 'f', audio: sound2Tom2 },
    { name: 'Cymbal1', key: 'h', audio: sound2Cymbal1 },
    { name: 'Cymbal2', key: 'j', audio: sound2Cymbal2 },
    { name: 'Kick', key: 'k', audio: sound2Kick },
  ];

  function handleClick(e) {
    setSelected(e.target.value);
  }

  function handleSkinClick(e) {
    setSkin(e.target.value);
  }

  // todo: new screenshot and descr
  // todo: test accessibility/ check ie layout
  return (
    <div>
      <main className="c-drumkit" role="main">
        <h1 className="c-drumkit__heading t1">Drum Kit</h1>
        <SoundBtns
          soundData={selected === 'drumkit1' ? soundData1 : soundData2}
          skin={skin}
        />
      </main>
      {/*todo:  https://www.w3.org/TR/wai-aria-practices-1.1/examples/toolbar/toolbar.html */}

      <div className="c-toolbar" role="toolbar">
        <div>
          <label className="c-toolbar__label s1" htmlFor="modes">
            Mode
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
        <div>
          <label className="c-toolbar__label s1" htmlFor="skins">
            Skin
          </label>
          <select className="o-select" id="skins" size="1">
            {/* todo: aria-selected?  */}
            <option
              value="purple"
              selected={skin === 'purple'}
              onClick={handleSkinClick}
            >
              Purple
            </option>
            <option
              value="orange"
              selected={skin === 'orange'}
              onClick={handleSkinClick}
            >
              Orange
            </option>
            <option
              value="grey"
              selected={skin === 'grey'}
              onClick={handleSkinClick}
            >
              Grey
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
