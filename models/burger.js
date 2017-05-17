var orm = require('../config/orm.js');

var burger = {
	selectAll: function (callback) {
		orm.selectAll("burgers", callback);
	},
	insertOne: function (burger, callback) {
		orm.insertOne("burgers", burger, callback);
	},
	updateOne: function (burger, condition, callback) {
		orm.updateOne("burgers", burger, condition, callback);
	}
};

module.exports = burger;