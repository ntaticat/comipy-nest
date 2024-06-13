import { Injectable } from '@nestjs/common';
import { Asistencia } from './entities/asistencia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AsistenciasService {
  constructor(
    @InjectRepository(Asistencia)
    private asistenciasRepository: Repository<Asistencia>,
  ) {}

  findAll(): Promise<Asistencia[]> {
    return this.asistenciasRepository.find({
      relations: ['alumno', 'horario'],
    });
  }

  findOne(id: number): Promise<Asistencia> {
    return this.asistenciasRepository.findOne({
      where: { asistencia_id: id },
      relations: ['alumno', 'horario'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.asistenciasRepository.delete(id);
  }

  async create(asistencia: Asistencia): Promise<Asistencia> {
    return this.asistenciasRepository.save(asistencia);
  }

  async update(id: number, asistencia: Asistencia): Promise<void> {
    await this.asistenciasRepository.update(id, asistencia);
  }
}
