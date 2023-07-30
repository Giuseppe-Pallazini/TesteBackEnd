use GoldenRaspberryAwards;

show tables;

insert into tb_producer (nm_producer)
	values 				('Avi Lerner, Kevin King Templeton, Yariv Lerner, and Les Weldon');
    
    
select * from tb_producer;
select * from tb_movie;
select * from tb_studio;

drop table tb_producer;
drop table tb_movie;
drop table tb_studio;

create table tb_producer(
	id_producer 	int primary key auto_increment,
    nm_producer		varchar(200)
);

create table tb_studio(
	id_studio		int primary key auto_increment,
    nm_studio		varchar(200)
);

create table tb_movie(
	id_movie		int primary key auto_increment,
    nm_title		varchar(200),
    dt_movie		year,
    bl_win			bool,
    id_producer		int,
    foreign key (id_producer) references tb_producer (id_producer)
)