import { Alumno } from 'src/alumnos/entities/alumno.entity';
import { Comentario } from 'src/comentarios/entities/comentario.entity';
import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class ComentariosAlumnos {
  @PrimaryColumn()
  comentario_id: number;

  @PrimaryColumn()
  alumno_id: number;

  @ManyToOne(() => Comentario, (comentario) => comentario.comentariosAlumnos)
  @JoinColumn({ name: 'comentario_id' })
  comentario: Comentario;

  @ManyToOne(() => Alumno, (alumno) => alumno.comentariosAlumnos)
  @JoinColumn({ name: 'alumno_id' })
  alumno: Alumno;
}
