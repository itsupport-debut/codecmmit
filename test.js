/*************Test******************/
var test = require('unit.js');
var str = 'Hello, world!123';

test.string(str).startsWith('Hello');

if (test.string(str).startsWith('Hello')) {
  console.log('Passed');
}
/***********************************/
