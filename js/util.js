function generarTiempoRango(min, max, tipo) {
    var tiempo = 0;

    switch (tipo) {
        case "S":
            tiempo = generarRandomRango(min, max) * 1000;
        break;
        case "M":
            tiempo = generarRandomRango(min, max) * 60000;
        break;
    }

    return tiempo.toFixed();
}

/**
 * Genera un numero aleatorio flotante en un rango determinado.
 * El rango 
 * 
 * @method generarRandomRango
 * @param min {Number} Valor minimo del rango
 * @param max {Number} Valor maximo del rango
 * @return {Number} Regresa numero generado del rango
 */
function generarRandomRango(min, max) {
    return (Math.random() * (max - min + 1) + min);
}

/**
 * 
 * 
 * @method detenerEjecucion
 * @param tiempoInicial {Number} Tiempo inicial en milisegundos
 * @param tiempoEjecucion {Number} Tiempo que durara la ejecucion en milisegundos
 * @return {Boolean} Regresa true si el 
 */
function detenerEjecucion(tiempoInicial, tiempoEjecucion) {
    var tiempoActual = new Date().getTime();

    var diferencia = tiempoActual - tiempoInicial;

    console.log("Tiempo actual: " + new Date(tiempoActual));

    return diferencia >= tiempoEjecucion;
}