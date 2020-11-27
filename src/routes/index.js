const express = require('express');
const router = express.Router();
const DivisionService = require('../services/division');

router.get('/health', (req, res) => {
	res.json({ status: "api-division is Up!!" });
});

router.get('/division', (req, res, next) => {
	console.log('Operacion a resolver: ', req.query)

	try {
		const divisionService = new DivisionService();

		res.status(200).json({
			division: divisionService.getDivision(req.query.operacion)
		});

	} catch (e) {
		next(e);
	}
});

module.exports = router;
