const mongoose = require('mongoose');

const timeSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	time: Number,
	description: String,
	duration: Number 
});

module.exports = mongoose.model('Time', timeSchema);