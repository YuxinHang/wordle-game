import { WORDS } from '../types/enums';

export const getRandomWord = () => {
    return getRandomItemFromArray(WORDS);
};

const getRandomItemFromArray = <T>(array: T[]) => {
    return array[Math.floor(Math.random() * array.length)];
};

export default getRandomWord;
