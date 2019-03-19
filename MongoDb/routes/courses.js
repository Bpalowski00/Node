const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();




/////////////////////////////////////////////
// Create Mongoose Schema 
/////////////////////////////////////////////

const genereSchema = new mongoose.Schema({
	name: { type: String, required: true, minlength: 5, maxlength: 50 },
})

/////////////////////////////////////////////
// Mongoose Model / Class
/////////////////////////////////////////////
const Genere = mongoose.model('Genere', genereSchema);


/////////////////////////////////////////////
// Get All 
/////////////////////////////////////////////
router.get('/', async (req, res) => {
	const genere = await Genere
		.find()
		.sort({
			name: 1
		})
	return res.send(genere);
})


/////////////////////////////////////////////
// Update /Post
/////////////////////////////////////////////

router.post('/', async (req, res) => {
	// Joi Validation
	const { error } = validateCourse(req.body);

	if (error) {
		return res.status(404).send(error.details[0].message);
	}

	let genere = new Genere({ name: req.body.name });
	genere = await genere.save()
	res.send(genere);
})


/////////////////////////////////////////////
// Put 
/////////////////////////////////////////////


router.put('/:id', async (req, res) => {

	const { error } = validateCourse(req.body);
	if (error) {
		return res.status(404).send(error.details[0].message);
	}

	const genere = await Genere.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });

	// Get the Info
	if (!genere) {
		return res.status(404).send("no good")
	}
	// return obj
	return res.send(genere);
});




/////////////////////////////////////////////
// Delete 
/////////////////////////////////////////////


router.delete('/:id', async (req, res) => {

	const genere = await Genere.findByIdAndRemove(req.params.id);

	if (!genere) {
		return res.status(404).send("no good")
	}

	return res.send(genere);
})
/////////////////////////////////////////////
// Validate Fuction 
/////////////////////////////////////////////

function validateCourse(info) {
	// Get the Object 
	const schema = {
		name: Joi.string().min(3).required()
	}
	return Joi.validate(info, schema);
}

/////////////////////////////////////////////
// Get Specific by Id
/////////////////////////////////////////////
router.get('/:id', async (req, res) => {
	const genere = await Genere.findById(req.params.id);

	if (!info) {
		res.status(404).send("no good")
	}
	return res.send(genere);
})
module.exports = router;