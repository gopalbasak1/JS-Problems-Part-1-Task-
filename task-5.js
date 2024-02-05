// ### Task-5: 
// Generate a random number between 10 to 20.

        // With function

function getRandomIntInclusive(min, max){
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random
}
  console.log(getRandomIntInclusive(10,20));

        // With out function
   console.log(Math.floor(Math.random() * 10 + 10));