import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Curso)
    private cursosRepository: Repository<Curso>,
  ) {}

  findAll(): Promise<Curso[]> {
    return this.cursosRepository.find();
  }

  findOne(id: number): Promise<Curso> {
    return this.cursosRepository.findOneBy({ curso_id: id });
  }

  async remove(id: number): Promise<void> {
    await this.cursosRepository.delete(id);
  }

  async create(curso: Curso): Promise<Curso> {
    return this.cursosRepository.save(curso);
  }

  async update(id: number, curso: Curso): Promise<void> {
    await this.cursosRepository.update(id, curso);
  }
}
