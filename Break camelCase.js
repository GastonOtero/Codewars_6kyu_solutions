/*
DESCRIPTION:

Complete the solution so that the function will break up camel casing, 
using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// My solution:

function solution(string) {
    return string.replace(/([A-Z])/g, ' $1');
}


// Without regex (not mine):

function solution(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
        el = ' ' + el
        }
        return el
    })
    return string.join('')
}