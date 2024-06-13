import { Comentario } from 'src/comentarios/entities/comentario.entity';
import { Interesado } from 'src/interesados/entities/interesado.entity';
import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class ComentariosInteresados {
  @PrimaryColumn()
  comentario_id: number;

  @PrimaryColumn()
  interesado_id: number;

  @ManyToOne(
    () => Comentario,
    (comentario) => comentario.comentariosInteresados,
  )
  @JoinColumn({ name: 'comentario_id' })
  comentario: Comentario;

  @ManyToOne(
    () => Interesado,
    (interesado) => interesado.comentariosInteresados,
  )
  @JoinColumn({ name: 'interesado_id' })
  interesado: Interesado;
}
