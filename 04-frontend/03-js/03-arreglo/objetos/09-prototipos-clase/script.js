class vehiculo {
    constructor(marca, modelo, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = amio;
    }

    obtenerdetalles(){
         return `marca: ${this.marca}, modelo:{this.modelo}, anio:${this.anio}`
    }
}

class automovil extends vehiculo{
    constructor(marca, modelo, anio, puertas)
    super(marca, modelo, anio)
    thispuertas = puertas;
}

const renault = new automovil ("renault","sandero","2018","5");
console.log(renault.obtenerdetalles()); marca: renault,modelo:
