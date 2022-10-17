#!/usr/bin/node
const dict = require('./101-data.js').dict;
let newDict = {};
for (let key in dict) {
  if (newDict[dict[key]] === undefined) {
    newDict[dict[key]] = [key];
  } else {
    newDict[dict[key]].push(key);
  }
=======
const dict = require('./101-data').dict;
const dKeys = Object.keys(dict);
const values = Object.values(dict);
let matched;
const result = {};
// loop over the values
for (let i = 0; i < values.length; i++) {
  result[JSON.stringify(values[i])] = [];
  matched = dKeys.filter(key => dict[key] === values[i]);
  matched.forEach(item => result[JSON.stringify(values[i])].push(item));
>>>>>>> 7fc2773aa158efbf92cede0ed1b4df03a3e8fda8
}
console.log(result);
