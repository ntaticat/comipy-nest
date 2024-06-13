CREATE TABLE turnos (
    turno_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    identificador VARCHAR(100) NOT NULL,
    descripcion VARCHAR(100)
);

CREATE TABLE alumnos (
    alumno_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    nombre_completo VARCHAR(200) NOT NULL,
    nombres VARCHAR(200),
    primer_apellido VARCHAR(200),
    segundo_apellido VARCHAR(200),
    activo BOOLEAN DEFAULT TRUE NOT NULL,
    folio VARCHAR(200) NOT NULL
);

CREATE TABLE docentes (
    docente_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    nombre_completo VARCHAR(200) NOT NULL,
    nombres VARCHAR(200),
    primer_apellido VARCHAR(200),
    segundo_apellido VARCHAR(200),
    usuario VARCHAR(200) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    activo BOOLEAN DEFAULT TRUE NOT NULL,
    rol VARCHAR(255) DEFAULT 'normal' NOT NULL
);

CREATE TABLE cursos (
    curso_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    identificador VARCHAR(100) NOT NULL,
    descripcion VARCHAR(100)
);

CREATE TABLE horarios_cursos (
    horario_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    curso_id INTEGER NOT NULL,
    dia_semana VARCHAR(20) NOT NULL,
    hora_inicio TIME NOT NULL,
    duracion INTEGER NOT NULL,
    turno_id INTEGER NOT NULL,
    FOREIGN KEY (curso_id) REFERENCES cursos (curso_id),
    FOREIGN KEY (turno_id) REFERENCES turnos (turno_id)
);

CREATE TABLE alumnos_horarios (
    alumno_id INTEGER NOT NULL,
    horario_id INTEGER NOT NULL,
    activo BOOLEAN DEFAULT TRUE,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (alumno_id, horario_id),
    FOREIGN KEY (alumno_id) REFERENCES alumnos (alumno_id),
    FOREIGN KEY (horario_id) REFERENCES horarios_cursos (horario_id)
);

CREATE TABLE asistencias (
    asistencia_id INTEGER PRIMARY KEY,
    alumno_id INTEGER NOT NULL,
    horario_id INTEGER NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    presento_actividad BOOLEAN NOT NULL DEFAULT FALSE,
    registrado_siri BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (alumno_id) REFERENCES alumnos (alumno_id),
    FOREIGN KEY (horario_id) REFERENCES horarios_cursos (horario_id)
);

CREATE TABLE temas (
    tema_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    curso_id INTEGER NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    descripcion TEXT,
    FOREIGN KEY (curso_id) REFERENCES cursos (curso_id)
);

CREATE TABLE temas_vistos (
    tema_visto_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    horario_id INTEGER NOT NULL,
    tema_id INTEGER NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (horario_id) REFERENCES horarios_cursos (horario_id),
    FOREIGN KEY (tema_id) REFERENCES temas (tema_id)
);

CREATE TABLE interesados (
    interesado_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    nombre_completo VARCHAR(200) NOT NULL,
    nombres VARCHAR(200),
    primer_apellido VARCHAR(200),
    segundo_apellido VARCHAR(200),
    mayor_edad BOOLEAN NOT NULL,
    numero_contacto VARCHAR(20),
    folio VARCHAR(200),
    fecha_interes DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    contactado BOOLEAN DEFAULT FALSE,
    respuesta_recibida BOOLEAN DEFAULT FALSE,
    respuesta_positiva BOOLEAN DEFAULT FALSE,
    convertido_en_alumno BOOLEAN DEFAULT FALSE
);

CREATE TABLE interesados_horarios (
    interesado_id INTEGER NOT NULL,
    horario_id INTEGER NOT NULL,
    fecha_interes DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (interesado_id, horario_id),
    FOREIGN KEY (interesado_id) REFERENCES interesados (interesado_id),
    FOREIGN KEY (horario_id) REFERENCES horarios_cursos (horario_id)
);

CREATE TABLE comentarios (
    comentario_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    comentario TEXT NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE comentarios_alumnos (
    comentario_id INTEGER NOT NULL,
    alumno_id INTEGER NOT NULL,
    PRIMARY KEY (comentario_id, alumno_id),
    FOREIGN KEY (comentario_id) REFERENCES comentarios (comentario_id),
    FOREIGN KEY (alumno_id) REFERENCES alumnos (alumno_id)
);

CREATE TABLE comentarios_interesados (
    comentario_id INTEGER NOT NULL,
    interesado_id INTEGER NOT NULL,
    PRIMARY KEY (comentario_id, interesado_id),
    FOREIGN KEY (comentario_id) REFERENCES comentarios (comentario_id),
    FOREIGN KEY (interesado_id) REFERENCES interesados (interesado_id)
);
