import { Docente } from 'src/docentes/entities/docente.entity';
import { Horario } from 'src/horarios/entities/horario.entity';
import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class DocentesHorarios {
  @PrimaryColumn()
  docente_id: number;

  @PrimaryColumn()
  horario_id: number;

  @ManyToOne(() => Docente, (docente) => docente.docentesHorarios)
  @JoinColumn({ name: 'docente_id' })
  docente: Docente;

  @ManyToOne(() => Horario, (horario) => horario.docentesHorarios)
  @JoinColumn({ name: 'horario_id' })
  horario: Horario;
}
