const test = require('../../src/controllers/solveController/AIP');
const { getMockReq, getMockRes } = require('@jest-mock/express');

const mock = {
  "t1": "t1",
  "t9": "t9",
  "y3": "y3",
  "y4": false,
  "y5": false,
  "y6": "y6",
  "y7": false,
  "y8": "y8"
}

const mockFail = {
  "t1": "d2",
}

const result = {
  "A": 2,
  "F": 1,
  "I": 0.5,
  "J": 0.5
}

describe('solve AIP', () => {
  describe('testes de validação', () => {
    it('deve resolver o AIP', async () => {
      const response = await test.solve(mock);

      expect(response).toEqual(result);
    })
  });

  describe('testes de defeito', () => {
    it('erro ao resolver o AIP', async () => {
      const response = await test.solve(mockFail);

      expect(response).toEqual({});
    })
  });
});