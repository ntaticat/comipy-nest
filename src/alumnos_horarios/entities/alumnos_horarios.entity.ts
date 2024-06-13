import { Alumno } from 'src/alumnos/entities/alumno.entity';
import { Horario } from 'src/horarios/entities/horario.entity';
import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';

@Entity()
export class AlumnosHorarios {
  @PrimaryColumn()
  alumno_id: number;

  @PrimaryColumn()
  horario_id: number;

  @ManyToOne(() => Alumno, (alumno) => alumno.alumnosHorarios)
  @JoinColumn({ name: 'alumno_id' })
  alumno: Alumno;

  @ManyToOne(() => Horario, (horario) => horario.alumnosHorarios)
  @JoinColumn({ name: 'horario_id' })
  horario: Horario;

  @Column({ type: 'boolean', default: true })
  activo: boolean;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}
