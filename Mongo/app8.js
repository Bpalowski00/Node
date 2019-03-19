
// /////////////////////////////////////////////
// // Update Document
// /////////////////////////////////////////////

// /// Connect
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
// 	.then(() => {
// 		console.log("Connected to mongo DB...")
// 	})
// 	.catch((err) => {
// 		console.log("Problem Connecting to mongDB", err)
// 	})

// // Create the Schema
// const courseSchema = new mongoose.Schema({
// 	name: String,
// 	author: String,
// 	tags: [String],
// 	date: { type: Date, default: Date.now },
// 	isPublished: Boolean
// })


// /////////////////////////////////////////////
// // Update Document
// /////////////////////////////////////////////

// const Course = mongoose.model('Course', courseSchema);


// async function getCourses() {
// 	const courses = await Course
// 		.find({
// 			author: 'Test Author',
// 			isPublished: true
// 		})
// 		.limit(10)
// 		.sort({
// 			name: 1
// 		})
// 		.select({
// 			name: 1,
// 			tags: 1
// 		})
// 	console.log(courses);
// }
// getCourses();


// async function updateCourse(id) {
// 	/// Query 
// 	// find by Id
// 	const course = await Course.findById(id);
// 	if (!course) return;
// 	// Modify its properties
// 	course.set({
// 		isPublished: true,
// 		author: 'Yet Author'
// 	})
// 	// save()
// 	const result = await course.save()

// 	//Approach: Update First
// 	console.log(result);
// }
// updateCourse('5c9054c0d84de731e51d9a45');