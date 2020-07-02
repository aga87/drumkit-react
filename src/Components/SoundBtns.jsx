import React from 'react';
import SoundBtn from './SoundBtn';

function SoundBtns(props) {
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
    <ul className="l-sound-btn-list" role="presentation">
      {soundBtns}
    </ul>
  );
}

export default SoundBtns;
