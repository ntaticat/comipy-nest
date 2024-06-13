import { Horario } from 'src/horarios/entities/horario.entity';
import { Interesado } from 'src/interesados/entities/interesado.entity';
import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';

@Entity()
export class InteresadosHorarios {
  @PrimaryColumn()
  interesado_id: number;

  @PrimaryColumn()
  horario_id: number;

  @ManyToOne(() => Interesado, (interesado) => interesado.interesadosHorarios)
  @JoinColumn({ name: 'interesado_id' })
  interesado: Interesado;

  @ManyToOne(() => Horario, (horario) => horario.interesadosHorarios)
  @JoinColumn({ name: 'horario_id' })
  horario: Horario;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_interes: Date;
}
