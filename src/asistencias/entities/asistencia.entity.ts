import { Alumno } from 'src/alumnos/entities/alumno.entity';
import { Horario } from 'src/horarios/entities/horario.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Asistencia {
  @PrimaryGeneratedColumn()
  asistencia_id: number;

  @ManyToOne(() => Alumno, (alumno) => alumno.asistencias)
  @JoinColumn({ name: 'alumno_id' })
  alumno: Alumno;

  @ManyToOne(() => Horario, (horario) => horario.asistencias)
  @JoinColumn({ name: 'horario_id' })
  horario: Horario;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @Column({ type: 'boolean', default: false })
  presento_actividad: boolean;

  @Column({ type: 'boolean', default: false })
  registrado_siri: boolean;
}
