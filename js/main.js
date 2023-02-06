
const carRun = (nCoche) =>{


    //Aqui estoy guardando en chosen al coche instanciado. He hecho el truco del diccionario de JS
    // numeroCoche es un string con un numero, que en el diccionario equiavale a un coche instanciado
    let chosen = carsDictionary[numeroCoche];

    //Ejecutando metodo acelerar del coche elegido
    chosen.acelerar();

    //ahora SECUESTRO al elemento de HTML cuya ID coincide con la del coche elegido y le cambio la propiedad que muestra
    //innerHTML que muestra los metros recorridos
    document.getElementById(numeroCoche).innerHTML = `${chosen.metrosRecorridos}`;
}