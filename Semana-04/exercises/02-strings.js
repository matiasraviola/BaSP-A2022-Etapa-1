console.log('EXERCISE 2 :  STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase). */

console.log('Exercise 2.a');
var firstString = 'abecedario';
var resultA = firstString.toUpperCase();
console.log(result2A);

/*
b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
guardando el resultado en una nueva variable (utilizar substring).
*/

console.log('Exercise 2.b');
var secondString = 'abecedario';
var resultB = secondString.substring(0,5);
console.log(result2B);

/*
c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
guardando el resultado en una nueva variable (utilizar substring).
*/

console.log('Exercise 2.c');
var thirdString = 'abecedario';
var resultC = thirdString.substring(5,10);
console.log(result2C);

/*
d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +).
*/

console.log('Exercise 2.d');
var fourthString = 'abecedario';
var fifthString = fourthString.substring(0,1).toUpperCase();
var sixthString = fourthString.substring(1,10).toLowerCase();
var resultD = fifthString + sixthString;
console.log(result2D);

/*
e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición
del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

console.log('Exercise 2.e');
var seventhString = 'abece dario';
var resultE = seventhString.indexOf(' ');
console.log(result2E);

/*
f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +).
*/

console.log('Exercise 2.f');
var eighthString = 'abecedario canadiense';
var ninethString = eighthString.substring(0,1);  //first upper case
var tenthString = eighthString.substring(1,eighthString.indexOf(' ')); //first low case
var eleventhString = eighthString.substring(eighthString.indexOf(' ')+1, eighthString.indexOf(' ')+2); //second upper case
var twelfthString = eighthString.substring(eighthString.indexOf(' ')+2, eighthString.length); // second low case
console.log(ninethString.toUpperCase()+tenthString.toLowerCase()+' '+eleventhString.toUpperCase()+
twelfthString.toLowerCase())