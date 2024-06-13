import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DocentesHorarios } from './entities/docentes_horarios.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocentesHorariosService {
  constructor(
    @InjectRepository(DocentesHorarios)
    private docentesHorariosRepository: Repository<DocentesHorarios>,
  ) {}

  findAll(): Promise<DocentesHorarios[]> {
    return this.docentesHorariosRepository.find({
      relations: ['docente', 'horario'],
    });
  }

  findOne(docente_id: number, horario_id: number): Promise<DocentesHorarios> {
    return this.docentesHorariosRepository.findOne({
      where: { docente_id, horario_id },
      relations: ['docente', 'horario'],
    });
  }

  async remove(docente_id: number, horario_id: number): Promise<void> {
    await this.docentesHorariosRepository.delete({ docente_id, horario_id });
  }

  async create(docentesHorarios: DocentesHorarios): Promise<DocentesHorarios> {
    return this.docentesHorariosRepository.save(docentesHorarios);
  }

  async update(
    docente_id: number,
    horario_id: number,
    docentesHorarios: DocentesHorarios,
  ): Promise<void> {
    await this.docentesHorariosRepository.update(
      { docente_id, horario_id },
      docentesHorarios,
    );
  }
}
