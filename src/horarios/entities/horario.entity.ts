import { AlumnosHorarios } from 'src/alumnos_horarios/entities/alumnos_horarios.entity';
import { Asistencia } from 'src/asistencias/entities/asistencia.entity';
import { Curso } from 'src/cursos/entities/curso.entity';
import { DocentesHorarios } from 'src/docentes_horarios/entities/docentes_horarios.entity';
import { TemaVisto } from 'src/temas_vistos/entities/temas_visto.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Horario {
  @PrimaryGeneratedColumn()
  horario_id: number;

  @ManyToOne(() => Curso, (curso) => curso.horarios)
  @JoinColumn({ name: 'curso_id' })
  curso: Curso;

  @Column({ type: 'varchar', length: 20 })
  dia_semana: string;

  @Column({ type: 'time' })
  hora_inicio: string;

  @Column({ type: 'int' })
  duracion: number;

  @Column({ type: 'varchar', length: 20 })
  turno: string;

  @OneToMany(
    () => DocentesHorarios,
    (docentesHorarios) => docentesHorarios.horario,
  )
  docentesHorarios: DocentesHorarios[];

  @OneToMany(
    () => AlumnosHorarios,
    (alumnosHorarios) => alumnosHorarios.horario,
  )
  alumnosHorarios: AlumnosHorarios[];

  @OneToMany(() => Asistencia, (asistencia) => asistencia.horario)
  asistencias: Asistencia[];

  @OneToMany(() => TemaVisto, (temasVistos) => temasVistos.horario)
  temasVistos: TemaVisto[];
}
