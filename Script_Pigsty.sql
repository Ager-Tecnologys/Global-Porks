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
Telefone varchar (11)
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

create table areas (
idArea int auto_increment,
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

create table vinculo (
fkUsuario int,
fkArea int,
areaFkEmpresa int,
primary key (fkUsuario, fkArea, areaFkEmpresa),
foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkArea) references areas(idArea),
foreign key (areaFkEmpresa) references areas(fkEmpresa));

create table Sensor (
idSensor int auto_increment,
fkArea int,
fkEmpresa int,
foreign key (fkArea) references Areas (idArea),
foreign key (fkEmpresa) references Empresa (idEmpresa),
primary key (idSensor, fkArea, fkEmpresa)
);

create table Dados (
idDado int auto_increment,
Temperatura int,
dtHora datetime default current_timestamp,
fkSensor int,
fkArea int,
fkEmpresa int,
foreign key (fkSensor) references Sensor (idSensor),
foreign key (fkArea) references Areas (idArea),
foreign key (fkEmpresa) references Empresa (idEmpresa),
primary key (idDado, fkSensor, fkArea, fkEmpresa)
);
