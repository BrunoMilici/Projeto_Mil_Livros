
var perfilModel = require("../models/perfilModel");

function cadastrarPerfil(req, res) {
    var dtNascimento = req.body.dtNacimentoServer;
    var generoPefil = req.body.generoPerfilServer;
    var genLiterarioFav = req.body.genLitarioFavServer;
    var habitoLeitura = req.body.habitoLeituraServer;
    var ftPerfil = req.body.fotoPerfilServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (dtNascimento == undefined) {
        res.status(400).send("dtNascimento está undefined!");
    } else if (generoPefil == undefined) {
        res.status(400).send("generoPefil está undefined!");
    } else if (genLiterarioFav == undefined) {
        res.status(400).send("genLiterarioFav está undefined!");
    } else if (habitoLeitura == undefined) {
        res.status(400).send("habitoLeitura está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else if (ftPerfil == undefined) {
        res.status(400).send("ftPerfil está undefined!");
        
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        perfilModel.cadastrarPerfil(dtNascimento,generoPefil,genLiterarioFav,habitoLeitura,ftPerfil,idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function carregarFotosPerfil(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else{
        perfilModel.carregarFotosPerfil(idUsuario)
            .then(
                function (resultado) {
                    if (resultado.length == 1) {
                        console.log(resultado);
                        perfilModel.carregarFotosPerfil(idUsuario)
                            .then((resultado) => {
                                if (resultado.length > 0) {
                                    res.json({
                                        ftPerfil: resultado[0].ftPerfil,
                                    });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("usuário não escolheu foto de perfil");
                    } 
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao obter a fodo de perfil do usuário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );


    }
}



module.exports = {
    cadastrarPerfil,
    carregarFotosPerfil
}