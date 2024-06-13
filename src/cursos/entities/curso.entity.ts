import { Horario } from 'src/horarios/entities/horario.entity';
import { Tema } from 'src/temas/entities/tema.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  curso_id: number;

  @Column({ type: 'varchar', length: 100 })
  identificador: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  descripcion: string;

  @OneToMany(() => Horario, (horario) => horario.curso)
  horarios: Horario[];

  @OneToMany(() => Tema, (tema) => tema.curso)
  temas: Tema[];
}
