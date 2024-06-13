import { DocentesHorarios } from 'src/docentes_horarios/entities/docentes_horarios.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Docente {
  @PrimaryGeneratedColumn()
  docente_id: number;

  @Column({ type: 'varchar', length: 200 })
  nombre_completo: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  nombres: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  primer_apellido: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  segundo_apellido: string;

  @Column({ type: 'varchar', length: 200, unique: true })
  usuario: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 200 })
  password: string;

  @Column({ type: 'boolean', default: true })
  activo: boolean;

  @Column({ type: 'varchar', length: 255, default: 'normal' })
  rol: string;

  @OneToMany(
    () => DocentesHorarios,
    (docentesHorarios) => docentesHorarios.docente,
  )
  docentesHorarios: DocentesHorarios[];
}
