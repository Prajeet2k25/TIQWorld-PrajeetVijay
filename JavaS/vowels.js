const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a string: ", (str) => {
    str = str.toLowerCase();
    let vowels = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] === 'a' ||
        str[i] === 'e' ||
        str[i] === 'i' || 
        str[i] === 'o' || 
        str[i] === 'u'){
            vowels++;
        }
    }
    console.log("The number of vowels in "+str+" is: "+vowels);
    rl.close();
});