import React, { useState, useRef, useEffect } from 'react';
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
import toolsSVG from './img/tools.svg';

// fixme: clean up event listener in soundbtn? npm run build
// todo: new screenshot and descr
// todo: test accessibility

function App() {
  const [mode, setMode] = useState('drumkit1');
  const [skin, setSkin] = useState('purple');
  const [focused, setFocused] = useState('');
  const modeRef = useRef(null);
  const skinRef = useRef(null);

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

  function handleChange(e) {
    setMode(e.target.value);
  }

  function handleSkinChange(e) {
    setSkin(e.target.value);
  }

  function handleModeKeyDown(e) {
    const { key } = e;
    switch (key) {
      case 'Left': // IE/Edge specific value
      case 'ArrowLeft':
      case 'Right': // IE/Edge specific value
      case 'ArrowRight':
        e.preventDefault();
        setFocused('skin');
        break;
      default:
    }
  }

  function handleSkinKeyDown(e) {
    const { key } = e;
    switch (key) {
      case 'Left': // IE/Edge specific value
      case 'ArrowLeft':
      case 'Right': // IE/Edge specific value
      case 'ArrowRight':
        e.preventDefault();
        setFocused('mode');
        break;
      default:
    }
  }

  useEffect(() => {
    // Roving tabIndex
    if (focused === 'mode') {
      modeRef.current.focus();
      modeRef.current.setAttribute('tabIndex', '0');
      skinRef.current.setAttribute('tabIndex', '-1');
    } else if (focused === 'skin') {
      skinRef.current.focus();
      skinRef.current.setAttribute('tabIndex', '0');
      modeRef.current.setAttribute('tabIndex', '-1');
    }
  }, [focused]);

  return (
    <div>
      <main className="c-drumkit" role="main" id="drumkit">
        <h1 className="c-drumkit__heading t1">Drum Kit</h1>
        <SoundBtns
          soundData={mode === 'drumkit1' ? soundData1 : soundData2}
          skin={skin}
        />
      </main>

      {/* Accessible Toolbar 
        https://www.w3.org/TR/wai-aria-practices-1.1/examples/toolbar/toolbar.html */}

      <div
        className="c-toolbar l-toolbar-flex l-wrapper"
        role="toolbar"
        aria-controls="drumkit"
      >
        <div className="l-toolbar-flex__item">
          <img
            src={toolsSVG}
            className="c-toolbar__svg-icon"
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="l-toolbar-flex__item">
          <label className="c-toolbar__label s1" htmlFor="modes">
            Mode
          </label>
          <select
            className="o-select"
            id="modes"
            size="1"
            tabIndex="0"
            ref={modeRef}
            onChange={handleChange}
            onKeyDown={handleModeKeyDown}
            value={mode}
          >
            <option value="drumkit1">Drum Kit 1</option>
            <option value="drumkit2">Drum Kit 2</option>
          </select>
        </div>
        <div className="l-toolbar-flex__item">
          <label className="c-toolbar__label s1" htmlFor="skins">
            Skin
          </label>
          <select
            className="o-select"
            id="skins"
            size="1"
            tabIndex="-1"
            ref={skinRef}
            onChange={handleSkinChange}
            onKeyDown={handleSkinKeyDown}
            value={skin}
          >
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
            <option value="grey">Grey</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
