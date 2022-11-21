const profissoesController = require('../../src/controllers/ProfissoesController');
const { getMockReq, getMockRes } = require('@jest-mock/express');

jest.mock('../../src/models/Curso', () => {
  const SequelizeMock = require('sequelize-mock');
  const dbMock = new SequelizeMock();
  return dbMock.define('Curso')
});

describe('listar profissoes', () => {
  describe('testes de validação', () => {
    it('deve listar as profissões', async () => {
      const Curso = require('../../src/models/Curso');
      Curso.findAll = async () => [{ nome: 'Curso Thais', descricao: 'Descricao Curso', site: 'Site Curso' }];

      const req = getMockReq();
      const { res } = getMockRes();

      await profissoesController.listarProfissoes(req, res);

      expect(res.json).toHaveBeenCalledWith([{ nome: 'Curso Thais', descricao: 'Descricao Curso', site: 'Site Curso' }]);
    })
  });

  describe('testes de defeito', () => {
    it('deve falhar para problemas com o banco de dados', async () => {
      const Curso = require('../../src/models/Curso');
      Curso.findAll = async () => { throw new Error() };

      const req = getMockReq();
      const { res } = getMockRes();

      try {
        await profissoesController.listarProfissoes(req, res);
      } catch (error) {
        expect(error).toBeDefined();
      }
      expect.assertions(1);
    });
  });
});