const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the operator (+, -, *, /): ", (oper) => {
        rl.question("Enter the second number: ", (num2) => {
            let result;
            if(oper == '+'){
                result = Number(num1) + Number(num2);
            } 
            else if(oper == '-'){
                result = Number(num1) - Number(num2);
            }
            else if(oper == '*'){
                result = Number(num1) * Number(num2);
            }
            else if(oper == '/'){
                result = Number(num1) / Number(num2);
            }
            console.log("The result is: " + result);
            rl.close();
        });
    });
});