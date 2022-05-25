var database = require("../database/config")

function listar() {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM empresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
<<<<<<< HEAD
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
=======
        SELECT * FROM usuario WHERE Email = '${email}' AND Senha = '${senha}';
>>>>>>> bc6035f1bbb0ab504afa53211eead48542ceb941
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nomeFantasia, cnpj, RazaoSocial, telefone, rua, numero, bairro, cidade, estado, cep) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeFantasia);
    
    var instrucao1 = `
        INSERT INTO Empresa (NomeFantasia, CNPJ, RazaoSocial, Telefone, Rua, Numero, Bairro, Cidade, Estado, CEP) VALUES
        ('${nomeFantasia}', '${cnpj}', '${RazaoSocial}', '${telefone}', '${rua}', '${numero}', '${bairro}', '${cidade}', '${estado}', '${cep}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao1);
    return database.executar(instrucao1);
}

function selecionarFkEmpresa() {
    console.log("Chegou na SelecionarFkEmpresa")

    var instrucao = `SELECT TOP 1 idEmpresa FROM Empresa ORDER BY idEmpresa DESC;`
   
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarUsuario(nome, sobrenome, cpf, email, telefone, senha, tipo, fkEmpresa) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, sobrenome, cpf, email, telefone, senha, tipo, fkEmpresa);
    
    var instrucao = `
        INSERT INTO usuario (Nome, Sobrenome, CPF, Email, Telefone, Senha, TipoUsuario, fkEmpresa) VALUES
        ('${nome}', '${sobrenome}', '${cpf}', '${email}', '${telefone}', '${senha}', '${tipo}', '${fkEmpresa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarUsuarioMaster( nomeUsuario, sobrenomeUsuario, emailUsuario, cpf, telUsuario, senha, tipo, fkEmpresa) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",  nomeUsuario, sobrenomeUsuario, emailUsuario, cpf, telUsuario, senha, tipo, fkEmpresa);
    
    var instrucao = `
        INSERT INTO usuario (Nome, Sobrenome, CPF, Email, Telefone, Senha, TipoUsuario, fkEmpresa) VALUES
        ('${nomeUsuario}', '${sobrenomeUsuario}', '${cpf}', '${emailUsuario}', '${telUsuario}', '${senha}', '${tipo}', ${fkEmpresa});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}
function solicitarArea(areaTotal, qtdPorcos, select) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", areaTotal, qtdPorcos, select);
    
    var instrucao = `
        INSERT INTO area (areaTotal, qtdPorcos, select) VALUES
        ('${areaTotal}', '${qtdPorcos}', '${select}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    entrar,
    cadastrar,
    selecionarFkEmpresa,
    cadastrarUsuario,
    cadastrarUsuarioMaster,
    solicitarArea,
    listar,
};