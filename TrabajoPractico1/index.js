
/// Trabajo Practico 1
    console.log('Trabajo Practico 1')
    console.log('')
    const arr1 = [1, 3 , 5 ,20]
    console.log('Array de ejemplo: ' +JSON.stringify(arr1))
// 1.Suma de elementos en un arreglo:
// Escribe una función que use reduce() para sumar todos los elementos de un arreglo de
// números

    const sumaTodos = arr1.reduce((a,b)=>a+b)    
    console.log('Suma de todos los numeros del array: ' + sumaTodos)

// 2.Multiplicación de elementos en un arreglo:
// Crea una función que utilice reduce() para multiplicar todos los elementos de un arreglo de
// números.

    const multiplicaTodos = arr1.reduce((a,b)=>a*b)
    console.log('La multiplicación de todos su items es: ' +multiplicaTodos)

// 3.Concatenación de cadenas:
// Implementa una función que use reduce() para concatenar todos los elementos de un
// arreglo de cadenas en una sola cadena.
    
    
    const concatenar = arr1.reduce((a, b) =>{ 
       return  a +''+b
    })

    console.log('Los numeros del array concatenados son: ' +concatenar)

// 4.Calcular el promedio:
// Escribe una función que use reduce() para calcular el promedio de un arreglo de números.
    
const prom = function(arr){
    return arr.reduce((a,b)=>a+b)/arr.length 
}

console.log('El promedio es: ' + prom(arr1))

// 5.Encontrar el valor máximo:
// Crea una función que utilice reduce() para encontrar el valor máximo en un arreglo de
// números.


const valorMaximo = arr1.reduce((a,b)=>{
    let auxiliar = a; 
    if (b>a){
        auxiliar = b    
    }
    return auxiliar 
})

console.log('El valor máximo es: ' + valorMaximo)

6.Contar ocurrencias:
Escribe una función que cuente cuántas veces aparece un elemento específico en un
arreglo utilizando reduce().

const arr2 = [1 ,1 , 3 ,3 , 5 ,3 ,4 ,3 ]

const repetidos = function(arr, valorRepetido){
    const contador = arr.reduce((contador, valorActual) =>
        (valorActual === valorRepetido ? contador + 1 : contador), 0);

     
    return `El valor "${valorRepetido}" se repite ${contador} veces`
}

console.log(repetidos(arr2, 3))