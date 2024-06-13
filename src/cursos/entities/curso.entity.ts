import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  curso_id: number;

  @Column({ type: 'varchar', length: 100 })
  identificador: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  descripcion: string;
}
