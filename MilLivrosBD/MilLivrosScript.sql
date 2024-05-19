CREATE DATABASE MilLivros;
USE MilLivros;

-- Tabelas das plataforma
CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(45),
emaiUsuario VARCHAR(255),
dtNascimento DATE 
) auto_increment = 1;

CREATE TABLE generosLiterarios(
idGenero INT PRIMARY KEY AUTO_INCREMENT,
generoLiterario VARCHAR(45)
)auto_increment = 1;

CREATE TABLE Perfil(
idPerfil INT AUTO_INCREMENT,
tipoLeitor VARCHAR (15),
informacoesAdicionais VARCHAR(300),
ftPerfil INT,
fkUsuario INT,
fkGeneroFavorito INT,
FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
FOREIGN KEY (fkGeneroFavorito) REFERENCES generosLiterarios(idGenero),
PRIMARY KEY(idPerfil,fkUsuario)
) auto_increment = 1;

CREATE TABLE Livro(
idLivro INT PRIMARY KEY AUTO_INCREMENT,
nomeLivro VARCHAR(100) NOT NULL,
nomeAutor VARCHAR(45),
fkGeneroLivro INT,
nota INT,
resenha TEXT,
FOREIGN KEY (fkGeneroLivro) REFERENCES generosLiterarios(idGenero)
)auto_increment = 1;

CREATE TABLE livroAnalisado(
fkLivro INT,
fkUsuarioAnalise INT,
dtAnalise DATE,
FOREIGN KEY (fkUsuarioAnalise) REFERENCES usuario(idUsuario),
FOREIGN KEY (fkLivro) REFERENCES Livro(idLivro),
PRIMARY KEY(fkUsuarioAnalise,fkLivro)
);

-- INSERTS DOS GÊNEROS LITERÁRIOS
INSERT INTO generosLiterarios (generoLiterario) VALUES ('Ficção Científica');
INSERT INTO generosLiterarios (generoLiterario) VALUES ('Fantasia');
INSERT INTO generosLiterarios (generoLiterario) VALUES ('Romance');
INSERT INTO generosLiterarios (generoLiterario) VALUES ('Mistério');
INSERT INTO generosLiterarios (generoLiterario) VALUES ('Terror');
INSERT INTO generosLiterarios (generoLiterario) VALUES ('Aventura');
INSERT INTO generosLiterarios (generoLiterario) VALUES ('Histórico');
INSERT INTO generosLiterarios (generoLiterario) VALUES ('Biografia');
INSERT INTO generosLiterarios (generoLiterario) VALUES ('Jovem Adulto');
INSERT INTO generosLiterarios (generoLiterario) VALUES ('Poesia');
INSERT INTO generosLiterarios (generoLiterario) VALUES ('Infantil');






