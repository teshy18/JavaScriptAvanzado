let usuario = {
    nombre: 'Mateo',
    edad: 25,
    peliculasFavoritas: [
        {titulo: 'Interstellar',
        año: 2014,
        director: 'Christopher Nolan'
        },
        {titulo: 'Mr. Nobody',
        año: 2009,
        director: 'Jaco Van Dormael'
        },
        {titulo: 'Inception',
        año: 2010,
        director: 'Christopher Nolan'
        }
    ]
}

console.log('la segunda película favorita del usuario es: ' 
            + usuario.peliculasFavoritas[1])