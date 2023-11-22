import Board from '../Board';
import getRandomWord from '../../utils/getRandomWord';
import WordContext from '../../contexts/WordContext';

import './WordleGame.css';
import { useCallback, useEffect, useState } from 'react';
import isValidLetter from '../../utils/isValidLetter';
import { Difficulty } from '../../types/enums';
import getRowNumFromDifficulty from '../../utils/getRowNumFromDifficulty';
import DifficultySelector from '../DifficultySelector';
import initializeGuessedInfo, { RowInfo } from '../../utils/initializeGuessedInfo';
import MusicPlayer from '../MusicPlayer';
import Modal from '../Modal/Modal';
import PointCounter from '../PointCounter';

const WordleGame: React.FC = () => {
    const [randomWord, setRandomWord] = useState(() => getRandomWord());
    // console.log(randomWord);

    const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.NORMAL); // normal by default
    const [currentRow, setCurrentRow] = useState(0); // the current row of input
    const [isOver, setIsOver] = useState(false); // is game over or continuing
    const [won, setWon] = useState(false); // boolean to show win or not for the current round.
    const [winningPoint, setWinningPoint] = useState(0); // total number of win
    const [continuousWinningPoint, setContinousWinningPoint] = useState(0); // number of continous win
    const [isModalOpen, setIsModalOpen] = useState(false);

    const numOfRows = getRowNumFromDifficulty(difficulty);
    const songPath = `${process.env.PUBLIC_URL}/music/keys-of-moon-white-petals.mp3`;

    const [guessedInfo, setGuessedInfo] = useState<RowInfo[]>(() =>
        initializeGuessedInfo(numOfRows)
    );

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    // console.log(numOfRows, difficulty, currentRow, guessedInfo);

    useEffect(() => {
        // check if the game is over
        guessedInfo.forEach((rowInfo) => {
            const currentString = rowInfo.guessedString.join('');
            if (currentString === randomWord && rowInfo.isCompete) {
                // win!
                setIsOver(true);
                setWon(true);
                setIsModalOpen(true);
                setWinningPoint(winningPoint + 1);
                setContinousWinningPoint(continuousWinningPoint + 1);
            }
            return;
        });
        if (currentRow === numOfRows) {
            // lose
            setIsOver(true);
            setWon(false);
            setIsModalOpen(true);
            setContinousWinningPoint(0);
            return;
        }
    }, [currentRow, guessedInfo, numOfRows, randomWord, setIsOver]);

    const resetGame = useCallback(() => {
        setGuessedInfo(() => initializeGuessedInfo(numOfRows));
        setCurrentRow(0);
        setIsOver(false);
        setIsModalOpen(false);
        setWon(false);
        setRandomWord(getRandomWord);
    }, [numOfRows]);

    useEffect(() => {
        // reset when the difficulty is changed
        // console.log('numOfRows: ', numOfRows);
        // setGuessedInfo(() => initializeGuessedInfo(numOfRows));
        // setCurrentRow(0);
        // console.log('change difficulty!');
        resetGame();
    }, [difficulty]);

    const handleClickResetGame = () => {
        resetGame();
    };

    const handleButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        // prevent "enter" to trigger reset button
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (isOver || currentRow >= numOfRows) {
                // we don't need to continue when it's over
                return;
            }

            // console.log([event.key]);
            const keyboardString = event.key;
            // console.log('hi', currentRow, guessedInfo[0].guessedString);
            // console.log(isValidLetter(keyboardString));
            // Case 1: Enter
            if (keyboardString === 'Enter') {
                // handle enter
                if (guessedInfo[currentRow].guessedString.length !== 5) {
                    // bad input
                    return;
                }
                setGuessedInfo(
                    guessedInfo.map((rowInfo, rowIdx) => {
                        if (rowIdx !== currentRow) {
                            return { ...rowInfo };
                        }
                        return { ...rowInfo, isCompete: true };
                    })
                );
                setCurrentRow(currentRow + 1);
            } else if (keyboardString === 'Backspace') {
                // hanlde backspace
                if (guessedInfo[currentRow].guessedString.length === 0) {
                    // bad input
                    return;
                }
                setGuessedInfo((guessedInfo) =>
                    guessedInfo.map((rowInfo, rowIdx) => {
                        if (rowIdx !== currentRow) {
                            return { ...rowInfo };
                        }
                        return {
                            ...rowInfo,
                            guessedString: rowInfo.guessedString.filter(
                                (_, index) => index !== rowInfo.guessedString.length - 1
                            )
                        };
                    })
                );
            } else if (isValidLetter(keyboardString)) {
                // handle normal letter
                if (guessedInfo[currentRow].guessedString.length === 5) {
                    // bad input
                    return;
                }
                setGuessedInfo((guessedInfo) =>
                    guessedInfo.map((rowInfo, rowIdx) => {
                        if (rowIdx !== currentRow) {
                            return { ...rowInfo };
                        }
                        return {
                            ...rowInfo,
                            guessedString: [...rowInfo.guessedString, keyboardString.toUpperCase()]
                        };
                    })
                );
            }
        },
        [currentRow, guessedInfo, isOver, numOfRows, setCurrentRow, setGuessedInfo]
    );

    useEffect(() => {
        // console.log('Use effect');
        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
        // We only want the listener to be mounted once, and remove it when unmounted
    }, [handleKeyDown]);

    return (
        <WordContext.Provider value={{ word: randomWord }}>
            <div className="WordleGame">
                <MusicPlayer songPath={songPath} />
                <PointCounter point={winningPoint} continuousPoint={continuousWinningPoint} />
                <h1>Wordle Game</h1>
                <button
                    type="button"
                    onClick={handleClickResetGame}
                    onKeyDown={handleButtonKeyDown}
                >
                    Restart Game
                </button>
                <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />
                <Board numOfRows={numOfRows} guessedInfo={guessedInfo} />
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} won={won} />
            </div>
        </WordContext.Provider>
    );
};

export default WordleGame;
