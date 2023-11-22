// This helper function is used to check if a string is a valid English letter:
// a...z, A...Z
const isValidLetter = (str: string): boolean => {
    if (str.length !== 1) {
        return false;
    }
    const letterRegex = /^[a-zA-Z]$/;
    return letterRegex.test(str);
};

export default isValidLetter;
