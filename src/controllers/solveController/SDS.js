module.exports = {

    async solve(data) {
        const ATIVIDADES = {
            R: data.R1[0].length || ""
        };

        const COMPETENCIAS = {
            R: data.R2[0].length || ""
        };

        const CARREIRAS = {
            R: data.R3[0].length || ""
        };

        const HABILIDADES = {
            MECANICA: data.MECANICA,
            CIENTIFICA: data.CIENTIFICA,
            ARTISTICA: data.ARTISTICA,
            ENSINO: data.ENSINO,
            VENDAS: data.VENDAS,
            ADMINISTRATIVA: data.ADMINISTRATIVA,
            MANUAL: data.MANUAL,
            NUMERICA: data.NUMERICA,
            MUSICAL: data.MUSICAL,
            INTERPESSOAL: data.INTERPESSOAL,
            GERENCIAL: data.GERENCIAL,
            TECNOLOGICA: data.TECNOLOGICA
        };

        const SOMA = {
            R: parseInt(ATIVIDADES.R) + parseInt(COMPETENCIAS.R) + parseInt(CARREIRAS.R) + parseInt(HABILIDADES.MECANICA) + parseInt(HABILIDADES.MANUAL),
            I: parseInt(ATIVIDADES.I) + parseInt(COMPETENCIAS.I) + parseInt(CARREIRAS.I) + parseInt(HABILIDADES.CIENTIFICA) + parseInt(HABILIDADES.NUMERICA),
            A: parseInt(ATIVIDADES.A) + parseInt(COMPETENCIAS.A) + parseInt(CARREIRAS.A) + parseInt(HABILIDADES.ARTISTICA) + parseInt(HABILIDADES.MUSICAL),
            S: parseInt(ATIVIDADES.S) + parseInt(COMPETENCIAS.S) + parseInt(CARREIRAS.S) + parseInt(HABILIDADES.ENSINO) + parseInt(HABILIDADES.INTERPESSOAL),
            E: parseInt(ATIVIDADES.E) + parseInt(COMPETENCIAS.E) + parseInt(CARREIRAS.E) + parseInt(HABILIDADES.VENDAS) + parseInt(HABILIDADES.GERENCIAL),
            C: parseInt(ATIVIDADES.C) + parseInt(COMPETENCIAS.C) + parseInt(CARREIRAS.C) + parseInt(HABILIDADES.ADMINISTRATIVA) + parseInt(HABILIDADES.TECNOLOGICA),
        };

        return { ATIVIDADES, COMPETENCIAS, CARREIRAS, HABILIDADES, SOMA };
    },

}