console.log('')
console.log('Ejercicio 2: "gestor de contactos"')

let contactos = [
    {nombre: 'Juan Pablo',
    telefono: '212312',
    email: 'jp_10@correo.com'
    },
    {nombre: 'Fernando',
    telefono: '363534',
    email: 'fernan2@correo.com'
    }
]

let pedro = {nombre: 'Martin',
telefono: '545565',
email: 'fr_martin@correo.com'
}

contactos.push(pedro);

console.log(`la cantidad de contactos es: ${contactos.length}`)
