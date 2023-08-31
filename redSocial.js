console.log('');
console.log('Ejercicio 5: Red Social')

let perfil = {
    nombre: 'Vicky',
    edad: 30 , 
    amigos: [{
        nombre: 'Dani',
        edad: 30, 
    },
    {
        nombre: 'Fernando',
        edad: 27, 
    },
    {
        nombre: 'Agustina',
        edad: 23, 
    },
    {
        nombre: 'Sebastian',
        edad: 31, 
    }]
}

let amigoMenor = function( perfil ){
    let menor = perfil.amigos[0]

    for(i=0; i<perfil.amigos.length; i++){
        if (perfil.amigos[i].edad<menor.edad){
            menor = perfil.amigos[i]  
        } 
    }

    console.log(`El menor de los amigos es: ${menor.nombre} (${menor.edad})`)

}

amigoMenor(perfil)