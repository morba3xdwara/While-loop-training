let start = prompt("Do you want to start? (yes/no)");
if (start === "yes"){
    choice();
}else if (start === "no"){
    console.log("GoodBye!")
}
function choice(){
    console.log("A: Password Validator");
    console.log("B: Math Quiz Game");
    console.log("C: Simple Calculator Loop");
    console.log("E: Exit");

    let choice = prompt("chouse");
    while (choice !== "A" || choice !== "B" || choice !== "C" ){
        if (choice === "A"){
            choice = "idle"
            passwordValidator();
        }else if (choice === "B"){
            choice = "idle"
            mathQuizGame();
        }else if (choice === "C"){
            choice = "idle"
            simpleCalculatorLoop();
        }else if (choice === "E"){
            choice = "idle"
            return;
        }else if(choice === "idle"){
            choice = prompt("chouse");
        }else {
            console.log("Enter a valide parameter")
            choice = prompt("chouse"); 
        }
    }
}
function passwordValidator(){
    let PSWD = prompt("Enter the password:");
    let validPass = "secret123";
    let attempts = 0;

    while (PSWD !== validPass){
        attempts++;
        console.log("Invalid password")
        console.log(`${attempts} wrong attempts`)
        if (attempts === 1){
            console.log("You can do it, you remembrs it.")
        }else if(attempts === 5){
            console.log("just try to remember.")
        }
        PSWD = prompt("Enter the password:");
    }
    console.log("congratulation you got it")
    choice();
}

function mathQuizGame(){
    const firstNumber = Math.floor(Math.random() * 30) + 1;
    const secondNumber = Math.floor(Math.random() * 30) + 1;
    const result = firstNumber + secondNumber;
    let tries = 0;
    let answer = parseInt(prompt(`what's the answer for: ${firstNumber} + ${secondNumber}`));

    while (answer !== result && tries !== 5){
        tries++;
        let answer = parseInt(prompt(`what's the answer for: ${firstNumber} + ${secondNumber}`));
        console.log(`tries left ${5 - tries}`);
    } 
    console.log(`yeah the answer for ${firstNumber} + ${secondNumber} = ${result}.
        you got it in ${tries + 1} trie`)
        choice();
}

function simpleCalculatorLoop(){
    let firstNum;
    let secondNum;
    let operator;
    let equal;
    let again = "yes";

    while (again === "yes"){
        firstNum = 0;
        secondNum = 0;
        firstNum = parseInt(prompt("Enter first number"));
        secondNum = parseInt(prompt("Enter second number"));
        operator = prompt("Enter operator");
        if (operator === "+"){
            equal = firstNum + secondNum;
        }else if(operator === "-"){
            equal = firstNum - secondNum;
        } else if(operator === "*" || operator === "x"){
            equal = firstNum * secondNum;
        }else if(operator === "/" && secondNum !== 0){
            equal = firstNum / secondNum;
        }else if(operator === "/" && secondNum === 0){
            equal = "you can't devide by 0";
        }else{
            equal = "enter a valid operator";
        }
        console.log(`formula is ${firstNum} ${operator} ${secondNum} = ${equal}`);
        again = prompt("Continue? (yes/no)");
    }
    choice();
}