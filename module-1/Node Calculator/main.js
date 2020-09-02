const readlineSync = require("readline-sync")

function add(num1,num2){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    num3 = num1 + num2;
    console.log("The result is: ", num3)
}

function sub(num1,num2){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    num3 = num1 - num2
    console.log("The result is: ", num3)
}

function mult(num1,num2){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    num3 = num1 * num2
    console.log("The result is: ", num3)
}

function div(num1,num2){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    num3 = num1 / num2;
    console.log("The result is: ", num3)
}

function calculate(){
    var num1 = readlineSync.question("Please enter your first number: ")
    var num2 = readlineSync.question("Please enter your second number: ")
    var operation = readlineSync.question("Please enter the operation to perform (addition, subtraction, multiplication or division): ")
    if (operation == "addition"){
        add(num1,num2)
    } else if (operation == "subtraction"){
        sub(num1,num2)
    } else if (operation == "multiplication"){
        mult(num1,num2)
    } else if (operation == "division"){
        div(num1,num2)
    } else {
        console.log("What?")
    }
}

calculate()