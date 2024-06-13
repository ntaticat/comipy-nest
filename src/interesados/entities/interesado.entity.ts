import { ComentariosInteresados } from 'src/comentarios_interesados/entities/comentarios_interesados.entity';
import { InteresadosHorarios } from 'src/interesados_horarios/entities/interesados_horarios.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Interesado {
  @PrimaryGeneratedColumn()
  interesado_id: number;

  @Column({ type: 'varchar', length: 200 })
  nombre_completo: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  nombres: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  primer_apellido: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  segundo_apellido: string;

  @Column({ type: 'boolean' })
  mayor_edad: boolean;

  @Column({ type: 'varchar', length: 20, nullable: true })
  numero_contacto: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  folio: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_interes: Date;

  @Column({ type: 'boolean', default: false })
  contactado: boolean;

  @Column({ type: 'boolean', default: false })
  respuesta_recibida: boolean;

  @Column({ type: 'boolean', default: false })
  respuesta_positiva: boolean;

  @Column({ type: 'boolean', default: false })
  convertido_en_alumno: boolean;

  @OneToMany(
    () => InteresadosHorarios,
    (interesadosHorarios) => interesadosHorarios.interesado,
  )
  interesadosHorarios: InteresadosHorarios[];

  @OneToMany(
    () => ComentariosInteresados,
    (comentariosInteresados) => comentariosInteresados.interesado,
  )
  comentariosInteresados: ComentariosInteresados[];
}
