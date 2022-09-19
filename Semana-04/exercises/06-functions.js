console.log('EXERCISE 6 :  Functions ');

/*
a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/

console.log('Exercise 6.a');
var firstNumber = 24;
var secondNumber = 24;
function firstFunction (firstNumber, secondNumber){
    var resultFunc;
    resultFunc = firstNumber + secondNumber;
    return resultFunc;
}
var result6A = firstFunction (firstNumber, secondNumber);
console.log(result6A);

/*
b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN
como resultado.
*/

console.log('Exercise 6.b');
var firstNumber = 24;
var secondNumber = 24;
function secondFunction (firstNumber, secondNumber){
    var resultFunc;
    if (isNaN(firstNumber) == true && isNaN(secondNumber) == true){
        alert('¡One of the parameters used has an error!');
        return NaN;
    }else{
        resultFunc = firstNumber + secondNumber;
        return resultFunc;
    }
    }
var result6B = secondFunction (firstNumber, secondNumber);
console.log(result6B);

/*
c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un
número entero.
*/

console.log('Exercise 6.c');
var thirdNumber = 12;
function validateInteger (thirdNumber){
    if (Number.isInteger(thirdNumber) == true){
        return true;
    }else{
        return false;
    }
}
var result6C = validateInteger (thirdNumber);
console.log(result6C)

/*
d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido
a entero (redondeado).
*/

console.log('Exercise 6.d');
var firstNumber = 25.05;
var secondNumber = 24;
function thirdFunction (firstNumber, secondNumber){
    var resultFunc;
    if (typeof(firstNumber) != 'number' && typeof(secondNumber) != 'number'){
            alert('¡One of the parameters used has an error!');
            return NaN;
    }
    else if (Number.isInteger(firstNumber) != true){
        alert('¡One of the parameters used its not an integer number!')
        return Math.round(firstNumber);
    }
    else if (Number.isInteger(secondNumber) != true){
        alert('¡One of the parameters used its not an integer number!')
        return Math.round(secondNumber);
    }
    else {
    resultFunc = firstNumber + secondNumber;
    return (resultFunc);
    }
}
console.log(thirdFunction (firstNumber, secondNumber));


/*
e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma
probando que todo siga funcionando igual.
*/

console.log('Exercise 6.e');
function validateInteger2 (thirdNumber){
    if (Number.isInteger(thirdNumber) != true){
        integerNumber=Math.round(thirdNumber);
        return integerNumber;
    }else {
        return thirdNumber;
    }
}
function fourthFunction (firstNumber, secondNumber){
    var resultFunc;
    if (typeof(firstNumber) != 'number' && typeof(secondNumber) != 'number'){
    alert('¡One of the parameters used has an error!');
    return NaN;
    }
    else{
        firstNumber = validateInteger2 (firstNumber);
        secondNumber = validateInteger2 (secondNumber);
        resultFunc = firstNumber + secondNumber;
        return resultFunc;
    }
}
console.log(fourthFunction (firstNumber, secondNumber));