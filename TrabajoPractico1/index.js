
/// Trabajo Practico 1

    const arr1 = [1, 3 , 5 ,20]

// 1.Suma de elementos en un arreglo:
// Escribe una función que use reduce() para sumar todos los elementos de un arreglo de
// números

    const sumaTodos = arr1.reduce((a,b)=>a+b)    
    console.log(sumaTodos)

// 2.Multiplicación de elementos en un arreglo:
// Crea una función que utilice reduce() para multiplicar todos los elementos de un arreglo de
// números.

    const multiplicaTodos = arr1.reduce((a,b)=>a*b)
    console.log(multiplicaTodos)

// 3.Concatenación de cadenas:
// Implementa una función que use reduce() para concatenar todos los elementos de un
// arreglo de cadenas en una sola cadena.
    
    const arr2 = ['Santa Rosa', 'La Pampa', 'Argentina' ]

    const concatenar = arr2.reduce((a, b) =>{ 
       return  a +' - '+ b 
    })

    console.log(concatenar)

// 4.Calcular el promedio:
// Escribe una función que use reduce() para calcular el promedio de un arreglo de números.
    

