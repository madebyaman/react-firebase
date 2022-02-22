require('regenerator-runtime');
const functions = require('firebase-functions');
const builtFunctions = require('./build');

Object.keys(builtFunctions).forEach((funcName) => {
  exports[funcName] = builtFunctions[funcName];
});
