import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Interesado } from './entities/interesado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InteresadosService {
  constructor(
    @InjectRepository(Interesado)
    private interesadosRepository: Repository<Interesado>,
  ) {}

  findAll(): Promise<Interesado[]> {
    return this.interesadosRepository.find();
  }

  findOne(id: number): Promise<Interesado> {
    return this.interesadosRepository.findOne({ where: { interesado_id: id } });
  }

  async remove(id: number): Promise<void> {
    await this.interesadosRepository.delete(id);
  }

  async create(interesado: Interesado): Promise<Interesado> {
    return this.interesadosRepository.save(interesado);
  }

  async update(id: number, interesado: Interesado): Promise<void> {
    await this.interesadosRepository.update(id, interesado);
  }
}
