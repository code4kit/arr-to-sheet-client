'use strict';

/**
 * @fileOverview sample.js
 *
 * @author
 * @author waricoma
 * @version 1.0.0
 */

const arrToSheetClient = require('./src');

const endPoint = 'http://localhost:3000';
const token = 'sample';
const docKey = '1EgPQuTuC2OazDFQotgRaAflBpqOXpLJpYgWzEShHoRo';
const sheetName = 'Sheet1';
const task = [
  [0, 1, 2],
  [3, 4, 5],
  ['=SUM(A1+A2)', '=SUM(B1+B2)', '=SUM(C1+C2)']
];
const option = {
  clear: true,
  resize: true
};

arrToSheetClient(endPoint, token, docKey, sheetName, task, option, (err) => {
  if (err) {
    throw new Error(err);
  }

  console.log('finished');
});
