var database = require("../database/config");

function buscarUltimasMedidas(idArea, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas} temperatura, 
        CONVERT(varchar, dtHora, 108) as momento_grafico, 
        fkArea 
        from dados where fkArea = ${idArea} 
        order by idDado desc 
        ;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select areaTotal, fase_porcos, qtd_porcos, Temperatura_Min as tempMin, Temperatura_Max as tempMax, Temperatura_Baixa as tempBaixa, Temperatura_Alta as tempAlta, temperatura, dtHora, DATE_FORMAT(dtHora,'%H:%i:%s') as momento_grafico from dados join areas
        on idArea = fkArea where fkArea = ${idArea} order by idDado desc limit ${limite_linhas};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idArea) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 temperatura, 
        CONVERT(varchar, dtHora, 108) as momento_grafico, 
        fkArea 
        from dados where fkArea = ${idArea} 
        order by idDado desc ;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select areaTotal, fase_porcos, qtd_porcos, Temperatura_Min as tempMin, Temperatura_Max as tempMax, Temperatura_Baixa as tempBaixa, Temperatura_Alta as tempAlta, temperatura, dtHora, DATE_FORMAT(dtHora,'%H:%i:%s') as momento_grafico from dados join areas
        on idArea = fkArea where fkArea = ${idArea} order by idDado desc limit 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
