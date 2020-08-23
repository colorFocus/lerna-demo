var test = require('workspace-a');
var cloneDeep = require('lodash/cloneDeep');

test();

var obj = {a:1};
var obj2 = cloneDeep(obj);

console.log(obj2);