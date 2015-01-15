importScripts("util.js", "elevador.js");

function llamarElevador(e) {

	var data = e.data;

	var segundos = generarTiempoRango(10, 20, "S");

	console.log("Worker " + data.numeroWorker + " inicia en planta: " + edificio.plantas[data.indexPlanta].nombrePlanta);
    console.log("Worker " + data.numeroWorker + " llama elevador en " + (segundos / 1000) + " segundos");

    var idTimeout = setTimeout(function() {

        if (detenerEjecucion(data.tiempoInicial.getTime(), data.tiempoEjecucion)) {
            clearTimeout(idTimeout);
            console.log("Worker " + data.numeroWorker + " termina ejecucion " + new Date());
        } else {
            llamarElevador(e);
        }
    }, segundos);
}

addEventListener("message", function(e) {

	llamarElevador(e);
	
}, false);