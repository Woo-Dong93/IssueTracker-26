/* eslint-disable */
require('dotenv').config();
const labelModel = require('../models/labelModel');
const labelService = require('../services/labelService');
const labelController = require('../controllers/labelController');

describe('label을 추가하는 api', () => {
  describe('Model Layer', () => {
    const userInfo = {
      title: 'feat',
      description: 'feature label',
      color: '#000000'
    }
    test('label 정보가 모두 들어왔을 경우', async () => {
      expect(await labelModel.createLabel(userInfo)).toBeGreaterThan(0);
    });

    const optionUserInfo = {
      title: 'feat',
      description: '',
      color: '#000000'
    }
    test('label 옵션을 뺀 정보가 모두 들어왔을 경우', async () => {
      expect(await labelModel.createLabel(optionUserInfo)).toBeGreaterThan(0);
    });

    const missUserInfo = {
      color: '#000000'
    }

    test('label 필수 정보가 모두 들어오지 않을 경우', () => {
      expect(() => labelModel.createLabel(missUserInfo).toThrow());
      // expect(await labelModel.createLabel(missUserInfo)).toBeUndefined();
    });
    
    const wrongUserInfo = {
      content: 'asdfasfd',
    }
    test('label 정보가 아닌 값이 들어왔을 경우', () => {
      expect(() => labelModel.createLabel(wrongUserInfo).toThrow());
      // expect(await labelModel.createLabel(wrongUserInfo)).toBeUndefined();
    });
  });

  describe('Service Layer', () => {
    const userInfo = {
      title: 'feat',
      description: 'feature label',
      color: '#000000'
    }
    test('label 정보가 모두 들어왔을 경우', async () => {
      expect(await labelService.createLabel(userInfo)).toBeGreaterThan(0);
    });

    const optionUserInfo = {
      title: 'feat',
      description: '',
      color: '#000000'
    }
    test('label 옵션을 뺀 정보가 모두 들어왔을 경우', async () => {
      expect(await labelService.createLabel(optionUserInfo)).toBeGreaterThan(0);
    });

    const missUserInfo = {
      color: '#000000'
    }
    test('label 필수 정보가 모두 들어오지 않을 경우', () => {
      expect(() => labelService.createLabel(missUserInfo).toThrow());
      // expect(await labelService.createLabel(missUserInfo)).toBeUndefined();
    });

    const wrongUserInfo = {
      content: 'asdfasfd',
    }
    test('label 정보가 아닌 값이 들어왔을 경우', () => {
      expect(() => labelService.createLabel(wrongUserInfo).toThrow());
      // expect(await labelService.createLabel(wrongUserInfo)).toBeUndefined();
    });
  });

  describe('Controller Layer', () => {
    const res = {};
    beforeAll(() => {
      res.status = function (code) {
        this.code = code;
        return this;
      };
      res.end = function () {
        return this.code;
      };
    });

    const req = { body: { title: 'feat', description: 'feature label', color: '#000000' } };
    test('label 정보가 모두 들어왔을 경우', async () => {
      console.log(req.body);
      const status = await labelController.createLabel(req, res);
      expect(status).toEqual(201);
    }); 

    const optionReq = { body: { title: 'feat', description: '', color: '#000000' } };
    test('label 옵션을 뺀 정보가 모두 들어왔을 경우', async () => {
      console.log(req.body);
      const status = await labelController.createLabel(optionReq, res);
      expect(status).toEqual(201);
    });

    const missRes = { body: { color: '#000000' } };
    test('label 필수 정보가 모두 들어오지 않을 경우', async () => {
      const status = await labelController.createLabel(missRes, res);
      expect(status).toEqual(400);
    });

    const wrongReq = { body: { content: 'feat' } };
    test('label 정보가 아닌 값이 들어왔을 경우', async () => {
      const status = await labelController.createLabel(wrongReq, res);
      expect(status).toEqual(400);
    });
  });
});