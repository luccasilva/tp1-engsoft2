const configII = require('../config/II');

module.exports = {

    async solve(data) {
        let CF = 0, CB = 0, C = 0, P = 0, B = 0, S = 0, L = 0, A = 0, M = 0;
        for (const [key, value] of Object.entries(data)) {
            switch (configII[key][value]) {
                case 'CF':
                    CF += 1;
                    break;
                case 'CB':
                    CB += 1;
                    break;
                case 'C':
                    C += 1;
                    break;
                case 'P':
                    P += 1;
                    break;
                case 'B':
                    B += 1;
                    break;
                case 'S':
                    S += 1;
                    break;
                case 'L':
                    L += 1;
                    break;
                case 'A':
                    A += 1;
                    break;
                case 'M':
                    M += 1;
                    break;
                case 'X':
                    break;
                default:
                    break;
            }
        }
        return { CF, CB, C, P, B, S, L, A, M };
    },

}