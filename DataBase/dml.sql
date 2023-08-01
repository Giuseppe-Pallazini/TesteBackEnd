USE GoldenRaspberryAwards;

SELECT * FROM tb_producer;	
SELECT * FROM tb_movie;
SELECT * FROM tb_studio;

SHOW TABLES;
    
UPDATE tb_movie SET id_producer = 2 WHERE id_movie = 26; 

INSERT INTO tb_producer (nm_producer)
	VALUES				('Allan Carr');

SELECT * FROM tb_producer WHERE nm_producer = 'Jerry Weintraub';
SELECT * FROM tb_studio WHERE nm_studio = 'United Artists';

SELECT id_producer FROM tb_producer WHERE nm_producer = 'Jerry Weintraub';

SELECT SQL_NO_CACHE COUNT(*) AS count FROM tb_producer WHERE nm_producer = 'Allan Carr';

SELECT 	id_movie	as Id,
		dt_movie 	as year,
		nm_title 	as title,
        bl_win 		as winner,
        id_producer as IdProducer,
        id_studio	as IdStudio
 FROM tb_movie where bl_win = 1 
 order by id_producer desc;