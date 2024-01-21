const mongoose = require('mongoose');

const DB = 'mongodb+srv://place:place@cluster0.iauzzyg.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
