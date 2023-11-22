import { Difficulty } from '../../types/enums';

export interface DifficultySelectorProps {
    difficulty: Difficulty;
    setDifficulty: (difficulty: Difficulty) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({ difficulty, setDifficulty }) => {
    const handleSelectChange = (event: any) => {
        setDifficulty(event.target.value);
    };

    return (
        <>
            <p>Difficulty: {difficulty}</p>
            <select value={difficulty} onChange={handleSelectChange}>
                <option value={Difficulty.EASY}>EASY MODE</option>
                <option value={Difficulty.NORMAL}>NORMAL MODE</option>
                <option value={Difficulty.HARD}>HARD MODE</option>
            </select>
        </>
    );
};

export default DifficultySelector;
