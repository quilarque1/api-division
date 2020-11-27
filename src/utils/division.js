
let obtenerResultado = (valores) => {
	let arrayDatos = valores.split('/');
	return arrayDatos.reduce(function(a, b){return a / b});
}

module.exports = { obtenerResultado };
