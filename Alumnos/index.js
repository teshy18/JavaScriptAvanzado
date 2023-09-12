//TODO: 
    // - los alumnos deben generarse mediante un constructur. 
    // - terminar el formato de salida 
    



//HTML inputs del formulario
const nombre = document.getElementById('nombre');
const notas = document.getElementById('notas');
const alertText = document.getElementById('alertText')

//HTML cargando alumno
const nombreAlum = document.getElementById('nombreAlumno')
const notasAlum = document.getElementById('notasAlumno')
const promAlum = document.getElementById('promedioAlumno')

//Html lista de alumnos



//Botones
const btnGuardar = document.getElementById('guardar');
const btnCargarNotas = document.getElementById('cargarNota')
const btnReset = document.getElementById('reset')


//////////Logica

const alumnos = [];

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

    if(alumnos.length >= 3 ){
        btnGuardar.setAttribute("disabled", "")
    }
    //localStorage.setItem('alumnos', JSON.stringify(alumnos))
    
    resetarAlumno()
    resetarFormulario()
    nombre.focus()
    
});


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
    if(alumno.notas.length == 0 ){
        notasAlum.textContent = `(${nota})`
    } else{
        notasAlum.textContent = `( ${alumno.notas.join(') (')} ) (${nota})`
    };

    
}
)

//Cargar Notas
btnCargarNotas.addEventListener('click', (event)=>{
    event.preventDefault()
    if(notas.value == '' ){
        alertText.classList.remove('visually-hidden')
        notas.value = ''
        notas.focus() 
    }else{
        alumno.notas.push(notas.value) 
        
        let promedio = calcularPromedio(alumno.notas)
        promAlum.textContent =  promedio
        alumno.promedio = promedio
        notas.value = ''
        notas.focus() 
        alertText.classList.add('visually-hidden')
    }
    console.log(alertText.classList)

})

const calcularPromedio = function(arr){
    let sum = 0; 

    for(j=0; j<arr.length; j++){
    sum = (sum +   parseFloat(arr[j]))// se parsea el valor del array porque son strings
 }

 return (sum/arr.length).toFixed(2)
}

 

