console.log('EXERCISE 4 :  If Else');

/*
a.Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
*/

// console.log('Exercise 4.a');
// var randomNumber = Math.random()*1;
// if (randomNumber >= 0.5){
//    alert('Greater than 0,5');
// }else{
//    alert('Lower than 0,5')
// }

/*
b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
I. “Bebe” si la edad es menor a 2 años;
II. “Niño” si la edad es entre 2 y 12 años;
III. “Adolescente” entre 13 y 19 años;
IV. “Joven” entre 20 y 30 años;
V. “Adulto” entre 31 y 60 años;
VI. “Adulto mayor” entre 61 y 75 años;
VII. “Anciano” si es mayor a 75 años.
*/

console.log('Exercise 4.b');
var age = Math.random()*100;
switch (true){
    case (age<=2):
        alert('Bebé');
        break;
    case (age > 2 && age <= 12):
        alert('Niño');
        break;
    case (age > 13 && age <= 19):
        alert('Adolencente');
        break;
    case (age > 20 && age <= 30):
        alert('Joven');
        break;
    case (age > 31 && age <= 60):
       alert('Adulto');
       break;
    case (age > 61 && age < 75):
        alert('Adulto mayor');
        break;
    case (age >= 75):
        alert('Anciano');
        break;
    default:
        break;
    }