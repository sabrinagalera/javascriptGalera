// Código I

// Declaración de variables y asignación de valores

let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let respuesta= prompt("Buenos días " + nombre + ". Ha tenido contacto con un paciente COVID en los últimos 15 días? (Si/No)");
let debeAislarse = "debe aislarse.";
let noDebeAislarse = "no debe aislarse.";
let rtaInvalida = " Respuesta inválida.";

// Control de flujo : condicionales (if - else if - else)

if(respuesta ==="Si" || respuesta ==="si" || respuesta ==="SI"){
    respuesta = debeAislarse;
    alert("Usted " + respuesta)
}

else if(respuesta ==="No" || respuesta === "no" || respuesta === "NO"){
    respuesta = noDebeAislarse;
    alert("Usted " + respuesta)
}
else{
    respuesta = rtaInvalida;
    alert(respuesta)
}

console.log("Datos del usuario: Nombre: " + nombre  + " - Apellido: " + apellido)
console.log("Estado: " + respuesta)


/*

// Código II

// Declaración de variables y asignación de valores

let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let respuesta= prompt("Buenos días " + nombre + ". Ha tenido contacto con un paciente COVID en los últimos 15 días? (Si/No)");
let debeAislarse = "debe aislarse.";
let noDebeAislarse = "no debe aislarse.";

// Control de flujo: ciclo WHILE y condicionales (if - else) + función toUpperCase()

while ((respuesta.toUpperCase() != "SI") || (respuesta.toUpperCase() != "NO")) {  	    
    if((respuesta.toUpperCase() === "SI") || (respuesta.toUpperCase() === "NO")){
        break;
    }
    else {
       respuesta =prompt("Debe ingresar Si o No"); 
    }
} 
if(respuesta.toUpperCase() == "SI"){
    respuesta = debeAislarse;
    alert("Usted " + respuesta)
}
else{
    respuesta = noDebeAislarse;
    alert("Usted " + respuesta)
}
console.log("Datos del usuario: Nombre: " + nombre  + " - Apellido: " + apellido)
console.log("Estado: " + respuesta)

*/
