const configAPPG = require('../config/APPG');

module.exports = {

    async solve(data) {
        let A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0;
        let K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0;
        for (const [key, value] of Object.entries(data)) {
            switch (configAPPG[key][value]) {

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
                case 'K':
                    K += 1;
                    break;
                case 'L':
                    L += 1;
                    break;
                case 'M':
                    M += 1;
                    break;
                case 'N':
                    N += 1;
                    break;
                case 'O':
                    O += 1;
                    break;
                case 'P':
                    P += 1;
                    break;
                case 'Q':
                    Q += 1;
                    break;
                case 'R':
                    R += 1;
                    break;
                case 'S':
                    S += 1;
                    break;
                case 'T':
                    T += 1;
                    break;
                default:
                    break;
            }
        }
        return { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T };
    },

}