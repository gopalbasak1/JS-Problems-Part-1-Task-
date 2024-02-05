// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.
//
    

            // Celsius to Fahrenheit

function temperature(celsius){
    const farh = (celsius * 9/5) + 32;
    return farh
};

const convert  = temperature(10);
console.log(convert);

            // Fahrenheit to Celsius

function temperature2(fahrenheit){
    const celsius = (fahrenheit - 32) *5/9;
    return celsius.toFixed(2)
}

const convert2 = temperature2(100);
console.log(convert2);

