const test = require('../../src/controllers/solveController/G36');
const { getMockReq, getMockRes } = require('@jest-mock/express');

const mock = {
  "q1": "5",
  "q2": "4",
  "q3": "4",
  "q4": "4",
  "q5": "6"
}

const result = {
  "errosA": 1,
  "errosB": 2,
  "errosC": 0,
  "acertos": 2
}

describe('solve G36', () => {
  describe('testes de validação', () => {
    it('deve resolver o G36', async () => {
      const response = await test.solve(mock);

      expect(response).toEqual(result);
    })
  });
});