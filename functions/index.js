require('regenerator-runtime');
const admin = require('firebase-admin');
const builtFunctions = require('./build').default;

admin.initializeApp();

Object.keys(builtFunctions).forEach((funcName) => {
  exports[funcName] = builtFunctions[funcName];
});
