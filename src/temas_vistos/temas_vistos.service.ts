import { Injectable } from '@nestjs/common';
import { CreateTemasVistoDto } from './dto/create-temas_visto.dto';
import { UpdateTemasVistoDto } from './dto/update-temas_visto.dto';

@Injectable()
export class TemasVistosService {
  create(createTemasVistoDto: CreateTemasVistoDto) {
    return 'This action adds a new temasVisto';
  }

  findAll() {
    return `This action returns all temasVistos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} temasVisto`;
  }

  update(id: number, updateTemasVistoDto: UpdateTemasVistoDto) {
    return `This action updates a #${id} temasVisto`;
  }

  remove(id: number) {
    return `This action removes a #${id} temasVisto`;
  }
}
