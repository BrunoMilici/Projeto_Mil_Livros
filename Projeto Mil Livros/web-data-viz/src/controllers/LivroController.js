var livroModel = require("../models/livroModel");


function registrar(req, res) {
    var tituloLivro = req.body.tituloLivroServer;
    var generoLivro = req.body.generoLivroServer;

    if (tituloLivro == undefined) {
        res.status(400).send("Seu tituloLivro está undefined!");
    } else if (generoLivro == undefined) {
        res.status(400).send("Seu generoLivro está undefined!");
    } else {

        livroModel.registrar(tituloLivro, generoLivro)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro no regisro do livro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function autenticar(req, res) {
    var tituloLivro = req.body.tituloLivroServer;

    if (tituloLivro == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {

        livroModel.autenticar(tituloLivro)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                        res.json(resultadoAutenticar);

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao verificar os livros cadastrados! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function publicar(req, res) {
    var fkLivro = req.body.fkLivroServer;
    var fkUsuarioAnalise = req.body.fkUsuarioAnaliseServer;
    var nota = req.body.notaServer;
    var resenha = req.body.resenhaServer;

    if (fkLivro == undefined || fkLivro == "") {
        res.status(400).send("A fkLivro está indefinida!");
    } else if (fkUsuarioAnalise == undefined || fkUsuarioAnalise == "" ) {
        res.status(400).send("A fkUsuarioAnalise está indefinida!");
    } else if (nota == undefined || nota == "") {
        res.status(400).send("A nota do livro está indefinido!");
    }else if (resenha == undefined || resenha == "") {
        res.status(400).send("A resenha do formulário está indefinido!");
    }  else {
        livroModel.publicar(fkLivro, fkUsuarioAnalise, nota, resenha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    livroModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    registrar,
    autenticar,
    publicar,
    listar
}