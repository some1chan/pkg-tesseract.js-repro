const Tesseract = require("tesseract.js");

async function _createWorker() {
	await Tesseract.createWorker();
	console.log("Successfully created worker!");
}

console.log("Attempting to create worker");
_createWorker();
