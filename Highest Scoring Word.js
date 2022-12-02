/*
DESCRIPTION:

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: 
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the 
original string.

All letters will be lowercase and all inputs will be valid.
*/

// My solution:

function high(x){
    let words = x.split(' ')
    let valued = x.split(' ');
    
    for (let i = 0; i < valued.length; i++){
        valued[i] = valued[i].split('').map(x => x.charCodeAt(x) - 96).reduce((a, b) => a + b);
    }
    return words[valued.indexOf(Math.max(...valued))];
}