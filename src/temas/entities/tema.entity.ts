import { Curso } from 'src/cursos/entities/curso.entity';
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

  @OneToMany(() => TemaVisto, (temasVistos) => temasVistos.tema)
  temasVistos: TemaVisto[];
}
