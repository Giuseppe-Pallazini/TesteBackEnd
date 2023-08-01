use GoldenRaspberryAwards;

show tables;
    
update tb_movie set id_producer = 1 where id_movie = 1; 

insert into tb_producer (nm_producer)
	values				('Allan Carr');

SELECT * FROM tb_producer WHERE nm_producer = 'Allan Carr';

SELECT SQL_NO_CACHE COUNT(*) as count
            FROM tb_producer 
        WHERE nm_producer = 'Allan Carr';
    
select * from tb_producer;	
select * from tb_movie;
select * from tb_studio;

/*
select tb_producer.id_producer,
	 tb_producer.nm_producer,
	id_movie,
    nm_title,
     bl_win,
     nm_producer
from tb_movie
inner join tb_producer
where tb_producer.nm_producer = 'Allan Carr'
and tb_movie.bl_win = 1;
*/


drop table tb_movie;
drop table tb_studio;
drop table tb_producer;


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
    id_studio		int,
    foreign key (id_producer) references tb_producer (id_producer),
    foreign key (id_studio) references tb_studio (id_studio)
)