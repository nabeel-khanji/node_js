import EventEmitter from 'events';
const event = new EventEmitter();
event.on('checkPage', (sc, msg) => console.log(`page is ${msg} with the status code of ${sc}`));
event.on('checkPage', () => console.log("Shakeel"));
event.on('checkPage', () => console.log("Khanjee"));

event.emit('checkPage', 200, 'ok');