function outcome(){
    let num1 = Number(document.getElementById("num-one").value);
    let num2 = Number(document.getElementById("num-two").value);
    let total = 0


if(isNumber(num1) ==false && isNumber(num2) ==false){
    printResult("O números são invalido!");
    return;
}

    if(document.getElementById('add').checked){ 

        total = num1 + num2;
}

else if(document.getElementById('subtrair').checked){
    
    total = num1 - num2;

}

else if(document.getElementById('multiplicar').checked){
    
    total = num1 * num2; 
}

else{
    if(num1 == 0 & num2 == 0 ){ 
        printResult( "nao é possivel dividir 0 por 0");
        return;
    }
    total = num1 / num2;
}

printResult('result: ' + String(total.toFixed(2)));

}
function printResult(input){
    document.getElementById('resultArea').innerHTML = input;
}
function isNumber(input){
    return !isNaN(parseFloat(input)) && isFinite(input);
}