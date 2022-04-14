const os = require("os");

var arch = os.arch();
console.log(arch);

var type = os.type();
console.log(type);

var freeMemory = os.freemem();

console.log(`${freeMemory / 1024 / 1024 / 1024}`);

var actualMemory = os.totalmem();

console.log(`${actualMemory / 1024 / 1024 / 1024}`);
console.log(os.platform());
console.log(os.hostname());
console.log(os.tmpdir());