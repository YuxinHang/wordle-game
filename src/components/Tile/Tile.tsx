import { useContext } from 'react';
import './Tile.css';
import WordContext from '../../contexts/WordContext';

export interface TileProps {
    letter: string;
    letterIdx: number;
    isComplete: boolean;
}

const getTileClassName = (
    letter: string,
    isComplete: boolean,
    realLetter: string,
    realWord: string
): string => {
    if (!isComplete) {
        return 'Tile';
    }
    if (letter === realLetter) {
        return 'CorrectTile';
    }
    if (realWord.includes(letter)) {
        return 'CloseTile';
    }
    return 'IncorrectTile';
};

const Tile: React.FC<TileProps> = ({ letter, letterIdx, isComplete }) => {
    // console.log('tile');
    const realWord = useContext(WordContext).word;
    const className = getTileClassName(letter, isComplete, realWord[letterIdx], realWord);
    return <div className={className}>{letter}</div>;
};

export default Tile;
