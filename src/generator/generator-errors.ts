class InvalidDiacriticCharacterException extends Error {
    constructor(offendingChar: string, validCharSetString: string[]) {
        var validChars = validCharSetString.join(', ');

        super(`ERROR: Value ${offendingChar} not found in diacritical character set: ${validChars}`);

        Object['setPrototypeOf'](this, InvalidDiacriticCharacterException.prototype);
    }
}

class DiacriticGenerationLengthException extends Error {
    constructor(offendingLength: number, validMin: number, validMax: number) {
        super(`ERROR: Value ${offendingLength} is outside range of ${validMin} to ${validMax}`);

        Object['setPrototypeOf'](this, DiacriticGenerationLengthException.prototype);
    }
}

class WordLengthMismatchException extends Error {
    constructor(diacriticWord: string, baseWord: string) {
        if (baseWord.length == 0) {
            super(`ERROR: No base word given`);
        } else {
            super(`ERROR: Word ${diacriticWord} is longer than ${baseWord}`);
        }

        Object['setPrototypeOf'](this, WordLengthMismatchException.prototype);
    }
}

export { InvalidDiacriticCharacterException, DiacriticGenerationLengthException, WordLengthMismatchException };