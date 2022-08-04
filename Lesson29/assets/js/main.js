// const calculatorScreen = document.getElementById("input");
// const calculatorButton = document.getElementsByClassName("number");

const calculatorScreen = document.getElementById("input");
var prevNumber = null;

var getFirstNumberIsDone = false;
var firstNumber = null;
var secondNumber = null;
var operator = '';
var tempSecondNumber = '';
var isTotal = false;
function addNumber(number) {
    if(isTotal){
        isTotal = false;
        clearCalc();
    }
    console.log('Element clicked!');
    if(!getFirstNumberIsDone) {
        let temp = calculatorScreen.innerText + number;
        calculatorScreen.innerText = parseFloat(temp);
        firstNumber = parseFloat(temp);
    }else{
        tempSecondNumber += number;
        secondNumber = parseFloat(tempSecondNumber);
        calculatorScreen.innerText = `${firstNumber} ${operator} ${secondNumber}`;
    }
    prevNumber = number;
}

function clearVars() {
    getFirstNumberIsDone = false;
    firstNumber = null;
    operator = '';
    tempSecondNumber = '';
    secondNumber = null;
}
function clearCalc() {
    calculatorScreen.innerText = '';
    clearVars();
}

function addDec() {
    calculatorScreen.innerText += '.'; 
    if(getFirstNumberIsDone) tempSecondNumber += '.';
}

function addOperator(operatorTemp) {
    if(getFirstNumberIsDone || !firstNumber) return;
    calculatorScreen.innerText += ` ${operatorTemp} `;
    operator = operatorTemp; 
    getFirstNumberIsDone = true;
}

function result() {
    let final = '';
    isTotal = true;
    switch (operator) {
        case '*':
            final = firstNumber * secondNumber;
            break;
    
        default:
            break;
    }
    calculatorScreen.innerText = final;
    clearVars();
}