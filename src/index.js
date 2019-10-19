'use strict';

/**
 * @fileOverview index.js
 *
 * @author
 * @author waricoma
 * @version 1.0.0
 */

const socketIoClient = require('socket.io-client');
const validationsErr = require('./lib/validations-err');

/**
 * main function
 * @param {string} endPoint you need to set string ( http://example.com ) to endPoint
 * @param {string} token you need to set string to token
 * @param {string} docKey you need to set string to docKey
 * @param {string} sheetName you need to set string to sheetName
 * @param {array} task you need to set 2d array to task
 * @param {array} option you need to set object to option if you set option
 * @param {function} cb callback function cb(err) called it when finished task
 */
const main = (endPoint, token, docKey, sheetName, task, option, cb) => {
  const msgForServer = {
    token: token,
    docKey: docKey,
    sheetName: sheetName,
    task: task,
    option: option
  };

  const validationsErrResult = validationsErr(msgForServer);

  if (validationsErrResult) {
    throw new Error();
  }

  const socket = socketIoClient(endPoint, {
    reconnection: true
  });

  socket.on('executionPropriety', (result) => {
    if (result) {
      socket.emit('task', msgForServer);
    }
  });

  socket.on('finish', () => {
    socket.disconnect();
    cb();
  });

  socket.on('err', (err) => {
    cb(err);
  });
};

module.exports = main;
