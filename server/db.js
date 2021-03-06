const mongoose = require('mongoose');
const { MONGOURI, MONGOURI2 } = require('./key');
//const config = require('config');
//const db = config.get('mongoURI2');

// const connectDB = () => {
// 	mongoose
// 		.connect(db, {
// 			useNewUrlParser: true,
// 			useCreateIndex: true,
// 			useUnifiedTopology: true,
// 			//useFindAndModify: false
// 		})
// 		.then(() => console.log('MongoDB Connected'))
// 		.catch((err) => {
// 			console.error(err.message);
// 			process.exit(1);
// 		});
// };

/* Async function */

// const connectDB = async () => {
// 	try {
// 		await mongoose.connect(db, {
// 			useNewUrlParser: true,
// 			useCreateIndex: true,
// 			useUnifiedTopology: true,
// 			//useFindAndModify: false
// 		});
// 		console.log('MongoDB Connected...');
// 	} catch (err) {
// 		console.error(err.message);
// 		process.exit(1);
// 	}
// };

const connectDB = async () => {
	try {
		await mongoose.connect(MONGOURI2, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			//useFindAndModify: false
		});
		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
