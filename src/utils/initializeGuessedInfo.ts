export interface RowInfo {
    guessedString: string[];
    isCompete: boolean;
}

const initializeGuessedInfo = (numOfRows: number): RowInfo[] => {
    const initialGuessedInfo: RowInfo[] = [];
    for (let idx = 0; idx < numOfRows; idx++) {
        initialGuessedInfo.push({
            guessedString: [],
            isCompete: false
        });
    }
    return initialGuessedInfo;
};

export default initializeGuessedInfo;
