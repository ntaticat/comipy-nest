import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRetoDto } from './dto/create-reto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reto } from './entities/reto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RetosService {
  constructor(
    @InjectRepository(Reto)
    private retoRepository: Repository<Reto>,
  ) {}

  async create(createRetoDto: CreateRetoDto): Promise<Reto> {
    const reto = this.retoRepository.create(createRetoDto);
    return this.retoRepository.save(reto);
  }

  async findOne(id: number): Promise<Reto> {
    const reto = await this.retoRepository.findOne({
      where: { id },
    });
    if (!reto) {
      throw new NotFoundException(`Reto with ID ${id} not found`);
    }
    return reto;
  }

  async findAll(): Promise<Reto[]> {
    return this.retoRepository.find();
  }

  async update(id: number, updateRetoDto: CreateRetoDto): Promise<Reto> {
    await this.retoRepository.update(id, updateRetoDto);
    return this.findOne(id);
  }
}
