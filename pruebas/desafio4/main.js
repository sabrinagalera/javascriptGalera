
// Declaración de variables. 

let total= 0;
let carrito = [];

// Declaración de array de objetos

const products = [
{
    id:'1',
nombre: 'Áurico',
precio: 500,
descripción:'Transforman y elevan la frecuencia vibratoria de nuestro espacio personal. Limpieza energética de ambientes.',
modoDeUso:'Agitar antes de usar. Rociar el ambiente y alrededor del cuerpo sin aplicar directamente sobre la piel.',
imagen: './media/splash.webp',
},
{
    id:'2',
nombre: 'Jabon',
precio: 300,
descripción:'Revitalizan, limpian el cuerpo y dejan la piel más tersa.',
modoDeUso:'Aplicar suavemente sobre la piel. Es recomendable usar agua tibia.',
imagen: './media/jabon.webp',
},
{
    id:'3',
nombre: 'RollOn',
precio:800 ,
descripción:'Aprovecha los beneficios de la aromaterapia de manera fácil y rápida. Inciden sobre el sistema nervioso.',
modoDeUso:'Aplicar en sienes, muñecas, palma de las manos o pies según se necesite.',
imagen: './media/rollon.webp',
},
{
    id:'4',
nombre: 'Crema',
precio: 900,
descripción:'Penetran de forma directa en la piel para aprovechar los distintos componentes y tratar alteraciones.',
modoDeUso:'Aplicar sobre la piel con suaves masajes circulares.',
imagen: './media/crema.webp',
}
]

// Función para renderizar productos

const renderProducts = miArray => {
    const productsSection = document.querySelector('.products');
    if(!miArray || miArray.length === 0){
        productsSection.innerHTML = '<p>No hay productos</p>'
        return;
    }
    productsSection.innerHTML = '';
    let html = ' ';
    miArray.forEach(product => {
        html +=
        `
            <div class="card m-5 ">
                <img src="${product.imagen}" class="card-img-top mb-5" alt="${product.nombre}">
                <div class="card-body">
                    <h4 class="card-title mb-5">${product.nombre}</h4>
                    <p class="card-text mb-5">${product.descripción}</p>
                    <h5 class="card-title mb-5">Modo de uso</h5>
                    <p class="card-text mb-5">${product.modoDeUso}</p>
                    <p>${product.precio}</p>
                    <button href="#" class="button__black add" value=${product.id}>Pedí el tuyo!</button>
                </div>    
            </div>
        `
        ;
    });
    productsSection.innerHTML = html;
}

// Función para renderizar carrito

    const renderCart = array => {
        const cartSection = document.querySelector('.cart');
        if(!array || array.length === 0){
            cartSection.innerHTML = '<p>No has comprado productos</p>'
            return;
    
        }
        cartSection.innerHTML = '';
        let html = '';
        array.forEach(producto => {
            html +=
            `
                <div class="card m-5">
                    <h4 class="card-title mb-5">${producto.nombre}</h4>
                    <p>${producto.precio}</p>
                    <button href="#" class="button__black delete" onclick="deleteFromCart('${producto.id}')">Eliminar del carrito</button>
                </div>    
            `
            ;
        });
        cartSection.innerHTML = html;
}

// Función para agregar productos al carrito

const addToCart = evento => { 
    const idDelProductoABuscar = evento.target.value;
    const buscarProductoEnDB = products.find(element => element.id === idDelProductoABuscar )
    console.log('Producto: ', buscarProductoEnDB)
    carrito.push(buscarProductoEnDB)
    renderCart(carrito);
}

// Función para eliminar productos del carrito

const deleteFromCart = id => {
    const buscarYBorrar = carrito.filter(producto => producto.id !== id)
    console.log('Carrito sin el producto borrado ', buscarYBorrar)
    carrito = buscarYBorrar;
    renderCart(carrito)
}

// Principal

window.onload = () => {
    renderProducts(products);
    renderCart(carrito);
    const btnComprar = document.querySelectorAll(".add");
    const btnDelete = document.getElementsByClassName("delete");
    btnComprar.forEach(btn=> btn.addEventListener('click', addToCart)) 
}




// //Declaración de funciones

// //Función principal . Llama a la función respuestaUsuario para decidir entre promos y productos y luego llama a calcularProductos

// function main() {
//     res = respuestaUsuario()
//     if(res === 'promos'){
//         return alert("Funcionalidad en desarrollo");
//     } else {
//         return calcularProductos()
//     };
// };

// // Función respuesta usuario, decide entre promos y productos

// function respuestaUsuario() {
//     let state;
//     do {
//         let res = prompt( "Escriba Promos si desea ver las promociones. Para agregar productos individuales escriba Productos:");
//         if (res.toLowerCase() === 'promos' || res.toLowerCase() === 'productos'){
//             return res.toLowerCase();
//         } else {
//             alert("Ingrese una opción válida")
//             state = true
//         }; 
//     } while (state);
// };

// // Función para calcular el precio de los productos agregados individualmente

// function calcularProductos(){
//     let res = Number(prompt("1-Áurico:$500\n2-Jabón:$300\n3-RollOn:$800\n4-Crema:$900\nIngrese el n° de producto que desea agregar: "));
//     switch (res){
//         case 1:
//             total += aurico.precio;
//             aurico.agregarProducto(); //De esta forma me muestra en la consola sólo el nombre del producto
//             break;
//         case 2:
//             total += jabon.precio;
//             jabon.agregarProducto();
//             break;
//         case 3:
//             total += rollOn.precio;
//             carrito.push(rollOn); //De esta otra forma me muestra el objeto entero con todas sus propiedades
//             break;
//         case 4:
//             total += crema.precio;
//             carrito.push(crema);
//             break;
//     };
//     return total;
// };

// // function calcularPromos(){};  no está implementada en este desafío


// //Programa 

// let nombre = prompt("Bienvenido/a a Luz de Luna Aromaterapia! Ingrese su nombre:");
// alert("Hola " + nombre + "!. Desde aquí puede calcular el total de su pedido");

// //declaración de variable state para entrar en el ciclo do while. Mientras se desee agregar algo más, se vuelve a ejecutar todo desde main().
// let state;
// do {
//     main();
//     let res = prompt("Desea agregar algo más? (si/no)");
//     if(res.toLowerCase() === 'si'){
//         state = true
//     } else if (res.toLowerCase() === 'no'){
//         alert("Gracias por usar la calculadora de precios. Su pedido es de $" + total);
//         break;
//     } else {
//         alert("Ingrese una opción válida");
//         state = true
//     };
// } while(state);


// // Se muestra el resultado en consola

// console.log("Cliente: " + nombre + "\n Total del pedido: $" + total)
// console.log("Productos en el carrito:");
// for(const item of carrito){
//     console.log(item);

// }

