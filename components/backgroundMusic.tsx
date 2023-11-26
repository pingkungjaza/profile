"use client"
import { FC, useEffect, useState } from 'react';
import { Howl } from 'howler';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid'

const BackgroundMusic: FC = () => {
  const [sound] = useState(new Howl({ src: ['/musics/Le Gang - Bad Intentions.mp3'], loop: true }));
  const [isMute, setIsMute] = useState(false);

  const togglePlay = () => {
    setIsMute(!isMute);
  };

  useEffect(() => {
    sound.mute(isMute);
  }, [isMute, sound]);

  useEffect(() => {
    sound.play();

    return () => {
      sound.stop();
    };
  }, [sound])

  return (
    <div onClick={togglePlay} className='cursor-pointer'>
      {isMute
        ? <SpeakerXMarkIcon className="h-6 w-6 text-default-500" />
        : <SpeakerWaveIcon className="h-6 w-6 text-default-500" />
      }
    </div>
  )
};

export default BackgroundMusic;
