console.log('EXERCISE 3 :  ASRRAYS');

/*
a.Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/

console.log('Exercise 3.a');
var fisrtArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
console.log(fisrtArray[4],fisrtArray[10]);

/*
b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/

console.log('Exercise 3.b');
console.log(fisrtArray.sort());

/*
c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/

console.log('Exercise 3.c');
fisrtArray.unshift('mounths');
fisrtArray.push('years');
console.log(fisrtArray);

/*
d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

console.log('Exercise 3.d');
fisrtArray.shift('mounths');
fisrtArray.pop('years');
console.log(fisrtArray);

/*
e. Invertir el orden del array (utilizar reverse).
*/
console.log('Exercise 3.e');
fisrtArray.reverse();
console.log(fisrtArray);

/*
f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/

console.log('Exercise 3.f');
var firstString=fisrtArray.join('-');
console.log(firstString);

/*
g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

console.log('Exercise v3.g');
var fisrtArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
var secondArray=fisrtArray.slice(4,11);
console.log(secondArray);