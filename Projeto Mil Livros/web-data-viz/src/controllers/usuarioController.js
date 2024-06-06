var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        usuarioModel.autenticar(email, senha)
                            .then((resultadoAutenticar) => {
                                if (resultadoAutenticar.length > 0) {
                                    res.json({
                                        idUsuario: resultadoAutenticar[0].idUsuario,
                                        emaiUsuario: resultadoAutenticar[0].emaiUsuario,
                                        nomeUsuario: resultadoAutenticar[0].nomeUsuario,
                                        senha: resultadoAutenticar[0].senha
                                    });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function obterID(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

        usuarioModel.obterID(email, senha)
            .then(
                function (resultadoObter) {
                    console.log(`\nResultados encontrados: ${resultadoObter.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoObter)}`); // transforma JSON em String

                    if (resultadoObter.length == 1) {
                        console.log(resultadoObter);

                        usuarioModel.obterID(email, senha)
                            .then((resultadoObter) => {
                                if (resultadoObter.length > 0) {
                                    res.json({
                                        idUsuario: resultadoObter[0].idUsuario
                                    });
                                }
                            })
                    } else if (resultadoObter.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    
}


function cadastrar(req, res) {

    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.cadastrar(nome, email, senha)
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

module.exports = {
    autenticar,
    obterID,
    cadastrar
}