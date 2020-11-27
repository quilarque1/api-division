const  { obtenerResultado } = require('../utils/division');
const { divisionDto } = require('../dto/divisionDto');

class DivisionService {

	getDivision(operacion) {
		let resultado = obtenerResultado(operacion)
		console.log('Resultado de la Operacion: ', resultado)
		return divisionDto(operacion, resultado) || {};
	}
}

module.exports = DivisionService;
