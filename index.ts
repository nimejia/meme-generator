import MemeGenerator from './src/generator/meme-generator';

function placeRandomWordInDiacriticInput(): void {
    var topInput = <HTMLInputElement>document.getElementById('accent-input');
    var sizeInput = <HTMLInputElement>document.getElementById('size-input');

    try {
        topInput.value = MemeGenerator.getRandomSuggestion(parseInt(sizeInput.value, 10));
    } catch (err) {
        alert(err.message)
    }
}

function handleInput() {
    var topInput = <HTMLInputElement>document.getElementById('accent-input');
    var bottomInput = <HTMLInputElement>document.getElementById('bottom-input');
    var output = <HTMLInputElement>document.getElementById('output');
    var diacriticWord = topInput.value.toLowerCase();
    var baseWord = bottomInput.value;

    try {
        output.value = MemeGenerator.generateMeme(diacriticWord, baseWord);
    } catch (err) {
        alert(err.message)
    }
}

document.getElementById('clicker').addEventListener('click', handleInput, false);
document.getElementById('picker').addEventListener('click', placeRandomWordInDiacriticInput, false);