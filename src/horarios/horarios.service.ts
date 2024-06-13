import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Horario } from './entities/horario.entity';

@Injectable()
export class HorariosService {
  constructor(
    @InjectRepository(Horario)
    private horariosRepository: Repository<Horario>,
  ) {}

  findAll(): Promise<Horario[]> {
    return this.horariosRepository.find({ relations: ['curso'] });
  }

  findOne(id: number): Promise<Horario> {
    return this.horariosRepository.findOne({
      where: { horario_id: id },
      relations: ['curso'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.horariosRepository.delete(id);
  }

  async create(horario: Horario): Promise<Horario> {
    return this.horariosRepository.save(horario);
  }

  async update(id: number, horario: Horario): Promise<void> {
    await this.horariosRepository.update(id, horario);
  }
}
