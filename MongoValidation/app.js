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
	tags: [String],
	data: { type: Date, default: Date.now },
	name: {
		type: String,
		required: true,
		// Additional built in feature
		minlength: 5,
		maxlength: 255,
		// Can pass a regex 
		// match:

	},
	// Additional built in feature
	catagory: {
		type: String,
		required: true,
		enum: ['web', 'mobile', 'network']
	},
	author: String,
	isPublished: Boolean,
	/// this is a boolean
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
		catagory: 'web',
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
		console.log(ex.message)
	}
};



async function run() {
	const courses = await createCourse();
	console.log(courses)
}
run();
