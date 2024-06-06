-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE MilLivros;
USE MilLivros;

-- Tabelas das plataforma
CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(45),
emaiUsuario VARCHAR(255),
senha VARCHAR(45)
) auto_increment = 1;

select * from usuario;

CREATE TABLE generosLiterarios(
idGenero INT PRIMARY KEY AUTO_INCREMENT,
generoLiterario VARCHAR(45)
)auto_increment = 1;

CREATE TABLE Perfil(
idPerfil INT AUTO_INCREMENT,
tipoLeitor VARCHAR (25),
dtNascimento DATE,
genero VARCHAR(45),
ftPerfil INT,
fkUsuario INT,
fkGeneroFavorito INT,
FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
FOREIGN KEY (fkGeneroFavorito) REFERENCES generosLiterarios(idGenero),
PRIMARY KEY(idPerfil,fkUsuario)
) auto_increment = 1;

SELECT ftPerfil FROM Perfil JOIN usuario ON Perfil.fkUsuario = usuario.idUsuario WHERE fkUsuario = 2;

select * from Perfil;

CREATE TABLE Livro(
idLivro INT PRIMARY KEY AUTO_INCREMENT,
nomeLivro VARCHAR(100) NOT NULL,
fkGeneroLivro INT,
FOREIGN KEY (fkGeneroLivro) REFERENCES generosLiterarios(idGenero)
)auto_increment = 1;

SELECT * FROM Livro;

CREATE TABLE livroAnalisado(
fkLivro INT,
fkUsuarioAnalise INT,
nota INT,
resenha TEXT,
FOREIGN KEY (fkUsuarioAnalise) REFERENCES usuario(idUsuario),
FOREIGN KEY (fkLivro) REFERENCES Livro(idLivro),
PRIMARY KEY(fkUsuarioAnalise,fkLivro)
);
SELECT * FROM livroAnalisado;
INSERT INTO livroAnalisado (fkLivro,fkUsuarioAnalise,nota,resenha) VALUES();

INSERT INTO generosLiterarios (generoLiterario) VALUES 
('Ficção Científica'), 
('Fantasia'),
('Romance'),
('Mistério'),
('Terror'),
('Aventura'),
('Histórico'),
('Biografia'),
('Jovem Adulto'),
('Poesia'),
('Infantil');

select * from generosLiterarios;
SELECT g.generoLiterario, COUNT(p.idPerfil) AS totalUsuario FROM Perfil AS p JOIN generosLiterarios AS g ON p.fkGeneroFavorito = g.idGenero GROUP BY g.generoLiterario;


