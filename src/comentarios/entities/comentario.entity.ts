import { ComentariosAlumnos } from 'src/comentarios_alumnos/entities/comentarios_alumnos.entity';
import { ComentariosInteresados } from 'src/comentarios_interesados/entities/comentarios_interesados.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Comentario {
  @PrimaryGeneratedColumn()
  comentario_id: number;

  @Column({ type: 'text' })
  comentario: string;

  @CreateDateColumn()
  fecha: Date;

  @OneToMany(
    () => ComentariosAlumnos,
    (comentariosAlumnos) => comentariosAlumnos.comentario,
  )
  comentariosAlumnos: ComentariosAlumnos[];

  @OneToMany(
    () => ComentariosInteresados,
    (comentariosInteresados) => comentariosInteresados.comentario,
  )
  comentariosInteresados: ComentariosInteresados[];
}
