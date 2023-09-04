//Inputs del formulario
const nombre = document.getElementById('nombre');
const notas = document.getElementById('notas');

//HTML Cargando alumno--
const nombreAlum = document.getElementById('nombreAlumno')
const notasAlum = document.getElementById('notasAlumno')
const promAlum = document.getElementById('promedioAlumno')

//Botones
const btnGuardar = document.getElementById('guardar');
const btnCargarNotas = document.getElementById('cargarNota')
const btnReset = document.getElementById('reset')


//////////Logica

var alumnos = [];

const alumno = {
    nombre: '',
    notas: [],
    promedio: 0
}

const resetarAlumno = function (){
    alumno.nombre = ''
    alumno.notas= []
    alumno.promedio= 0
}

const resetarFormulario = function(){
    nombre.value = ''
    notas.value = ''

    nombreAlum.textContent = ''
    notasAlum.textContent = ''
    promAlum.textContent = ''
}



///Guardar
btnGuardar.addEventListener('click', (event)=>{
    event.preventDefault();

    alumnos.push(alumno)
    localStorage.setItem('alumnos', JSON.stringify(alumnos))
    resetarAlumno()
    resetarFormulario()
    nombre.focus()
    
});

//Cargar Notas
btnCargarNotas.addEventListener('click', (event)=>{
    event.preventDefault()
    if(notas.value != NaN){
        alumno.notas.push(notas.value) 
        
        let promedio = calcularPromedio(alumno.notas)
        promAlum.textContent =  promedio
        alumno.promedio = promedio
        notas.value = ''
        notas.focus() 
    }

})

//Reiniciar
btnReset.addEventListener('click', (event)=>{
    resetarFormulario()
    resetarAlumno()    
    nombre.focus()
})


//nombre
nombre.addEventListener('input', (event)=>{
    let message = ''
    message += event.target.value

  alumno.nombre = message  
  nombreAlum.textContent = message

}
)

//notas

notas.addEventListener('input', (event)=>{
    

    let nota =''
    nota += event.target.value
    

    //se visualiza en el cuadro del alumno 
    notasAlum.textContent =  nota ;
}
)

const calcularPromedio = function(arr){
    let sum = 0; 

    for(j=0; j<arr.length; j++){
    sum = (sum +   parseFloat(arr[j]))// se parsea el valor del array porque son strings
 }

 return (sum/arr.length).toFixed(2)
}

 

//TODO:
//Validación notas

// -el boton guardar tiene que guardar el objeto alumno en un array quqe tenga un maximo de 3 alumnos
// -al llegar a 3 alumnos tengo que deshabilitar el boton guardar. 

