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

CREATE TABLE Livro(
idLivro INT PRIMARY KEY AUTO_INCREMENT,
nomeLivro VARCHAR(100) NOT NULL,
fkGeneroLivro INT,
FOREIGN KEY (fkGeneroLivro) REFERENCES generosLiterarios(idGenero)
)auto_increment = 1;


CREATE TABLE livroAnalisado(
fkLivro INT,
fkUsuarioAnalise INT,
nota INT,
resenha TEXT,
FOREIGN KEY (fkUsuarioAnalise) REFERENCES usuario(idUsuario),
FOREIGN KEY (fkLivro) REFERENCES Livro(idLivro),
PRIMARY KEY(fkUsuarioAnalise,fkLivro)
);

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





