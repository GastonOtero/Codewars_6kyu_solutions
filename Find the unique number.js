/*
DESCRIPTION:

There is an array with some numbers. All numbers are equal except for one. Try to 
find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

// My solution:

function findUniq(arr) {
    let result;
    arr.map((x, i, a)=> a.indexOf(x) == a.lastIndexOf(x) ? result = x : null )
    return result;
};
