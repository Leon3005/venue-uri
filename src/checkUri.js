const generateUri = require("./index");

const args = process.argv.slice(2);

const generatedUri = generateUri(...args);

console.log(generatedUri);
