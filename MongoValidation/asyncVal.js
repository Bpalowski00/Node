const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises', { useNewUrlParser: true })
	.then(() => {
		console.log('connected to mongodb...');
	})
	.catch((err) => {
		console.log('Could not connect to mongdb', err)
	})

////////// Validation example
const courseSchema = new mongoose.Schema({
	////	////	////	//// Custom Validation
	tags: {
		type: Array,

		validate: {
			////	////	////	//// Async Validation
			isAsync: true,
			validator: function (v) {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						/// if v has a value and the length is greater that 0
						const result = v && v.length > 0;
						resolve(result);
					}, 1000)
				})
			},
			message: 'A course should have at least one tag'
		}
	},

	data: { type: Date, default: Date.now },
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
		// Can pass a regex 
		// match:
	},
	catagory: {
		type: String,
		required: true,
		enum: ['web', 'mobile', 'network']
	},
	author: String,
	isPublished: Boolean,

	price: {
		type: Number,
		required: function () { return this.isPublished },
		min: 10,
		max: 200
	},
	__v: Number
})

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
	const course = new Course({
		name: 'Your Test',
		catagory: '-',
		author: 'Test1',
		tags: ['angular'],
		isPublished: true,
		price: 10
	});

	try {
		const result = await course.save();
		return result;
	}
	catch (ex) {
		for (field in ex.errors)
			console.log(ex.errors[field].message);
	}
};

async function run() {
	const courses = await createCourse();
	console.log(courses)
}
run();