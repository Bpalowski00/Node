
// /////////////////////////////////////////////
// // Get Course
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

// const Course = mongoose.model('Course', courseSchema);

// /////////////////////////////////////////////
// // Count returns how many documents 
// /////////////////////////////////////////////
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
// 		// .select({
// 		// 	name: 1,
// 		// 	tags: 1
// 		// })
// 		.count()
// 	console.log(courses);
// }
// getCourses();