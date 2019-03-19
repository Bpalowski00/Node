
// /////////////////////////////////////////////
// //Query Logical Operators
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

// //_________Filter Query___________________________________
// async function getCourses() {
// 	/////////////////////////////////////////////
// 	//Query Logical Operators
// 	// or
// 	// and
// 	/////////////////////////////////////////////

// 	const courses = await Course
// 		// .find({
// 		// 	author: 'Test Author',
// 		// 	isPublished: true
// 		// })
// 		.find()
// 		.or([{ author: 'Brian' }, { isPublished: true }])
// 		.and([])
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