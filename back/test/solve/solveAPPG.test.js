const test = require('../../src/controllers/solveController/APPG');
const { getMockReq, getMockRes } = require('@jest-mock/express');

const mock = {
  q1: "b"
}

const mockFail = {
  q1: "d"
}

const result = {
  S: 1
}

describe('solve APPG', () => {
  describe('testes de validação', () => {
    it('deve resolver o APPG', async () => {
      const response = await test.solve(mock);

      expect(response).toEqual(result);
    })
  });

  describe('testes de defeito', () => {
    it('erro ao resolver o APPG', async () => {
      const response = await test.solve(mockFail);

      expect(response).toEqual({ "undefined": 1 });
    })
  });
});