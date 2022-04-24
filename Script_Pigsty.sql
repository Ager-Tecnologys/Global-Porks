-- Banco de dados Pigsty
create database pigsty;
use pigsty;

create table Empresa (
idEmpresa int primary key auto_increment,
CNPJ char (14) unique,
NomeFantasia varchar (80),
RazaoSocial varchar (80),
Rua varchar (45),
Numero int,
Bairro varchar (45),
Cidade varchar (45),
Estado char (2),
CEP char (8),
Senha varchar (125),
Telefone varchar (11),
Email varchar (70)
);

create table usuario (
idUsuario int primary key auto_increment,
Nome varchar (45),
Sobrenome varchar (45),
Email varchar (70),
CPF char (11) unique,
Telefone varchar (11),
Senha varchar (125),
TipoUsuario varchar (30),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa (idEmpresa)
);

create table Area (
idArea int,
fkEmpresa int,
foreign key (fkEmpresa) references Empresa (idEmpresa),
primary key (idArea, fkEmpresa),
Fase_Porcos int,
Qtd_Porcos int,
Temperatura_Min int,
Temperatura_Max int,
Temperatura_Baixa int,
Temperatura_Alta int
);

create table Sensor (
idSensor int,
fkArea int,
fkEmpresa int,
foreign key (fkArea) references Area (idArea),
foreign key (fkEmpresa) references Empresa (idEmpresa),
primary key (idSensor, fkArea, fkEmpresa)
);

create table Dados (
idDado int,
Temperatura int,
 dtHora datetime,
 fkSensor int,
 fkArea int,
 fkEmpresa int,
 foreign key (fkSensor) references Sensor (idSensor),
 foreign key (fkArea) references Area (idArea),
 foreign key (fkEmpresa) references Empresa (idEmpresa)
 );
