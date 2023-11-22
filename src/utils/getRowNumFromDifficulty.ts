import { Difficulty, DifficultyToRowNum } from '../types/enums';

export const getRowNumFromDifficulty = (difficulty: Difficulty): number => {
    return DifficultyToRowNum[difficulty];
};

export default getRowNumFromDifficulty;
