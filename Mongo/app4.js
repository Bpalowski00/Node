
// /////////////////////////////////////////////
// //Query Operators 
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
// // Compare Query Operators 
// //eq = equal
// // ne = not equal
// // gt= greater than
// // gte= greater than or equal to
// // lt= less than
// // lte= less than or equal to
// // in
// // nin = not in

// /////////////////////////////////////////////

// const Course = mongoose.model('Course', courseSchema);
// //_________Filter Query___________________________________
// async function getCourses() {
// 	const courses = await Course
// 		// .find({
// 		// 	author: 'Test Author',
// 		// 	isPublished: true
// 		// })
// 		.find({
// 			// price: { $gte: 10 },
// 			// price: { $lte: 20 }
// 			price: { $in: [10, 15, 20] }
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