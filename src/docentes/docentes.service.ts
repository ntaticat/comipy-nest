import { Injectable } from '@nestjs/common';
// import { CreateDocenteDto } from './dto/create-docente.dto';
// import { UpdateDocenteDto } from './dto/update-docente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Docente } from './entities/docente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocentesService {
  constructor(
    @InjectRepository(Docente)
    private docentesRepository: Repository<Docente>,
  ) {}

  findAll(): Promise<Docente[]> {
    return this.docentesRepository.find();
  }

  findOne(id: number): Promise<Docente> {
    return this.docentesRepository.findOneBy({ docente_id: id });
  }

  async remove(id: number): Promise<void> {
    await this.docentesRepository.delete(id);
  }

  async create(docente: Docente): Promise<Docente> {
    return this.docentesRepository.save(docente);
  }

  async update(id: number, docente: Docente): Promise<void> {
    await this.docentesRepository.update(id, docente);
  }
}
