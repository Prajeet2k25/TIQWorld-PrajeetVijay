const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter the string to reverse: ", (str) => {
    let rev=str.split("").reverse().join("");
    console.log("THE ORIGINAL STRING IS: "+str);
    console.log("THE REVERSED STRING IS: "+rev);
    rl.close();
});
