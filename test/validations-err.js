'use strict';

/**
 * @fileOverview validations-err.js (test)
 *
 * @author
 * @author waricoma
 * @version 1.0.0
 */

const assert = require('assert');
const validationsErr = require('../src/lib/validations-err');

const masterMsgForTest = {
  token: 'sample',
  docKey: '1EgPQuTuC2OazDFQotgRaAflBpqOXpLJpYgWzEShHoRo',
  sheetName: 'Sheet1',
  task: [
    [0, 1, 2],
    [3, 4, 5],
    ['=SUM(A1+A2)', '=SUM(B1+B2)', '=SUM(C1+C2)']
  ],
  option: {
    clear: true,
    resize: true
  }
};

describe('ValidationsErr', () => {
  describe('test of token', () => {
    it('if forget to set token', () => {
      const msgForTest = Object.assign({}, masterMsgForTest);
      delete msgForTest.token;
      assert.strictEqual('you need to set token', validationsErr(msgForTest));
    });
    it('if set not string type data to token', () => {
      const msgForTest = Object.assign({}, masterMsgForTest);
      msgForTest.token = 100;
      assert.strictEqual('you need to set string to token', validationsErr(msgForTest));
      msgForTest.token = null;
      assert.strictEqual('you need to set string to token', validationsErr(msgForTest));
    });
  });

  describe('test of docKey', () => {
    it('if forget to set docKey', () => {
      const msgForTest = Object.assign({}, masterMsgForTest);
      delete msgForTest.docKey;
      assert.strictEqual('you need to set docKey', validationsErr(msgForTest));
    });
    it('if set not string type data to docKey', () => {
      const msgForTest = Object.assign({}, masterMsgForTest);
      msgForTest.docKey = 100;
      assert.strictEqual('you need to set string to docKey', validationsErr(msgForTest));
      msgForTest.docKey = null;
      assert.strictEqual('you need to set string to docKey', validationsErr(msgForTest));
    });
  });

  describe('test of sheetName', () => {
    it('if forget to set sheetName', () => {
      const msgForTest = Object.assign({}, masterMsgForTest);
      delete msgForTest.sheetName;
      assert.strictEqual('you need to set sheetName', validationsErr(msgForTest));
    });
    it('if set not string type data to sheetName', () => {
      const msgForTest = Object.assign({}, masterMsgForTest);
      msgForTest.sheetName = 100;
      assert.strictEqual('you need to set string to sheetName', validationsErr(msgForTest));
      msgForTest.sheetName = null;
      assert.strictEqual('you need to set string to sheetName', validationsErr(msgForTest));
    });
  });

  describe('test of task', () => {
    it('if forget to set task', () => {
      const msgForTest = Object.assign({}, masterMsgForTest);
      delete msgForTest.task;
      assert.strictEqual('you need to set task', validationsErr(msgForTest));
    });
    it('if set not array type data to task', () => {
      const msgForTest = Object.assign({}, masterMsgForTest);
      msgForTest.task = 100;
      assert.strictEqual('you need to set array to task', validationsErr(msgForTest));
      msgForTest.task = null;
      assert.strictEqual('you need to set array to task', validationsErr(msgForTest));
    });
  });

  describe('test of option', () => {
    it('if forget to set option, no problem', () => {
      const msgForTest = Object.assign({}, masterMsgForTest);
      delete msgForTest.option;
      assert.strictEqual(null, validationsErr(msgForTest));
    });
    it('if set not object type data to option', () => {
      const msgForTest = Object.assign({}, masterMsgForTest);
      msgForTest.option = 100;
      assert.strictEqual('you need to set object to option', validationsErr(msgForTest));
      msgForTest.option = null;
      assert.strictEqual('you need to set object to option', validationsErr(msgForTest));
    });
  });
});
