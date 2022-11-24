/*
DESCRIPTION:

Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing .
second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/ 

// My solution:

function solution(str){
    if (str.length % 2 !== 0){ str += '_' };
    let firstArray = str.split('');
    let result = [];
    for (let i = 0; i < str.length; i+= 2){
    result.push(firstArray[i] + firstArray[i + 1]);
    } 
    return result;
}

// I couldn't figure out how to do it with regex, here it is (not mine):

function solution(s){
    return (s+"_").match(/.{2}/g)||[]
}