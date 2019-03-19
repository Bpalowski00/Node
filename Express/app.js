const express = require('express');
const Joi = require('joi');
const app = express();


// Middleweare when req it turn into json.
app.use(express.json())


const fakeData = [
	{ id: 1, name: "test1" },
	{ id: 2, name: "test3" }
]



app.get('/api/courses', (req, res) => {
	return res.send(fakeData);
})



app.get('/api/courses/:id', (req, res) => {
	const info = fakeData.find(c => c.id === parseInt(req.params.id));
	if (!info) {
		res.status(404).send("no good")
	}
	return res.send(info);
})


app.post('/api/courses', (req, res) => {
	// Joi Validation
	const { error } = validateCourse(req.body);
	if (error) {
		return res.status(404).send(error.details[0].message);

	}
	const addInfo = {
		id: fakeData.length + 1,
		name: req.body.name
	}
	fakeData.push(addInfo);
	res.send(addInfo);
})


app.put('/api/courses/:id', (req, res) => {
	// Get the Info
	const info = fakeData.find(c => c.id === parseInt(req.params.id));
	if (!info) {
		return res.status(404).send("no good")
	}
	// // Get the Object 

	// const result = validateCourse(req.body);
	// if (result.error) {
	// 	return res.status(404).send(info.error.details[0].message);
	// }
	const { error } = validateCourse(req.body);
	if (error) {
		return res.status(404).send(error.details[0].message);
	}
	// get the info object passed in 
	info.name = req.body.name;
	// return obj
	return res.send(info);
});

s
app.delete('/api/courses/:id', (req, res) => {
	const info = fakeData.find(c => c.id === parseInt(req.params.id));
	if (!info) {
		return res.status(404).send("no good")
	}
	const index = fakeData.indexOf(info);
	fakeData.splice(index, 1);
	return res.send(info);
})


function validateCourse(info) {
	// Get the Object 
	const schema = {
		name: Joi.string().min(3).required()
	}
	return Joi.validate(info, schema);
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
	return console.log(`Listeneing to Port ${port}`);
})