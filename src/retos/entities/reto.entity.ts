import { Minijuego } from 'src/minijuegos/entities/minijuego.entity';
import { Participante } from 'src/participantes/entities/participante.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Reto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ nullable: true })
  mediaUrl: string;

  @ManyToMany(() => Participante, (participant) => participant.challenges)
  participants: Participante[];

  @OneToOne(() => Minijuego, { cascade: false })
  @JoinColumn()
  game: Minijuego;
}
