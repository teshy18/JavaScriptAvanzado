
// Array de Alumnos, se guarda en local storage
const Alumnos = [];

//alumno en proceso de carga
const Alumno = {
    nombre: '',
    notas: [],
    promedio: 0
}


//Alumno en carga--
const nombreAlum = document.getElementById('nombreAlumno')
const notasAlum = document.getElementById('notasAlumno')
const promAlum = document.getElementById('promedioAlumno')

//Botones
//Boton Guardar
const btnGuardar = document.getElementById('guardar');
//Boton Cargar Notas
const btnCargarNotas = document.getElementById('cargarNota')
//Boton Reset
const btnReset = document.getElementById('reset')


btnGuardar.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log('click en guardar')
    console.log(JSON.stringify(Alumno, null, 2))
});

//Inputs del formulario

//nombre
const nombre = document.getElementById('nombre');

nombre.addEventListener('input', (event)=>{
    let message = ''
    message += event.target.value

  Alumno.nombre = message  
  nombreAlum.textContent = `Nombre: ${message}`

}
)

//notas
const notas = document.getElementById('notas');

let textoNotas = 'Notas: '


notas.addEventListener('input', (event)=>{
   
    let nota = ''
    nota += event.target.value
    

    //TODO: arreglar el input de salida de notas
    notasAlum.textContent = textoNotas + '(' + nota + ')';
}
)

btnCargarNotas.addEventListener('click', (event)=>{
    event.preventDefault()

    Alumno.notas.push(notas.value) 
    textoNotas += `( ${notas.value} )`
    notas.value = ''
    notas.focus()

})

//click en el boton reset reinicia el formulario, el objeto alumno y hace foco en el campo nombre
btnReset.addEventListener('click', (event)=>{
    Alumno.nombre = ''
    Alumno.notas = []
    Alumno.promedio = 0 
    
    nombre.focus();
})

//TODO:
//Validación notas




// /// para continuar: 
// -al cargar las notas tengo que guardarlas en un array de notas, pero antes tengo que validar que sean valores numéricos unicamente
// -en la pantalla resultado tengo que mostrar el nombre, las notas por separado y el proomedio del alumno antes de guardarlo
// -el boton guardar tiene que guardar el objeto alumno en un array quqe tenga un maximo de 3 alumnos
// -al llegar a 3 alumnos tengo que deshabilitar el boton guardar. 

