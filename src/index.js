const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let result = "";
    const length = expr.length;

    for (let index = 0; index < length; index += 10) {
        if (expr[index] === '*') result += ' ';
        else {
            let symbol = "",
                sequenceLength = index + 10;

            for (let position = index; position < sequenceLength; position += 2)
                if (expr[position] === '1' && expr[position + 1] === '0') symbol += '.';
                else if (expr[position] === '1' && expr[position + 1] === '1') symbol += '-';

            result += MORSE_TABLE[symbol];
        }
    }
    return result;
}

module.exports = {
    decode
}