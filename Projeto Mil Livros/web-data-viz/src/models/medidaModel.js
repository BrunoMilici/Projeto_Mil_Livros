var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT g.generoLiterario, COUNT(p.idPerfil) AS totalUsuarios
    FROM Perfil p
    JOIN generosLiterarios g ON p.fkGeneroFavorito = g.idGenero
    GROUP BY g.generoLiterario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasHabitos() {

    var instrucaoSql = `SELECT tipoLeitor, COUNT(*) as totalHabitos FROM Perfil WHERE tipoLeitor in ('Leitor Iniciante', 'Leitor Habituado', 'Fanático por livros')
    GROUP BY tipoLeitor;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidas,
    buscarMedidasHabitos
}
