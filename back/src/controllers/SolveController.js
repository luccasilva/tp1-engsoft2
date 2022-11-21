const Usuario = require('../models/Usuario');
const Prova = require('../models/Prova');
const AIP = require('./solveController/AIP');
const APPG = require('./solveController/APPG');
const Ficha = require('./solveController/Ficha');
const G36 = require('./solveController/G36');
const II = require('./solveController/II');
const PF = require('./solveController/PF');
const SDS = require('./solveController/SDS');

module.exports = {

    async responder(req, res) {
        const { form, data } = req.body;
        const current = await Prova.findOne({
            where: {
                usuario_id: req.UsuarioId,
                teste_id: form
            },
        });

        let resultadoTeste = null;

        if (current) {
            switch (form) {
                case 1:
                    resultadoTeste = await AIP.solve(data);
                    break;
                case 2:
                    resultadoTeste = await APPG.solve(data);
                    break;
                case 3:
                    resultadoTeste = await Ficha.solve(data);

                    await Usuario.update({
                        nome: data.nome
                    }, {
                        where: {
                            id: req.UsuarioId
                        }
                    })

                    break;
                case 4:
                    resultadoTeste = await G36.solve(data);
                    break;
                case 5:
                    resultadoTeste = await II.solve(data);
                    break;
                case 6:
                    resultadoTeste = await PF.solve(data);
                    break;
                case 7:
                    resultadoTeste = await SDS.solve(data);
                    break;
                default:
                    throw new Error("id inválido");
            }
            await Prova.update({
                respostas: data,
                resultado: resultadoTeste
            }, {
                where: {
                    id: current.id
                }
            })
            return res.status(200).end();
        }
        return res.status(401).end();
    },

}