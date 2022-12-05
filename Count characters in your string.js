/*
DESCRIPTION:

The main idea is to count all the occurring characters in a string. If you 
ave a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, 
{}.
*/

// My solution:

function count (string) {  
    let result = {};
    string.split('').forEach(x => {result[x] = result[x] ? result[x] + 1 : 1});
    return result;
}