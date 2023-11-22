import { createContext } from 'react';

export interface WordProps {
    word: string;
}

const WordContext = createContext<WordProps>({
    word: ''
});

export default WordContext;
