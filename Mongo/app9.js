
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

// /////////////////////////////////////////////
// // Updating a document directly from DataBase with Update Method
// // Get Id and $set 
// /////////////////////////////////////////////
// async function updateCourse(id) {

	/////////////////// Update Document
	// const result = await Course.updateOne({ _id: id }, {
	// 	$set: {
	// 		author: 'Brian Is that man',
	// 		isPublished: false
	// 	}
	// });
	// console.log(result);

	/////////// Update Document as well with {new }
	// const course = await Course.findByIdAndUpdate(id, {
	// 	$set: {
	// 		author: 'Blanky',
	// 		isPublished: true
	// 	}
	// } ,{new: true});
	// console.log(course);

	///////////////////Look Up the document and see what it use to be
	// const course = await Course.findByIdAndUpdate(id, {
	// 	$set: {
	// 		author: 'Blanky',
	// 		isPublished: true
	// 	}
	// });
	// console.log(course);
// }
// updateCourse('5c9054c0d84de731e51d9a45');