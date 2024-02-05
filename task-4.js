// Write a function to find the longest word in a given string.

// sample-input: 
// I am learning Programming to become a programmer

// sample-output: Programming



function longestWord(sentence){
 let makeWord = sentence.split(' ');
 let longWord = '';
 for(let word of makeWord){
    if(word.length > longWord.length){
        longWord = word;
    }
 }
 return longWord
}
const sentence = 'I am learning Programming to become a programmer';
const result = longestWord(sentence);
console.log('the longest word is:',result);