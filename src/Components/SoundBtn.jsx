import React, { useRef, useEffect, useState } from 'react';
import playAudio from '../Utils';

function SoundBtn(props) {
  const [keyPlaying, setKeyPlaying] = useState('');
  const audioRef = useRef(null);
  const { name, keyshortcut, audioFile } = props;

  function handleClick() {
    playAudio(audioRef.current);
  }

  function handleKeyDown(e) {
    const { key } = e;
    if (key !== keyshortcut) return;
    e.preventDefault();
    playAudio(audioRef.current);
    setKeyPlaying(key);
  }

  function handleKeyUp(e) {
    const { key } = e;
    if (key !== keyshortcut) return;
    e.preventDefault();
    setKeyPlaying('');
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
  });

  return (
    <div>
      <button
        type="button"
        className={keyPlaying === keyshortcut ? 'o-btn is-active' : 'o-btn'}
        aria-keyshortcuts={keyshortcut}
        onClick={handleClick}
      >
        {name}
        <kbd className="o-btn__kbd t2" aria-hidden="true">
          {keyshortcut.toUpperCase()}
        </kbd>
      </button>
      <audio src={audioFile} ref={audioRef}>
        Your browser does not support audio.
      </audio>
    </div>
  );
}

export default SoundBtn;
