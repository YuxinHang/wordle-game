import { createContext } from 'react';

export interface PositionContextProps {
    rowIdx: number;
    colIdx: number;
}

const PositionContext = createContext<PositionContextProps>({
    rowIdx: 0,
    colIdx: 0
});

export default PositionContext;
