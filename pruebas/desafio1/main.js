// Declaración de variables y asignación de valores

let nombre = prompt("Ingrese su nombre: ")
let apellido = prompt("Ingrese su apellido: ")
let numero1 = parseFloat(prompt("Bienvenido a multiplicAr! Escriba un número (puede contener decimales): "))
let numero2 = Number(prompt("Escriba por cuánto desea multiplicarlo (sólo números enteros): "))
let resultado = numero1 * numero2

// Salidas

alert("El resultado de esta operación es: " + resultado )
console.log("Datos del usuario: Nombre: " + nombre  + " - Apellido: " + apellido)
console.log("Datos de la operación: " + numero1 + " * " + numero2 + " = " + resultado)
