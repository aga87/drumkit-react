import React, { useRef, useEffect } from 'react';
import playAudio from '../Utils';

function SoundBtn(props) {
  const audioRef = useRef(null);
  const { name, keyshortcut, audioFile } = props;

  function handleClick() {
    playAudio(audioRef.current);
  }

  function handleKeyDown(e) {
    const { key } = e;

    if (key !== keyshortcut) return;
    // fixme:  here ?
    e.preventDefault();
    playAudio(audioRef.current);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  return (
    <div>
      <button
        type="button"
        className="o-btn"
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
