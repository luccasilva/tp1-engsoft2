const configAPPG = require('../config/APPG');

module.exports = {

    async solve(data) {
        const obj = {};
        for (const [key, value] of Object.entries(data)) {
            if (!obj[configAPPG[key][value]]) {
                obj[configAPPG[key][value]] = 0;
            }
            obj[configAPPG[key][value]] += 1;
        }
        return obj;
    },

}