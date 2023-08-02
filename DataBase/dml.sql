USE GoldenRaspberryAwards;

SELECT * FROM tb_producer;
SELECT * FROM tb_movie;
SELECT * FROM tb_studio;

SHOW TABLES;

SELECT tb_movie.id_movie as Id,
       tb_movie.nm_title as Titulo,
       tb_movie.dt_movie as Ano,
       tb_movie.bl_win as Winner,
       tb_producer_studio_movie.id_producer as IdProducer,
       tb_producer_studio_movie.id_studio as IdStudio
FROM tb_movie
JOIN tb_producer_studio_movie ON tb_movie.id_movie = tb_producer_studio_movie.id_movie
WHERE tb_producer_studio_movie.id_producer = 1;





SELECT id_producer 	as ID	FROM tb_producer 	WHERE nm_producer 	= 'Allan Carr';
SELECT id_studio 	as ID 	FROM tb_studio 		WHERE nm_studio 	= 'Universal Studios';
SELECT id_movie 	as ID 	FROM tb_movie 		WHERE nm_title 		= 'Cruising';
insert into tb_producer_studio_movie (id_producer, id_studio, id_movie)
	values							 (1,5,2);