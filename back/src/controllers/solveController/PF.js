const configPF = require('../config/PFISTER');

module.exports = {

    async solve(data) {

        let PF = {
            AZUL_1: 0,
            AZUL_2: 0,
            AZUL_3: 0,
            AZUL_4: 0,
            VERMELHO_1: 0,
            VERMELHO_2: 0,
            VERMELHO_3: 0,
            VERMELHO_4: 0,
            VERDE_1: 0,
            VERDE_2: 0,
            VERDE_3: 0,
            VERDE_4: 0,
            VIOLETA_1: 0,
            VIOLETA_2: 0,
            VIOLETA_3: 0,
            LARANJA_1: 0,
            LARANJA_2: 0,
            AMARELO_1: 0,
            AMARELO_2: 0,
            MARROM_1: 0,
            MARROM_2: 0,
            PRETO_1: 0,
            BRANCO_1: 0,
            CINZA_1: 0,
            SOMA: {
                AZUL: 0,
                VERMELHO: 0,
                VERDE: 0,
                VIOLETA: 0,
                LARANJA: 0,
                AMARELO: 0,
                MARROM: 0,
                PRETO: 0,
                BRANCO: 0,
                CINZA: 0,
            }
        };

        let respostas = Array(3);

        for (let i = 0; i < 3; i++) {
            for (const [key, value] of Object.entries(data[i])) {
                switch (configPF[key][value]) {

                    case 'azul1':
                        PF.AZUL_1 += 1;
                        PF.SOMA.AZUL += 1;
                        break;
                    case 'azul2':
                        PF.AZUL_2 += 1;
                        PF.SOMA.AZUL += 1;
                        break;
                    case 'azul3':
                        PF.AZUL_3 += 1;
                        PF.SOMA.AZUL += 1;
                        break;
                    case 'azul4':
                        PF.AZUL_4 += 1;
                        PF.SOMA.AZUL += 1;
                        break;

                    case 'vermelho1':
                        PF.VERMELHO_1 += 1;
                        PF.SOMA.VERMELHO += 1;
                        break;
                    case 'vermelho2':
                        PF.VERMELHO_2 += 1;
                        PF.SOMA.VERMELHO += 1;
                        break;
                    case 'vermelho3':
                        PF.VERMELHO_3 += 1;
                        PF.SOMA.VERMELHO += 1;
                        break;
                    case 'vermelho4':
                        PF.VERMELHO_4 += 1;
                        PF.SOMA.VERMELHO += 1;
                        break;

                    case 'verde1':
                        PF.VERDE_1 += 1;
                        PF.SOMA.VERDE += 1;
                        break;
                    case 'verde2':
                        PF.VERDE_2 += 1;
                        PF.SOMA.VERDE += 1;
                        break;
                    case 'verde3':
                        PF.VERDE_3 += 1;
                        PF.SOMA.VERDE += 1;
                        break;
                    case 'verde4':
                        PF.VERDE_4 += 1;
                        PF.SOMA.VERDE += 1;
                        break;

                    case 'violeta1':
                        PF.VIOLETA_1 += 1;
                        PF.SOMA.VIOLETA += 1;
                        break;
                    case 'violeta2':
                        PF.VIOLETA_2 += 1;
                        PF.SOMA.VIOLETA += 1;
                        break;
                    case 'violeta3':
                        PF.VIOLETA_3 += 1;
                        PF.SOMA.VIOLETA += 1;
                        break;

                    case 'amarelo1':
                        PF.AMARELO_1 += 1;
                        PF.SOMA.AMARELO += 1;
                        break;
                    case 'amarelo2':
                        PF.AMARELO_2 += 1;
                        PF.SOMA.AMARELO += 1;
                        break;

                    case 'laranja1':
                        PF.LARANJA_1 += 1;
                        PF.SOMA.LARANJA += 1;
                        break;
                    case 'laranja2':
                        PF.LARANJA_2 += 1;
                        PF.SOMA.LARANJA += 1;
                        break;

                    case 'marrom1':
                        PF.MARROM_1 += 1;
                        PF.SOMA.MARROM += 1;
                        break;
                    case 'marrom2':
                        PF.MARROM_2 += 1;
                        PF.SOMA.MARROM += 1;
                        break;

                    case 'preto':
                        PF.PRETO_1 += 1;
                        PF.SOMA.PRETO += 1;
                        break;
                    case 'branco':
                        PF.BRANCO_1 += 1;
                        PF.SOMA.BRANCO += 1;
                        break;
                    case 'cinza':
                        PF.CINZA_1 += 1;
                        PF.SOMA.CINZA += 1;
                        break;

                    default:
                        break;
                }
            }

            respostas[i] = PF;

            PF = {
                AZUL_1: 0,
                AZUL_2: 0,
                AZUL_3: 0,
                AZUL_4: 0,
                VERMELHO_1: 0,
                VERMELHO_2: 0,
                VERMELHO_3: 0,
                VERMELHO_4: 0,
                VERDE_1: 0,
                VERDE_2: 0,
                VERDE_3: 0,
                VERDE_4: 0,
                VIOLETA_1: 0,
                VIOLETA_2: 0,
                VIOLETA_3: 0,
                LARANJA_1: 0,
                LARANJA_2: 0,
                AMARELO_1: 0,
                AMARELO_2: 0,
                MARROM_1: 0,
                MARROM_2: 0,
                PRETO_1: 0,
                BRANCO_1: 0,
                CINZA_1: 0,
                SOMA: {
                    AZUL: 0,
                    VERMELHO: 0,
                    VERDE: 0,
                    VIOLETA: 0,
                    LARANJA: 0,
                    AMARELO: 0,
                    MARROM: 0,
                    PRETO: 0,
                    BRANCO: 0,
                    CINZA: 0,
                }
            }
        }

        return { respostas, data };
    },

}