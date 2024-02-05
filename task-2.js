// ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 

// sample-input: 
// numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// <br/>

// sample-input: 

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0


        //With out using function
const numbers = [5,6,11,12,98,5];
let count = 0;
let find = 25;
for(let i = 0; i< numbers.length; i++){
    if(numbers[i] === find){
        count++
    }
}
console.log(find + ' number has ' + count + ' times');

        //With using function

const numbers2 = [5,6,11,12,98,5];
let find2 =  5;
function repeated(numbers2){
    let count = 0;
    for(let i = 0; i < numbers2.length; i++){
        if(numbers2[i] === find2){
            count++;
        }
    }
    return count
};

const result = repeated(numbers2);
console.log(find2 + ' number has ' +result + ' times');