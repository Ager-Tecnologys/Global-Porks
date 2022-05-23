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
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nomeFantasia, cnpj, RazaoSocial, telefone, rua, numero, bairro, cidade, estado, cep) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeFantasia);
    
    var instrucao1 = `
        INSERT INTO empresa (NomeFantasia, CNPJ, RazaoSocial, Telefone, Rua, Numero, Bairro, Cidade, Estado, CEP) VALUES
        ('${nomeFantasia}', '${cnpj}', '${RazaoSocial}', '${telefone}', '${rua}', '${numero}', '${bairro}', '${cidade}', '${estado}', '${cep}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao1);
    return database.executar(instrucao1);
}

function cadastrarUsuario(nome, sobrenome, cpf, email, telefone, senha) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, sobrenome, cpf, email, telefone, senha);
    
    var instrucao = `
        INSERT INTO empresa (nome, sobrenome, cpf, email, telefone, senha) VALUES
        ('${nome}', '${sobrenome}', '${cpf}', '${email}', '${telefone}', '${senha}');
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
    cadastrarUsuario,
    cadastrarUsuarioMaster,
    solicitarArea,
    listar,
};