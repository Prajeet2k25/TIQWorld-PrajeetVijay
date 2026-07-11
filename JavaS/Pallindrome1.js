const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the String To Check for Pallindrome: ", (name) => {
    let rev=name.split("").reverse().join("");
    if(name==rev){
        console.log("The string is a Pallindrome");
    }
    else{
        console.log("The string is not a Pallindrome");
    }
    rl.close();
});