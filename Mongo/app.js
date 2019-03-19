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
// async function creatCourse() {
// 	const course = new Course({
// 		name: 'Test Name',
// 		author: "Test Author",
// 		tags: ['tag1', 'tag2'],
// 		isPublished: true
// 	});
// 	const result = await course.save();
// 	console.log(result);
// }
// creatCourse();

