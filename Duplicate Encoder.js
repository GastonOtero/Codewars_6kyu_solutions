/*
DESCRIPTION:

The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. Ignore 
capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

// My solution:

function duplicateEncode(word){
for (let i = 0; i < letter.length; i++){
    let x = letter[i]
    if (object[x] == undefined){
      object[x] = 1;
    } else {
      object[x] += 1;
    }
  }
   return letter.map(x => object[x] === 1 ? "(" : ")" ).join('');
}

// Using .map() (not mine):

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
}