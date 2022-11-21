const test = require('../../src/controllers/solveController/SDS');
const { getMockReq, getMockRes } = require('@jest-mock/express');

const mock = {
  "R1": [
    [
      "c"
    ]
  ],
  "R2": [
    [
      "b"
    ]
  ],
  "R3": [
    [
      "b"
    ]
  ],
  "ENSINO": "2",
  "VENDAS": "4",
  "MECANICA": "7",
  "ARTISTICA": "4",
  "CIENTIFICA": "6"
}

const result = {
  "SOMA": {
    "A": NaN,
    "C": NaN,
    "E": NaN,
    "I": NaN,
    "R": NaN,
    "S": NaN
  },
  "CARREIRAS": {
    "R": 1
  },
  "ATIVIDADES": {
    "R": 1
  },
  "HABILIDADES": {
    "ADMINISTRATIVA": undefined,
    "ENSINO": "2",
    "GERENCIAL": undefined,
    "INTERPESSOAL": undefined,
    "MANUAL": undefined,
    "VENDAS": "4",
    "MECANICA": "7",
    "MUSICAL": undefined,
    "NUMERICA": undefined,
    "TECNOLOGICA": undefined,
    "ARTISTICA": "4",
    "CIENTIFICA": "6"
  },
  "COMPETENCIAS": {
    "R": 1
  }
}

describe('solve SDS', () => {
  describe('testes de validação', () => {
    it('deve resolver o SDS', async () => {
      const response = await test.solve(mock);

      expect(response).toEqual(result);
    })
  });
});