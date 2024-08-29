import { Coleccionable } from 'src/coleccionables/entities/coleccionable.entity';
import { Reto } from 'src/retos/entities/reto.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity()
export class Participante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  phoneNumber: string; // Campo para almacenar el número de celular

  @Column({ default: 'usuario' }) // Agregar un campo de rol con valor por defecto 'user'
  role: string;

  @ManyToMany(() => Reto, (challenge) => challenge.participants)
  @JoinTable()
  challenges: Reto[];

  @OneToMany(() => Coleccionable, (collectible) => collectible.participant)
  collectibles: Coleccionable[];
}
