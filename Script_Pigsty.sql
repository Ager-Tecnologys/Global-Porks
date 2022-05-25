-- Query MySQL
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

-- Query SQL Server

create table Empresa (
idEmpresa int primary key identity(1,1),
CNPJ char (14),
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
idUsuario int primary key identity(1,1),
Nome varchar (45),
Sobrenome varchar (45),
Email varchar (70),
CPF char (11),
Telefone varchar (11),
Senha varchar (125),
TipoUsuario varchar (30),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa (idEmpresa)
);

create table areas (
idArea int identity(1,1),
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

insert into [dbo].[Empresa] (CNPJ) 
values ('11111111111111'),('22222222222222');

insert into [dbo].[usuario] (Nome, fkEmpresa, TipoUsuario) values
 ('Delfino', 1, 'ADM'),
 ('Rafa', 2, 'ADM');

 insert into [dbo].[areas] (fkEmpresa) values (1), (2);

select * from [dbo].[areas];
 
create table vinculo (
fkUsuario int,
fkArea int,
areaFkEmpresa int,
foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkArea, areaFkEmpresa) references areas(idArea, fkEmpresa),
primary key (fkUsuario, fkArea, areaFkEmpresa)
);

create table Sensor (
idSensor int identity(1,1),
fkArea int,
areaFkEmpresa int,
foreign key (fkArea, areaFkEmpresa) references areas(idArea, fkEmpresa),
primary key (idSensor, fkArea, areaFkEmpresa)
);

create table Dados (
idDado int identity(1,1),
Temperatura int,
dtHora datetime default current_timestamp,
fkSensor int,
fkAreaSensor int,
fkAreaEmpresaSensor int,
foreign key (fkSensor, fkAreaSensor, fkAreaEmpresaSensor) 
references Sensor(idSensor, fkArea, areaFkEmpresa),
primary key(idDado, fkSensor,  fkAreaSensor, fkAreaEmpresaSensor)
);
