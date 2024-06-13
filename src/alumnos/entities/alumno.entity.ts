import { AlumnosHorarios } from 'src/alumnos_horarios/entities/alumnos_horarios.entity';
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
}
