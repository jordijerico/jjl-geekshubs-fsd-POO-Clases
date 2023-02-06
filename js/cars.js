
// Generar mi clase CARS

class Cars {

    constructor(marca, modelo, puertas, velMax, color, motor,peso) {
        // En el constructor nos encontraremos con las PROPIEDADES
        this.ruedas = 5;
        this.metrosRecorridos = 0;
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
        this.velMax = velMax;
        this.color = color;
        this.motor = motor;
        this.peso = peso;
    }
    //Inmediantamente fuera del constructor los METODOS

    acelerar(){
        this.metrosRecorridos += parseInt((this.velMax  / this.peso * Math.floor(Math.random() * 100)));
    }
    frenar(){

    }
    derrapar(){

    }

}
//Instanciar...crear objeto nuevo de la clase Cars
let coche1 = new Cars("Citroen","C4",5,180,"Negro","Diesel",1300);
let coche2 = new Cars("Volvo","XC90",5,120,"Gris","Diesel",2500);
let coche3 = new Cars("Nissan","Juke",5,120,"Negro","Gasolina",1100);
let coche4 = new Cars("Mazda","MX5",3,120,"Verde","Gasolina",950);

//Diccionario JS

let carsDictionary = {
    "1" : coche1,
    "2" : coche2,
    "3" : coche3,
    "4" : coche4
}


