const path = require('path');

console.log(path.dirname('C:/Users/SuperComputer/Desktop/node/path_module/index.js'));
console.log(path.extname('C:/Users/SuperComputer/Desktop/node/path_module/index.js'));
console.log(path.basename('C:/Users/SuperComputer/Desktop/node/path_module/index.js'));
var wholePath = path.parse('C:/Users/SuperComputer/Desktop/node/path_module/index.js');

console.log(wholePath['root']);
console.log(wholePath['dir']);
console.log(wholePath['base']);
console.log(wholePath['ext']);
console.log(wholePath['name']);
 
