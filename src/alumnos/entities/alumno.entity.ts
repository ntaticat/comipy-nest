import { AlumnosHorarios } from 'src/alumnos_horarios/entities/alumnos_horarios.entity';
import { Asistencia } from 'src/asistencias/entities/asistencia.entity';
import { ComentariosAlumnos } from 'src/comentarios_alumnos/entities/comentarios_alumnos.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Alumno {
  @PrimaryGeneratedColumn()
  alumno_id: number;

  @Column({ type: 'varchar', length: 200 })
  nombre_completo: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  nombres: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  primer_apellido: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  segundo_apellido: string;

  @Column({ type: 'boolean', default: true })
  activo: boolean;

  @Column({ type: 'varchar', length: 200 })
  folio: string;

  @OneToMany(() => AlumnosHorarios, (alumnosHorarios) => alumnosHorarios.alumno)
  alumnosHorarios: AlumnosHorarios[];

  @OneToMany(() => Asistencia, (asistencia) => asistencia.alumno)
  asistencias: Asistencia[];

  @OneToMany(
    () => ComentariosAlumnos,
    (comentariosAlumnos) => comentariosAlumnos.alumno,
  )
  comentariosAlumnos: ComentariosAlumnos[];
}
