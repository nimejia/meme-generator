import Suggestions from '../../lib/suggestions.js'; // todo: figure out how to avoid relative paths but allow webpack to resolve (http://moduscreate.com/es6-es2015-import-no-relative-path-webpack/)
import DiacriticMap from '../../lib/diacritics.js';

import { InvalidDiacriticCharacterException, DiacriticGenerationLengthException, WordLengthMismatchException } from './generator-errors';

class MemeGenerator {
    static getRandomSuggestion(size?: number): string {
        var randomIndex = Math.floor(Math.random() * (Suggestions.length + 1));

        if (!size) {
            return Suggestions[randomIndex];
        }

        if (Validators.validateRandomWordLength(size)) {
            while (Suggestions[randomIndex].length != size) {
                randomIndex = Math.floor(Math.random() * (Suggestions.length + 1));
            }

            return Suggestions[randomIndex];
        }
    }

    static generateMeme(diacriticWord: string, baseWord: string): string {
        if (
            Validators.validateAccentWord(diacriticWord) &&
            Validators.compareLength(diacriticWord, baseWord)
        ) {
            var builder = '';
            var i = 0
            for (i; i < diacriticWord.length; i++) {
                builder += (baseWord[i] + DiacriticMap[diacriticWord[i]]);
            }

            return decodeURI(JSON.parse('"' + builder + '"')) + baseWord.substring(i);
        }
    }
}

class Validators {
    static validateAccentWord(word): boolean {
        for (var i = 0; i < word.length; i++) {
            if (!(word[i] in DiacriticMap)) {
                throw new InvalidDiacriticCharacterException(word[i], Object.keys(DiacriticMap));
            }
        }

        return true;
    }

    static validateRandomWordLength(length: number): boolean {
        // assumes that the suggestions array is sorted
        var validMin = Suggestions[Suggestions.length - 1].length;
        var validMax = Suggestions[0].length;

        if (length > validMax || length < validMin) {
            throw new DiacriticGenerationLengthException(length, validMin, validMax);
        }

        return true;
    }

    static compareLength(diacriticWord: string, baseWord: string): boolean {
        if (diacriticWord.length > baseWord.length) {
            throw new WordLengthMismatchException(diacriticWord, baseWord);
        }

        return true;
    }
}

export default MemeGenerator;