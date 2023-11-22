import { RowInfo } from '../../utils/initializeGuessedInfo';
import Tile from '../Tile';
import './TileRow.css';

export interface TileRowProps {
    rowInfo: RowInfo;
}

const TileRow: React.FC<TileRowProps> = ({ rowInfo }) => {
    // console.log('tile row');
    if (!rowInfo) {
        return null;
    }
    const { guessedString, isCompete } = rowInfo;
    const tiles = [];
    for (let idx = 0; idx < 5; idx++) {
        const char = guessedString[idx] ?? '';
        tiles.push(<Tile key={idx} letter={char} letterIdx={idx} isComplete={isCompete} />);
    }
    return <div className="TileRow">{tiles}</div>;
};

export default TileRow;
