
CREATE DATABASE IF NOT EXISTS Gomes;
USE Gomes;


CREATE TABLE Usuario (
    Id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(70) NOT NULL,
    Email VARCHAR(80) UNIQUE NOT NULL,
    Senha VARCHAR(255) NOT NULL,
    Tipo ENUM('admin', 'cliente') DEFAULT 'cliente'
);

INSERT INTO Usuario (Nome, Email, Senha, Tipo) 
VALUES ('Admin', 'admin@gomes.com', '123456', 'admin');
-- READ
SELECT * FROM Usuario;
-- UPDATE
UPDATE Usuario SET Senha = 'nova_senha' WHERE Id_usuario = 1;
-- DELETE
DELETE FROM Usuario WHERE Id_usuario = 1;


CREATE TABLE Cliente (
    Id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(70) NOT NULL,
    Idade INT,
    Telefone VARCHAR(15),
    Id_usuario INT,
    FOREIGN KEY (Id_usuario) REFERENCES Usuario(Id_usuario)
);


INSERT INTO Cliente (Nome, Idade, Telefone, Id_usuario) 
VALUES ('João Silva', 30, '11999999999', 1);
SELECT * FROM Cliente;
UPDATE Cliente SET Telefone = '11888888888' WHERE Id_cliente = 1;
DELETE FROM Cliente WHERE Id_cliente = 1;


CREATE TABLE Endereco (
    Id_endereco INT PRIMARY KEY AUTO_INCREMENT,
    Logradouro VARCHAR(100),
    Numero VARCHAR(10),
    Cidade VARCHAR(50),
    Estado VARCHAR(2),
    Cep VARCHAR(10),
    Id_cliente INT,
    FOREIGN KEY (Id_cliente) REFERENCES Cliente(Id_cliente)
);


INSERT INTO Endereco (Logradouro, Numero, Cidade, Estado, Cep, Id_cliente)
VALUES ('Rua das Flores', '123', 'São Paulo', 'SP', '12345-678', 1);
SELECT * FROM Endereco;
UPDATE Endereco SET Cidade = 'Peruíbe' WHERE Id_endereco = 1;
DELETE FROM Endereco WHERE Id_endereco = 1;


CREATE TABLE Categoria (
    Id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    Nome_categoria VARCHAR(50) NOT NULL
);

-- CRUD Categoria
INSERT INTO Categoria (Nome_categoria) VALUES ('Eletrônicos');
SELECT * FROM Categoria;
UPDATE Categoria SET Nome_categoria = 'Eletrodomésticos' WHERE Id_categoria = 1;
DELETE FROM Categoria WHERE Id_categoria = 1;


CREATE TABLE Produto (
    Id_produto INT PRIMARY KEY AUTO_INCREMENT,
    Nome_produto VARCHAR(50) NOT NULL,
    Descricao VARCHAR(255),
    Preco DECIMAL(10,2) NOT NULL,
    Peso DECIMAL(10,2),
    Estoque INT DEFAULT 0,
    Id_categoria INT,
    FOREIGN KEY (Id_categoria) REFERENCES Categoria(Id_categoria)
);


INSERT INTO Produto (Nome_produto, Descricao, Preco, Peso, Estoque, Id_categoria) 
VALUES ('Notebook', 'Notebook Dell Inspiron', 3500.00, 2.5, 10, 1);
SELECT * FROM Produto;
UPDATE Produto SET Estoque = 20 WHERE Id_produto = 1;
DELETE FROM Produto WHERE Id_produto = 1;


CREATE TABLE Venda (
    Id_venda INT PRIMARY KEY AUTO_INCREMENT,
    Data_venda DATETIME DEFAULT CURRENT_TIMESTAMP,
    Id_cliente INT,
    Total_venda DECIMAL(10,2),
    FOREIGN KEY (Id_cliente) REFERENCES Cliente(Id_cliente)
);

-- CRUD Venda
INSERT INTO Venda (Id_cliente, Total_venda) VALUES (1, 3500.00);
SELECT * FROM Venda;
UPDATE Venda SET Total_venda = 4000.00 WHERE Id_venda = 1;
DELETE FROM Venda WHERE Id_venda = 1;


CREATE TABLE Itens_venda (
    Id_item INT PRIMARY KEY AUTO_INCREMENT,
    Id_venda INT,
    Id_produto INT,
    Quantidade INT NOT NULL,
    Preco_unit DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (Id_venda) REFERENCES Venda(Id_venda),
    FOREIGN KEY (Id_produto) REFERENCES Produto(Id_produto)
);


INSERT INTO Itens_venda (Id_venda, Id_produto, Quantidade, Preco_unit) 
VALUES (1, 1, 2, 3500.00);
SELECT * FROM Itens_venda;
UPDATE Itens_venda SET Quantidade = 3 WHERE Id_item = 1;
DELETE FROM Itens_venda WHERE Id_item = 1;


CREATE TABLE Pagamento (
    Id_pagamento INT PRIMARY KEY AUTO_INCREMENT,
    Id_venda INT,
    Metodo ENUM('cartao', 'boleto', 'pix') NOT NULL,
    Status ENUM('pendente', 'aprovado', 'cancelado') DEFAULT 'pendente',
    FOREIGN KEY (Id_venda) REFERENCES Venda(Id_venda)
);


INSERT INTO Pagamento (Id_venda, Metodo, Status) VALUES (1, 'pix', 'aprovado');
SELECT * FROM Pagamento;
UPDATE Pagamento SET Status = 'cancelado' WHERE Id_pagamento = 1;
DELETE FROM Pagamento WHERE Id_pagamento = 1;


CREATE TABLE Entrega (
    Id_entrega INT PRIMARY KEY AUTO_INCREMENT,
    Id_venda INT,
    Codigo_rastreio VARCHAR(50),
    Status_entrega ENUM('preparando', 'enviado', 'entregue') DEFAULT 'preparando',
    FOREIGN KEY (Id_venda) REFERENCES Venda(Id_venda)
);


INSERT INTO Entrega (Id_venda, Codigo_rastreio, Status_entrega) 
VALUES (1, 'BR123456789', 'enviado');
SELECT * FROM Entrega;
UPDATE Entrega SET Status_entrega = 'entregue' WHERE Id_entrega = 1;
DELETE FROM Entrega WHERE Id_entrega = 1;
