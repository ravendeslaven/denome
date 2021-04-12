CREATE DATABASE denome;

USE denome;

CREATE TABLE events(
    id INT(11) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    color VARCHAR(7) DEFAULT NULL,
    start DATETIME NOT NULL,
    end DATETIME DEFAULT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Agregar algunos datos

INSERT INTO events (id, title, color, start, end) VALUES
(1, 'Evento Azul', '#0071c5', '2017-08-01 00:00:00', '2017-08-02 00:00:00'),
(2, 'Eventos 2', '#40E0D0', '2017-08-02 00:00:00', '2017-08-03 00:00:00'),
(3, 'Doble click para editar evento', '#008000', '2017-08-03 00:00:00', '2017-08-07 00:00:00');


ALTER TABLE events
    ADD PRIMARY KEY (id)



ALTER TABLE events
    MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;