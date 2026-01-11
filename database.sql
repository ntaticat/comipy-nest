CREATE TABLE turnos (
    turno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    identificador VARCHAR(100) NOT NULL,
    descripcion VARCHAR(100)
);

CREATE TABLE alumnos (
    alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(200) NOT NULL,
    nombres VARCHAR(200),
    primer_apellido VARCHAR(200),
    segundo_apellido VARCHAR(200),
    activo TINYINT(1) DEFAULT 1 NOT NULL,
    folio VARCHAR(200) NOT NULL
);

CREATE TABLE docentes (
    docente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(200) NOT NULL,
    nombres VARCHAR(200),
    primer_apellido VARCHAR(200),
    segundo_apellido VARCHAR(200),
    usuario VARCHAR(200) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    activo TINYINT(1) DEFAULT 1 NOT NULL,
    rol VARCHAR(255) DEFAULT 'normal' NOT NULL
);

CREATE TABLE cursos (
    curso_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    identificador VARCHAR(100) NOT NULL,
    descripcion VARCHAR(100)
);

CREATE TABLE horarios_cursos (
    horario_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    curso_id INT NOT NULL,
    dia_semana VARCHAR(20) NOT NULL,
    hora_inicio TIME NOT NULL,
    duracion INT NOT NULL,
    turno_id INT NOT NULL,
    FOREIGN KEY (curso_id) REFERENCES cursos (curso_id),
    FOREIGN KEY (turno_id) REFERENCES turnos (turno_id)
);

CREATE TABLE alumnos_horarios (
    alumno_id INT NOT NULL,
    horario_id INT NOT NULL,
    activo TINYINT(1) DEFAULT 1,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (alumno_id, horario_id),
    FOREIGN KEY (alumno_id) REFERENCES alumnos (alumno_id),
    FOREIGN KEY (horario_id) REFERENCES horarios_cursos (horario_id)
);

CREATE TABLE asistencias (
    asistencia_id INT PRIMARY KEY,
    alumno_id INT NOT NULL,
    horario_id INT NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    presento_actividad TINYINT(1) NOT NULL DEFAULT 0,
    registrado_siri TINYINT(1) NOT NULL DEFAULT 0,
    FOREIGN KEY (alumno_id) REFERENCES alumnos (alumno_id),
    FOREIGN KEY (horario_id) REFERENCES horarios_cursos (horario_id)
);

CREATE TABLE temas (
    tema_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    curso_id INT NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    descripcion TEXT,
    FOREIGN KEY (curso_id) REFERENCES cursos (curso_id)
);

CREATE TABLE temas_vistos (
    tema_visto_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    horario_id INT NOT NULL,
    tema_id INT NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (horario_id) REFERENCES horarios_cursos (horario_id),
    FOREIGN KEY (tema_id) REFERENCES temas (tema_id)
);

CREATE TABLE interesados (
    interesado_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(200) NOT NULL,
    nombres VARCHAR(200),
    primer_apellido VARCHAR(200),
    segundo_apellido VARCHAR(200),
    mayor_edad TINYINT(1) NOT NULL,
    numero_contacto VARCHAR(20),
    folio VARCHAR(200),
    fecha_interes DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    contactado TINYINT(1) DEFAULT 0,
    respuesta_recibida TINYINT(1) DEFAULT 0,
    respuesta_positiva TINYINT(1) DEFAULT 0,
    convertido_en_alumno TINYINT(1) DEFAULT 0
);

CREATE TABLE interesados_horarios (
    interesado_id INT NOT NULL,
    horario_id INT NOT NULL,
    fecha_interes DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (interesado_id, horario_id),
    FOREIGN KEY (interesado_id) REFERENCES interesados (interesado_id),
    FOREIGN KEY (horario_id) REFERENCES horarios_cursos (horario_id)
);

CREATE TABLE comentarios (
    comentario_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    comentario TEXT NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE comentarios_alumnos (
    comentario_id INT NOT NULL,
    alumno_id INT NOT NULL,
    PRIMARY KEY (comentario_id, alumno_id),
    FOREIGN KEY (comentario_id) REFERENCES comentarios (comentario_id),
    FOREIGN KEY (alumno_id) REFERENCES alumnos (alumno_id)
);

CREATE TABLE comentarios_interesados (
    comentario_id INT NOT NULL,
    interesado_id INT NOT NULL,
    PRIMARY KEY (comentario_id, interesado_id),
    FOREIGN KEY (comentario_id) REFERENCES comentarios (comentario_id),
    FOREIGN KEY (interesado_id) REFERENCES interesados (interesado_id)
);
