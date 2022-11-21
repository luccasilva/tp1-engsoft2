const test = require('../../src/controllers/solveController/PF');
const { getMockReq, getMockRes } = require('@jest-mock/express');

const mock = [
  {
    "cor1": "#ffffff",
    "cor2": "#ffffff",
    "cor3": "#ffffff",
    "cor4": "#ffffff",
    "cor5": "#ffff07",
    "cor6": "#ffffff",
    "cor7": "#ffffff",
    "cor8": "#ffff07",
    "cor9": "#ffff07",
    "cor10": "#ffffff",
    "cor11": "#ffffff",
    "cor12": "#ffffff",
    "cor13": "#ffffff",
    "cor14": "#ffffff",
    "cor15": "#ffffff"
  },
  {
    "cor1": "#ffffff",
    "cor2": "#ffffff",
    "cor3": "#ffffff",
    "cor4": "#ffffff",
    "cor5": "#b16d49",
    "cor6": "#ffffff",
    "cor7": "#ffffff",
    "cor8": "#b16d49",
    "cor9": "#b16d49",
    "cor10": "#ffffff",
    "cor11": "#ffffff",
    "cor12": "#ffffff",
    "cor13": "#ffffff",
    "cor14": "#ffffff",
    "cor15": "#ffffff"
  },
  {
    "cor1": "#ffffff",
    "cor2": "#ffffff",
    "cor3": "#ffffff",
    "cor4": "#ffffff",
    "cor5": "#ff4627",
    "cor6": "#ffffff",
    "cor7": "#ffffff",
    "cor8": "#ff4627",
    "cor9": "#ff4627",
    "cor10": "#ffffff",
    "cor11": "#ffffff",
    "cor12": "#ffffff",
    "cor13": "#ffffff",
    "cor14": "#ffffff",
    "cor15": "#ffffff"
  }
]

const result = {
  "data": [
    {
      "cor1": "#ffffff",
      "cor2": "#ffffff",
      "cor3": "#ffffff",
      "cor4": "#ffffff",
      "cor5": "#ffff07",
      "cor6": "#ffffff",
      "cor7": "#ffffff",
      "cor8": "#ffff07",
      "cor9": "#ffff07",
      "cor10": "#ffffff",
      "cor11": "#ffffff",
      "cor12": "#ffffff",
      "cor13": "#ffffff",
      "cor14": "#ffffff",
      "cor15": "#ffffff"
    },
    {
      "cor1": "#ffffff",
      "cor2": "#ffffff",
      "cor3": "#ffffff",
      "cor4": "#ffffff",
      "cor5": "#b16d49",
      "cor6": "#ffffff",
      "cor7": "#ffffff",
      "cor8": "#b16d49",
      "cor9": "#b16d49",
      "cor10": "#ffffff",
      "cor11": "#ffffff",
      "cor12": "#ffffff",
      "cor13": "#ffffff",
      "cor14": "#ffffff",
      "cor15": "#ffffff"
    },
    {
      "cor1": "#ffffff",
      "cor2": "#ffffff",
      "cor3": "#ffffff",
      "cor4": "#ffffff",
      "cor5": "#ff4627",
      "cor6": "#ffffff",
      "cor7": "#ffffff",
      "cor8": "#ff4627",
      "cor9": "#ff4627",
      "cor10": "#ffffff",
      "cor11": "#ffffff",
      "cor12": "#ffffff",
      "cor13": "#ffffff",
      "cor14": "#ffffff",
      "cor15": "#ffffff"
    }
  ],
  "respostas": [
    {
      "SOMA": {
        "AZUL": 0,
        "CINZA": 0,
        "PRETO": 0,
        "VERDE": 0,
        "BRANCO": 12,
        "MARROM": 0,
        "AMARELO": 3,
        "LARANJA": 0,
        "VIOLETA": 0,
        "VERMELHO": 0
      },
      "AZUL_1": 0,
      "AZUL_2": 0,
      "AZUL_3": 0,
      "AZUL_4": 0,
      "CINZA_1": 0,
      "PRETO_1": 0,
      "VERDE_1": 0,
      "VERDE_2": 0,
      "VERDE_3": 0,
      "VERDE_4": 0,
      "BRANCO_1": 12,
      "MARROM_1": 0,
      "MARROM_2": 0,
      "AMARELO_1": 3,
      "AMARELO_2": 0,
      "LARANJA_1": 0,
      "LARANJA_2": 0,
      "VIOLETA_1": 0,
      "VIOLETA_2": 0,
      "VIOLETA_3": 0,
      "VERMELHO_1": 0,
      "VERMELHO_2": 0,
      "VERMELHO_3": 0,
      "VERMELHO_4": 0
    },
    {
      "SOMA": {
        "AZUL": 0,
        "CINZA": 0,
        "PRETO": 0,
        "VERDE": 0,
        "BRANCO": 12,
        "MARROM": 3,
        "AMARELO": 0,
        "LARANJA": 0,
        "VIOLETA": 0,
        "VERMELHO": 0
      },
      "AZUL_1": 0,
      "AZUL_2": 0,
      "AZUL_3": 0,
      "AZUL_4": 0,
      "CINZA_1": 0,
      "PRETO_1": 0,
      "VERDE_1": 0,
      "VERDE_2": 0,
      "VERDE_3": 0,
      "VERDE_4": 0,
      "BRANCO_1": 12,
      "MARROM_1": 3,
      "MARROM_2": 0,
      "AMARELO_1": 0,
      "AMARELO_2": 0,
      "LARANJA_1": 0,
      "LARANJA_2": 0,
      "VIOLETA_1": 0,
      "VIOLETA_2": 0,
      "VIOLETA_3": 0,
      "VERMELHO_1": 0,
      "VERMELHO_2": 0,
      "VERMELHO_3": 0,
      "VERMELHO_4": 0
    },
    {
      "SOMA": {
        "AZUL": 0,
        "CINZA": 0,
        "PRETO": 0,
        "VERDE": 0,
        "BRANCO": 12,
        "MARROM": 0,
        "AMARELO": 0,
        "LARANJA": 3,
        "VIOLETA": 0,
        "VERMELHO": 0
      },
      "AZUL_1": 0,
      "AZUL_2": 0,
      "AZUL_3": 0,
      "AZUL_4": 0,
      "CINZA_1": 0,
      "PRETO_1": 0,
      "VERDE_1": 0,
      "VERDE_2": 0,
      "VERDE_3": 0,
      "VERDE_4": 0,
      "BRANCO_1": 12,
      "MARROM_1": 0,
      "MARROM_2": 0,
      "AMARELO_1": 0,
      "AMARELO_2": 0,
      "LARANJA_1": 0,
      "LARANJA_2": 3,
      "VIOLETA_1": 0,
      "VIOLETA_2": 0,
      "VIOLETA_3": 0,
      "VERMELHO_1": 0,
      "VERMELHO_2": 0,
      "VERMELHO_3": 0,
      "VERMELHO_4": 0
    }
  ]
}

describe('solve PF', () => {
  describe('testes de validação', () => {
    it('deve resolver o PF', async () => {
      const response = await test.solve(mock);

      expect(response).toEqual(result);
    })
  });
});