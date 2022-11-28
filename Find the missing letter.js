/*
DESCRIPTION:

Write a method that takes an array of consecutive (increasing) letters as 
input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter 
be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
*/

// My solution:

function findMissingLetter(array)
{
    let unicoded = array.map(x=> x.charCodeAt());
    for(let i = 0; i < unicoded.length; i++){
    if (unicoded[i + 1] !== unicoded[i] + 1){
        return String.fromCharCode(unicoded[i] + 1);
        }
    }
}