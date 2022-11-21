const test = require('../../src/controllers/solveController/II');
const { getMockReq, getMockRes } = require('@jest-mock/express');

const mock = {
  "q1a": false,
  "q1b": true
}

const mockFail = {
  "q1a": undefined,
}

const result = {
  "A": 0,
  "B": 0,
  "C": 0,
  "L": 0,
  "M": 0,
  "P": 0,
  "S": 0,
  "CB": 0,
  "CF": 1
}

const resultFail = {
  "A": 0,
  "B": 0,
  "C": 0,
  "L": 0,
  "M": 0,
  "P": 0,
  "S": 0,
  "CB": 0,
  "CF": 0
}

describe('solve II', () => {
  describe('testes de validação', () => {
    it('deve resolver o II', async () => {
      const response = await test.solve(mock);

      expect(response).toEqual(result);
    })
  });

  describe('testes de defeito', () => {
    it('erro ao resolver o II', async () => {
      const response = await test.solve(mockFail);

      expect(response).toEqual(resultFail);
    })
  });

});