const configAIP = require('../config/AIP');

module.exports = {

    async solve(data) {
        let A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0;
        for (const [key, value] of Object.entries(data)) {
            switch (configAIP[key][value]) {

                case 'A':
                    A += 1;
                    break;
                case 'B':
                    B += 1;
                    break;
                case 'C':
                    C += 1;
                    break;
                case 'D':
                    D += 1;
                    break;
                case 'E':
                    E += 1;
                    break;
                case 'F':
                    F += 1;
                    break;
                case 'G':
                    G += 1;
                    break;
                case 'H':
                    H += 1;
                    break;
                case 'I':
                    I += 1;
                    break;
                case 'J':
                    J += 1;
                    break;

                case 'A2':
                    A += 0.5;
                    break;
                case 'B2':
                    B += 0.5;
                    break;
                case 'C2':
                    C += 0.5;
                    break;
                case 'D2':
                    D += 0.5;
                    break;
                case 'E2':
                    E += 0.5;
                    break;
                case 'F2':
                    F += 0.5;
                    break;
                case 'G2':
                    G += 0.5;
                    break;
                case 'H2':
                    H += 0.5;
                    break;
                case 'I2':
                    I += 0.5;
                    break;
                case 'J2':
                    J += 0.5;
                    break;
                default:
                    break;
            }
        }
        return { A, B, C, D, E, F, G, H, I, J };
    },

}