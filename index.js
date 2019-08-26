// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertEqual = require('../assertEqual');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  assertEqual: assertEqual
  
};