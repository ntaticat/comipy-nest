import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pregunta } from 'src/preguntas/entities/pregunta.entity';

@Entity()
export class PreguntaOpcion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  isCorrect: boolean;

  @ManyToOne(() => Pregunta, (question) => question.options)
  question: Pregunta;
}
