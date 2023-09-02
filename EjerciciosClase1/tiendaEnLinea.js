console.log('')
console.log('Ejercicio 3: Tienda en línea')

let producto = {
    nombre: 'Moto G42', 
    precio: '$150.000',
    disponible: true
}

const mostrarProducto = function(producto){
    console.log(JSON.stringify(producto, null, 2));
}

mostrarProducto(producto)