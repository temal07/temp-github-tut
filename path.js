const path = require('path');

// Join multiple paths together.
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// path.basename() takes 2 arguments. First argument is required (gives the base name - the end of the path).
// second argument is optional, if you include the second argument, which is the file extension, it will be
// excluded.
const base = path.basename(filePath, '.txt');
console.log(base);

// path.resolve() will give you the absolute basename from "C:\.... to the end."
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolutePath);
