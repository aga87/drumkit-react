import React from 'react';
import SoundBtn from './SoundBtn';

function Drumkit(props) {
  const { soundData } = props;

  const soundBtns = soundData.map((data) => (
    <li className="l-sound-btn-list__item" key={data.key}>
      <SoundBtn
        name={data.name}
        keyShortcut={data.key}
        audioFile={data.audio}
      />
    </li>
  ));

  return (
    <main className="c-drumkit" role="main">
      <h1 className="c-drumkit__heading t1">Drum Kit</h1>
      <ul className="l-sound-btn-list" role="presentation">
        {soundBtns}
      </ul>
    </main>
  );
}

export default Drumkit;
