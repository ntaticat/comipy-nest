import { Participante } from 'src/participantes/entities/participante.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Coleccionable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @ManyToOne(() => Participante, (participant) => participant.collectibles)
  participant: Participante;
}
