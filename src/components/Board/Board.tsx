import { RowInfo } from '../../utils/initializeGuessedInfo';
import TileRow from '../TileRow';

import './Board.css';

export interface BoardProps {
    numOfRows?: number;
    guessedInfo: RowInfo[];
}

const Board: React.FC<BoardProps> = ({ numOfRows = 6, guessedInfo }) => {
    // console.log('board', numOfRows);
    const tileRows = [];
    for (let idx = 0; idx < numOfRows; idx++) {
        // console.log(idx, numOfRows, guessedInfo);
        tileRows.push(<TileRow key={idx} rowInfo={guessedInfo[idx]} />);
    }
    return <div className="Board">{tileRows}</div>;
};

export default Board;
