const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


/////////////////////////////////////////////
// Create Mongoose Schema 
/////////////////////////////////////////////

const customerSchema = new mongoose.Schema({
	name: { type: String, required: true, minlength: 5, maxlength: 50 },

	isGold: { type: Boolean, default: false },
	phone: { type: Number, required: true, minlength: 5, maxlength: 10 }
})

/////////////////////////////////////////////
// Mongoose Model / Class
/////////////////////////////////////////////
const Customer = mongoose.model('Customer', customerSchema);


//////////////////////////////////////////
// Get All 
/////////////////////////////////////////////
router.get('/', async (req, res) => {
	const customers = await Customer
		.find()
		.sort({
			name: 1
		})
	return res.send(customers);
})

//////////////////////////////////////////
// Update /Post
/////////////////////////////////////////////

router.post('/', async (req, res) => {
	// Joi Validation
	const { error } = validateCourse(req.body);

	if (error) {
		return res.status(404).send(error.details[0].message);
	}

	let customer = new Customer({
		name: req.body.name,
		phone: req.body.phone,
		isGold: req.body.isGold
	});
	customer = await customer.save()
	res.send(customer);
})
/////////////////////////////////////////////
// Validate Fuction 
/////////////////////////////////////////////

function validateCourse(info) {
	// Get the Object 
	const schema = {
		name: Joi.string().min(5).max(50).required(),
		phone: Joi.string().min(5).max(50).required(),
		isGold: Joi.boolean()
	}
	return Joi.validate(info, schema);
}



module.exports = router;