const readline = require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Enter 1. for Celsius to Fahrenheit or 2. for Fahrenheit to Celsius: ", (num) => {
    if(num == 1){
        rl.question("Enter the temperature in Celsius: ", (c) => {
            let fahrenheit = (c * 9/5) + 32;
            console.log("The temperature in Fahrenheit is: " + fahrenheit+"°F");
            rl.close();
        });
    } else if(num == 2){
        rl.question("Enter the temperature in Fahrenheit: ", (f) => {
            let celsius = (f - 32) * 5/9;
            console.log("The temperature in Celsius is: " + celsius+"°C");
            rl.close();
        });
    }
});