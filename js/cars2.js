class Cars2 {

    constructor(marca, modelo, velMax, color, motor, peso, aceleracion) {
        this.metrosRecorridos = 0;
        this.velocidad = 0;
        this.aceleracion = aceleracion;
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
        this.velMax = velMax;
        this.color = color;
        this.motor = motor;
        this.peso = peso;
    }

    acelerar() {
    }

    frenar() {
    }
    derrapar() {
    }

}
let Ferrari = new Cars("Ferrari", "450", 275, "Rojo", "Gasolina", 1700, 2.2);
let Bugatti = new Cars("Bugatti", "Veyron", 420, "Negro", "Gasolina", 2200, 1.6);
let Porsche = new Cars("Porsche", "Panamera", 235, "Negro", "Diesel", 2300, 3);