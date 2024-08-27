import { PreguntaOpcion } from 'src/pregunta_opciones/entities/pregunta_opcion.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Pregunta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @OneToMany(() => PreguntaOpcion, (option) => option.question, {
    cascade: true,
  })
  options: PreguntaOpcion[];
}
