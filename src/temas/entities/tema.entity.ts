import { Curso } from 'src/cursos/entities/curso.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Tema {
  @PrimaryGeneratedColumn()
  tema_id: number;

  @ManyToOne(() => Curso, (curso) => curso.temas)
  @JoinColumn({ name: 'curso_id' })
  curso: Curso;

  @Column({ type: 'varchar', length: 200 })
  titulo: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;
}
