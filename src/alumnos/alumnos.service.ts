import { Injectable } from '@nestjs/common';
// import { CreateAlumnoDto } from './dto/create-alumno.dto';
// import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlumnosService {
  constructor(
    @InjectRepository(Alumno) private alumnosRepository: Repository<Alumno>,
  ) {}

  findAll(): Promise<Alumno[]> {
    return this.alumnosRepository.find();
  }

  findOne(id: number): Promise<Alumno> {
    return this.alumnosRepository.findOneBy({ alumno_id: id });
  }

  async remove(id: number): Promise<void> {
    await this.alumnosRepository.delete(id);
  }

  async create(alumno: Alumno): Promise<Alumno> {
    return this.alumnosRepository.save(alumno);
  }

  async update(id: number, alumno: Alumno): Promise<void> {
    await this.alumnosRepository.update(id, alumno);
  }
}
