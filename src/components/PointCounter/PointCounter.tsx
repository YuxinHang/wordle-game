import React from 'react';
import './PointCounter.css';

interface PointCounterProps {
    point: number;
    continuousPoint: number;
}

const PointCounter: React.FC<PointCounterProps> = ({ point, continuousPoint }) => {
    return (
        <div className="point-board">
            <p>
                Total number of win: <strong>{point}</strong>
            </p>
            <p>
                Continuous win: <strong>{continuousPoint}</strong>
            </p>
        </div>
    );
};

export default PointCounter;
