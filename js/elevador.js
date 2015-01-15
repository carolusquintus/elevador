function Elevador(plantaActual, plantas, enServicio) {
    this.plantaActual = plantaActual;
    this.plantas = plantas;
    this.enServicio = false;

    this.subir = function() {

    };

    this.bajar = function() {

    };

    this.setEnServicio = function(enServicio) {
        this.enServicio = enServicio;
    };

    this.isEnServicio = function() {
        return this.enServicio;
    };
}

function Planta(nombrePlanta, sube, baja) {
	this.nombrePlanta = nombrePlanta;
	this.sube = sube;
	this.baja = baja;}

function Edificio(elevadores, plantas) {
    this.elevadores = elevadores;
    this.plantas = plantas;
}


var s  = new Planta("S", true, false);
var pb = new Planta("PB", true, true);
var p1 = new Planta("1", true, true);
var p2 = new Planta("2", true, true);
var p3 = new Planta("3", true, true);
var p4 = new Planta("4", true, true);
var p5 = new Planta("5", true, true);
var p6 = new Planta("6", true, true);
var t  = new Planta("T", false, true);

var plantas = [s, pb, p1, p2, p3, p4, p5, p6, t];

var indexPlantaInicial = Math.floor(generarRandomRango(0, plantas.length - 1));
var elevador1 = new Elevador(plantas[indexPlantaInicial], plantas, false);

var elevadores = [elevador1];
var edificio = new Edificio(elevadores, plantas);