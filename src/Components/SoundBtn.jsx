import React, { useRef, useEffect, useState } from 'react';
import playAudio from '../Utils';

function SoundBtn(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { name, keyShortcut, audioFile, skin } = props;

  function handleClick() {
    playAudio(audioRef.current);
  }

  function handleKeyDown(e) {
    const { key } = e;
    if (key !== keyShortcut) return;
    e.preventDefault();
    playAudio(audioRef.current);
    setIsPlaying(true);
  }

  function handleKeyUp(e) {
    const { key } = e;
    if (key !== keyShortcut) return;
    e.preventDefault();
    setIsPlaying(false);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
  });

  function getClassName(isActive, color) {
    if (isActive) {
      if (color !== 'purple') {
        return `o-btn o-btn--${color} is-active`;
      }
      return 'o-btn is-active';
    }
    // if inactive
    if (color !== 'purple') {
      return `o-btn o-btn--${color}`;
    }
    return 'o-btn';
  }

  return (
    <div>
      <button
        type="button"
        className={getClassName(isPlaying, skin)}
        aria-keyshortcuts={keyShortcut}
        onClick={handleClick}
      >
        {name}
        <kbd className="o-btn__kbd t2" aria-hidden="true">
          {keyShortcut.toUpperCase()}
        </kbd>
      </button>
      <audio src={audioFile} ref={audioRef}>
        Your browser does not support audio.
      </audio>
    </div>
  );
}

export default SoundBtn;
