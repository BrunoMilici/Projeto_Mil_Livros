var database = require("../database/config");


function autenticar(tituloLivro) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar(): ", tituloLivro)
    var instrucaoSql = `
    SELECT * FROM Livro WHERE nomeLivro = '${tituloLivro}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrar(tituloLivro, generoLivro) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrar():", tituloLivro, generoLivro);

    var instrucaoSql = `
    INSERT INTO Livro (nomeLivro, fkGeneroLivro) VALUES('${tituloLivro}','${generoLivro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(fkLivro, fkUsuarioAnalise, nota, resenha) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", fkLivro, fkUsuarioAnalise, nota, resenha);
    var instrucaoSql = `
    INSERT INTO livroAnalisado (fkLivro, fkUsuarioAnalise, nota, resenha) VALUES('${fkLivro}','${fkUsuarioAnalise}','${nota}','${resenha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    SELECT 
    u.nomeUsuario,
    l.nomeLivro,
    l.fkGeneroLivro,
    a.fkUsuarioAnalise,
    a.nota,
    a.resenha
    FROM livroAnalisado a 
    JOIN usuario u ON a.fkUsuarioAnalise = u.idUsuario
    JOIN Livro AS l ON l.idLivro = a.fkLivro;
   
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    registrar,
    autenticar,
    publicar,
    listar
}