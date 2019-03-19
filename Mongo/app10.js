
/////////////////////////////////////////////
// Update Document
/////////////////////////////////////////////

/// Connect
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
	.then(() => {
		console.log("Connected to mongo DB...")
	})
	.catch((err) => {
		console.log("Problem Connecting to mongDB", err)
	})

// Create the Schema
const courseSchema = new mongoose.Schema({
	name: String,
	author: String,
	tags: [String],
	date: { type: Date, default: Date.now },
	isPublished: Boolean
})




const Course = mongoose.model('Course', courseSchema);
///////////////////////////////////////////
//Get Document
///////////////////////////////////////////

async function getCourses() {
	const courses = await Course
		.find({
			author: 'Test Author',
			isPublished: true
		})
		.limit(10)
		.sort({
			name: 1
		})
		.select({
			name: 1,
			tags: 1
		})
	console.log(courses);
}
getCourses();


///////////////////////////////////////////
//Update Document
///////////////////////////////////////////

async function updateCourse(id) {

	///////// Update Document as well with {new }
	const course = await Course.findByIdAndUpdate(id, {
		$set: {
			author: 'Blanky',
			isPublished: true
		}
	}, { new: true });
	console.log(course);
}

///////////////////////////////////////////
//Remove Document
///////////////////////////////////////////

async function removeCourse(id) {

	// const result = await Course.deleteOne({ _id: id });
	// or
	const course = await Course.findByIdAndDelete(id);
	console.log(course);
}
removeCourse('5c90b4317e81a1351a9381bf');


