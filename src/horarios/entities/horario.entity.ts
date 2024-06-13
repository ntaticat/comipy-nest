import { Curso } from 'src/cursos/entities/curso.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
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
}
