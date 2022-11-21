const test = require('../../src/controllers/solveController/Ficha');
const { getMockReq, getMockRes } = require('@jest-mock/express');

const mock = {
  "mae": "Josefa",
  "pai": "Jose",
  "nome": "Teste Completo",
  "email": "silva@gmail.com",
  "serie": "7 Periodo",
  "escola": "UFMG",
  "celular": "31988558855",
  "endereco": "Rua Carvalhais de Oliveira",
  "telefone": "31988558877",
  "indicacao": "Ning",
  "nascimento": "2020-01-01",
  "naturalidade": "Belo Horizonte"
}

describe('solve ficha', () => {
  describe('testes de validação', () => {
    it('deve resolver a ficha', async () => {
      const response = await test.solve(mock);

      expect(response).toEqual(mock);
    })
  });
});