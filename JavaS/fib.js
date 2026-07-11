const readline =require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the number of terms for the Fibonacci sequence: ", (n) => {
    let f=0;
    let s=1;
    console.log(f);
    console.log(s);
    for(let i=2; i<n; i++){
        let temp = f + s;
        console.log(temp);
        f = s;
        s = temp;
    }
});