const configG36 = require('../config/g36');

module.exports = {

    async solve(data) {
        let acertos = 0, errosA = 0, errosB = 0, errosC = 0;
        for (const [key, value] of Object.entries(data)) {
            switch (configG36[key][value]) {
                case 'A':
                    errosA += 1;
                    break;
                case 'B':
                    errosB += 1;
                    break;
                case 'C':
                    errosC += 1;
                    break;
                default:
                    acertos += 1;
                    break;
            }
        }
        return { acertos, errosA, errosB, errosC };
    }

}