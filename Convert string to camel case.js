/*
DESCRIPTION:

Complete the method/function so that it converts dash/underscore delimited words
into camel casing. The first word within the output should be capitalized only if 
the original word was capitalized (known as Upper Camel Case, also often referred 
to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

// My solution:

function toCamelCase(str){
    let newStr = str.split(/[^a-zA-Z]/)
                    .map((x, i) => x.charAt(0).toUpperCase() + x.slice(1))
                    .join('');
    return str == '' ? '' : str[0]+newStr.slice(1);
}