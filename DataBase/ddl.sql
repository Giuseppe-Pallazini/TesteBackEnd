use GoldenRaspberryAwards;

DROP TABLE tb_producer_movie;
DROP TABLE tb_movie;
DROP TABLE tb_studio;
DROP TABLE tb_producer;


CREATE TABLE tb_producer(
	id_producer 	INT PRIMARY KEY AUTO_INCREMENT,
    nm_producer		VARCHAR(200)
);

CREATE TABLE tb_studio(
	id_studio		INT PRIMARY KEY AUTO_INCREMENT,
    nm_studio		VARCHAR(200)
);

CREATE TABLE tb_movie(
	id_movie		INT PRIMARY KEY AUTO_INCREMENT,
    nm_title		VARCHAR(200),
    dt_movie		YEAR,
    bl_win			BOOL,
    id_producer		INT,
    id_studio		INT,
    FOREIGN KEY (id_producer) REFERENCES tb_producer (id_producer),
    FOREIGN KEY (id_studio) REFERENCES tb_studio (id_studio)
);
