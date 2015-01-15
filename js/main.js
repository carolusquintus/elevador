var numeroWorkers = Math.floor(generarRandomRango(2, 2));
var workers = [];

var tiempoInicial = new Date();
var tiempoEjecucion = generarTiempoRango(3, 7, "M");

console.log("Inicia ejecucion: " + tiempoInicial);
console.log("Duracion aproximada de ejecucion: " + tiempoEjecucion / 60000 + " minutos");

(function main(){

    for (index = 0; index < numeroWorkers; index++) {
        workers.push(new Worker("llamarElevador.js"));
    }

    workers.forEach(function(w, i) {

        var indexPlanta = Math.floor(generarRandomRango(0, edificio.plantas.length - 1));

        var message = {
            "numeroWorker": i,
            "tiempoInicial": tiempoInicial,
            "tiempoEjecucion": tiempoEjecucion,
            "indexPlanta": indexPlanta
        };

        w.postMessage(message);
    });
})();