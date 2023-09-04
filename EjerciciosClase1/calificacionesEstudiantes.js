console.log('')
console.log('Ejercicio 4: Calificaciones de estudiantes')

let clase = [
    {
        nombre: 'Marcos',
        calificaciones: [9,6,7,6]
    },
    {
        nombre: 'Juana',
        calificaciones: [9,8,10,6]
    },
    {
        nombre: 'Valentino',
        calificaciones: [7,8,7,6]
    },
    {
        nombre: 'Gaston',
        calificaciones: [6,7,9,7]
    }
]
 const calcularPromedio = function(arr){
    let sum = 0; 

    for(j=0; j<arr.length; j++){
    sum = (sum + arr[j])
 }

 return sum/arr.length
}

let promedioPorAlumno = function(clase){
    for(i=0; i< clase.length; i++){
        let nombre = clase[i].nombre
        let prom = promedio(clase[i].calificaciones)
        console.log( `El promedio de ${nombre} es: ${prom}`)
    }

}

promedioPorAlumno(clase)

export default calcularPromedio;