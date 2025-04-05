const eventemitter = require('events');
const ee = new eventemitter();
ee.on('start', () => {
 console.log('started');
 });
 ee.emit('start');