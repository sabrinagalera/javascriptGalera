// Declaración de variables. 


let total= 0;
let carrito = [];
//Declaración de clases

class Producto {
    constructor(id, nombreProducto, precio){
        this.id = id;
        this.nombreProducto=nombreProducto;
        this.precio=precio;
    }

    agregarProducto(){
        carrito.push(Producto);
    }

     
}
//Declaración de objetos

const aurico = new Producto(1, "Áurico", 500);
const jabon = new Producto(2, "Jabon", 300);
const rollOn = new Producto(3, "RollOn", 800);
const crema = new Producto(4, "Crema", 900);



//Declaración de funciones

//Función principal . Llama a la función respuestaUsuario para decidir entre promos y productos y luego llama a calcularProductos

function main() {
    res = respuestaUsuario()
    if(res === 'promos'){
        return alert("Funcionalidad en desarrollo");
    } else {
        return calcularProductos()
    };
};

// Función respuesta usuario, decide entre promos y productos

function respuestaUsuario() {
    let state;
    do {
        let res = prompt( "Escriba Promos si desea ver las promociones. Para agregar productos individuales escriba Productos:");
        if (res.toLowerCase() === 'promos' || res.toLowerCase() === 'productos'){
            return res.toLowerCase();
        } else {
            alert("Ingrese una opción válida")
            state = true
        }; 
    } while (state);
};

// Función para calcular el precio de los productos agregados individualmente

function calcularProductos(){
    let res = Number(prompt("1-Áurico:$500\n2-Jabón:$300\n3-RollOn:$800\n4-Crema:$900\nIngrese el n° de producto que desea agregar: "));
    switch (res){
        case 1:
            total += aurico.precio;
            carrito.push(aurico);
            break;
        case 2:
            total += jabon.precio;
            carrito.push(jabon);
            break;
        case 3:
            total += rollOn.precio;
            carrito.push(rollOn);
            break;
        case 4:
            total += crema.precio;
            carrito.push(crema);
            break;
    };
    return total;
};

// function calcularPromos(){};  no está implementada en este desafío


//Programa 

let nombre = prompt("Bienvenido/a a Luz de Luna Aromaterapia! Ingrese su nombre:");
alert("Hola " + nombre + "!. Desde aquí puede calcular el total de su pedido");

//declaración de variable state para entrar en el ciclo do while. Mientras se desee agregar algo más, se vuelve a ejecutar todo desde main().
let state;
do {
    main();
    let res = prompt("Desea agregar algo más? (si/no)");
    if(res.toLowerCase() === 'si'){
        state = true
    } else if (res.toLowerCase() === 'no'){
        alert("Gracias por usar la calculadora de precios. Su pedido es de $" + total);
        break;
    } else {
        alert("Ingrese una opción válida");
        state = true
    };
} while(state);


// Se muestra el resultado en consola

console.log("Cliente: " + nombre + "\n Total del pedido: $" + total)
console.log("Productos en el carrito:");
for(const item of carrito){
    console.log(item);

}



