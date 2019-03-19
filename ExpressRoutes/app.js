const express = require('express');
const app = express();
const courses = require('./routes/courses');
const home = require('./routes/home');


// Middleweare when req it turn into json.
app.set('view engine', 'pug');
app.set('views', './views');


app.use(express.json())
app.use('/api/courses', courses);
app.use('/', home);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	return console.log(`Listeneing to Port ${port}`);
})
