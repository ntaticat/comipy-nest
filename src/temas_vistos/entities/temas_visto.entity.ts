import { Horario } from 'src/horarios/entities/horario.entity';
import { Tema } from 'src/temas/entities/tema.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';

@Entity()
export class TemaVisto {
  @PrimaryGeneratedColumn()
  tema_visto_id: number;

  @ManyToOne(() => Horario, (horario) => horario.temasVistos)
  @JoinColumn({ name: 'horario_id' })
  horario: Horario;

  @ManyToOne(() => Tema, (tema) => tema.temasVistos)
  @JoinColumn({ name: 'tema_id' })
  tema: Tema;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}
