// ### Task-3: 
// Write a function to count the number of vowels in a string.



function countVowel(str){
    const count = str.match(/[aeiou]/gi).length;
    return count
}

const string = 'I am Gopal Basak and you';
const result = countVowel(string);
console.log(result);