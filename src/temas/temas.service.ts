import { Injectable } from '@nestjs/common';
import { Tema } from './entities/tema.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TemasService {
  constructor(
    @InjectRepository(Tema)
    private temasRepository: Repository<Tema>,
  ) {}

  findAll(): Promise<Tema[]> {
    return this.temasRepository.find({ relations: ['curso'] });
  }

  findOne(id: number): Promise<Tema> {
    return this.temasRepository.findOne({
      where: { tema_id: id },
      relations: ['curso'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.temasRepository.delete(id);
  }

  async create(tema: Tema): Promise<Tema> {
    return this.temasRepository.save(tema);
  }

  async update(id: number, tema: Tema): Promise<void> {
    await this.temasRepository.update(id, tema);
  }
}
