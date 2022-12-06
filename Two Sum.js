/*
DESCRIPTION:

The input will always be valid (numbers will be an array of length 2 or 
greater, and all of the items will be numbers; target will always be the sum 
of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
*/

// My solution:

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++){
        for (let j = i+1; j < numbers.length; j++){
            if (numbers[i] + numbers[j] === target){
            return [i, j];
            }      
        }
    }
}