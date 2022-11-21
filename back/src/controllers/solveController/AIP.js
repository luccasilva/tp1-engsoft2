const configAIP = require('../config/AIP');

module.exports = {

    async solve(data) {
        const obj = {};
        for (const [key, value] of Object.entries(data)) {
            if (!configAIP[key][value]) {
                continue;
            }
            const letter = configAIP[key][value].slice(0, 1);
            const variation = configAIP[key][value].slice(1, 2);
            if (!obj[letter]) {
                obj[letter] = 0;
            }
            if (variation == '') {
                obj[letter] += 1;
            }
            if (variation == '2') {
                obj[letter] += 0.5;
            }
        }
        return obj;
    },

}