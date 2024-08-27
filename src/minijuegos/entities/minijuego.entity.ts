import { Reto } from 'src/retos/entities/reto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity()
export class Minijuego {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ nullable: true })
  gameUrl: string;

  @Column({ nullable: true })
  instructions: string;

  @OneToOne(() => Reto, (challenge) => challenge.game)
  challenge: Reto;
}
