var database = require("../database/config")


function cadastrarPerfil(dtNascimento,generoPefil,genLiterarioFav,habitoLeitura,ftPerfil,idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", dtNascimento,generoPefil,genLiterarioFav,habitoLeitura,ftPerfil);
    

    var instrucaoSql = `
        INSERT INTO Perfil (tipoleitor, dtNascimento, genero, ftPerfil,fkUsuario,fkGeneroFavorito) VALUES ('${habitoLeitura}', '${dtNascimento}', '${generoPefil}','${ftPerfil}','${idUsuario}','${genLiterarioFav}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function carregarFotosPerfil(idUsuario) {
    var instrucaoSql = `
        SELECT ftPerfil FROM Perfil JOIN usuario ON Perfil.fkUsuario = usuario.idUsuario WHERE fkUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrarPerfil,
    carregarFotosPerfil
};