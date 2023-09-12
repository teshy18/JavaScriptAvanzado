// Crear un objeto que sea MediosComunicacion, tiene que tener un método que lo único que haga sea “saludar”
// Luego crear dos objetos distintos que sean de este prototipo
// const perro = Object.create(animalPrototype);
// gato.__proto__ = animalPrototype;
// Llamar desde los dos objetos a este metodo


// const MediosComunicacion = {
//     saludar : function(){
//         console.log('Saludando...')
//     }
// }

// const radio = Object.create(MediosComunicacion);

// const tele = {}
// tele.__proto__ = MediosComunicacion;

// radio.saludar();
// tele.saludar();

// Necesito almacenar información de Clientes, los mismos pueden ser : consumidores finales, responsables inscriptos, pyme
// Necesito almacenar la información de ellos : nombre, dirección, mail, telefono
// Pero en el caso de consumidor final guardar:
// Apellido, DNI
// marysolgatti  a  Todos 20:50
// En el caso de responsable inscripto: CUIT, ingresos brutos, numero de punto de venta
// marysolgatti 20:51
// Si es el caso de una pyme almacenar : nombre de fantasía, CUIT


class Cliente {
    nombre= ''; 
    direccion = ''; 
    mail = ''; 
    telefono = ''; 
    saldo =  100; 

    constructor(nombre, direccion,mail,telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.mail = mail; 
        this.telefono = telefono
    }

    getSaldo = console.log(this.saldo)
}

class ConsumidorFinal  extends Cliente {
    apellido = ''; 
    DNI = '' ;

    constructor(apellido, DNI, nombre, direccion, mail, telefono){
        super(nombre, direccion, mail, telefono)
        this.apellido = apellido;
        this.DNI = DNI; 
    }

    getDNI = console.log(this.DNI)
}

class ResponableInscripto  extends Cliente {
    CUIT = ''; 
    IB = '' ;
    PuntoDeVenta = '';

    constructor(CUIT, IB, PuntoDeVenta, nombre, direccion, mail, telefono){
        super(nombre, direccion, mail, telefono)
        this.CUIT = CUIT;
        this.IB = IB; 
        this.PuntoDeVenta = PuntoDeVenta
    }

    getCUIT = console.log(this.CUIT)
}

class Pyme  extends Cliente {
    nombreDeFantasia = ''; 
    CUIT = '' ;

    constructor(nombreDeFantasia, CUIT, nombre, direccion, mail, telefono){
        super(nombre, direccion, mail, telefono)
        this.nombreDeFantasia = nombreDeFantasia;
        this.CUIT = CUIT; 
    }

    getNombre = console.log(this.nombreDeFantasia)
}

const cliente = new ConsumidorFinal('Tesitore', 123123 , 'Sebastian', 'Rivadavia', 'sebas.tesitore@gmail.com', 2954536377)
