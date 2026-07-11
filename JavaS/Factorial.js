const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (num) => {
    let factorial = 1;
    for(let i=1; i<=num; i++){
        factorial *= i;
    }
    console.log(`The factorial of ${num} is ${factorial}`);
    rl.close();
})