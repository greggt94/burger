var express = require('express');
var burgerModel = require('../models/burger.js');

var router = express.Router();

router.get("/", function (req, res) {
	burgerModel.selectAll(function (data) {
		if(!req.xhr) {
			res.render('index', {burgers: data});
		} else {
			res.render('layouts/main', { burgers: data, layout: false });
		}
	});
});

router.post("/", function (req, res) {
	burgerModel.insertOne({
		name: req.body.name,
		devoured: req.body.devoured
	}, function (data) {
		res.json(data);
	});
});

router.put("/:id", function (req, res) {
	burgerModel.updateOne(
		{ id: req.params.id },
		{ devoured: req.body.devoured }, 
		function (data) {
		res.json(data);
	});
});

module.exports = router;
