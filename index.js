//console.log("hola mundo!");

var total = 0;
var monto = 0;

var descripcionTxt = document.getElementById("descripcion");
var montoTxt = document.getElementById("monto");
var totalMsg = document.getElementById("totalMsg");
var listaTxt = document.getElementById("lista");

function calcularTotal()
{
	monto = montoTxt.value;
	monto = parseInt(monto);
	total = total + monto;
	//console.log(total);
	totalMsg.innerHTML = "Total: $" + total;

	listaTxt.innerHTML += "<p>" + descripcionTxt.value + " : $" + monto + "</p>";

	descripcionTxt.value = "";
	montoTxt.value = "";
}