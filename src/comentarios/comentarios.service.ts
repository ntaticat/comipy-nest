import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentario } from './entities/comentario.entity';

@Injectable()
export class ComentariosService {
  constructor(
    @InjectRepository(Comentario)
    private comentariosRepository: Repository<Comentario>,
  ) {}

  findAll(): Promise<Comentario[]> {
    return this.comentariosRepository.find();
  }

  findOne(id: number): Promise<Comentario> {
    return this.comentariosRepository.findOne({ where: { comentario_id: id } });
  }

  async remove(id: number): Promise<void> {
    await this.comentariosRepository.delete(id);
  }

  async create(comentario: Comentario): Promise<Comentario> {
    return this.comentariosRepository.save(comentario);
  }

  async update(id: number, comentario: Comentario): Promise<void> {
    await this.comentariosRepository.update(id, comentario);
  }
}
