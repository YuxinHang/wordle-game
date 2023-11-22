import React from 'react';
import AudioPlayer from 'react-audio-player';

export interface MusicPlayerProps {
    songPath?: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
    songPath = '/music/keys-of-moon-white-petals.mp3'
}) => {
    return (
        <div>
            {/* <h1>Background Music Player</h1> */}
            <AudioPlayer src={songPath} autoPlay controls />
        </div>
    );
};

export default MusicPlayer;
