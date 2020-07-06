import React from 'react';
import SoundBtn from './SoundBtn';

function SoundBtns(props) {
  const { soundData, skin } = props;

  const soundBtns = soundData.map((data) => (
    <li className="l-sound-btn-list__item" key={data.key}>
      <SoundBtn
        name={data.name}
        keyShortcut={data.key}
        audioFile={data.audio}
        skin={skin}
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
