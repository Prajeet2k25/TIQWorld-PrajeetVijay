const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the numbers:", (num) => {
    let i;
    let arr = num.split(" ");
    for(i=0;i<arr.length;i++){
        arr[i]=Number(arr[i]);
    }
    let Largest = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i]>Largest){
            Largest = arr[i];
        }
    }
    console.log("The Largest number in the array is: "+Largest);
})