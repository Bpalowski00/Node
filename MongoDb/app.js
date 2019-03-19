const mongoose = require('mongoose');
const express = require('express');
const app = express();
const courses = require('./routes/courses');
const home = require('./routes/home');
const customers = require('./routes/customers');


///////////////////////////////////////////////
//						Connect to mongoDB
///////////////////////////////////////////////
mongoose.connect('mongodb://localhost/vidley', { useNewUrlParser: true })
	.then(() => {
		console.log("Connected to mongo DB...")
	})
	.catch((err) => {
		console.log("Problem Connecting to mongDB", err)
	})
// /////////////////////////////////////////////
//				Template Engine Pug
// /////////////////////////////////////////////

app.set('view engine', 'pug');
app.set('views', './views');

// /////////////////////////////////////////////
//							Middleweares
// /////////////////////////////////////////////
app.use(express.json())
app.use('/api/generes', courses);
app.use('/api/customers', customers);
app.use('/', home);

// /////////////////////////////////////////////
//Connect to Express Framework
// /////////////////////////////////////////////
const port = process.env.PORT || 3000;
app.listen(port, () => {
	return console.log(`Listeneing to Port ${port}`);
})