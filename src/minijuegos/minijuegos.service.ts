import { Injectable } from '@nestjs/common';
import { CreateMinijuegoDto } from './dto/create-minijuego.dto';
import { UpdateMinijuegoDto } from './dto/update-minijuego.dto';

@Injectable()
export class MinijuegosService {
  create(createMinijuegoDto: CreateMinijuegoDto) {
    return 'This action adds a new minijuego';
  }

  findAll() {
    return `This action returns all minijuegos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} minijuego`;
  }

  update(id: number, updateMinijuegoDto: UpdateMinijuegoDto) {
    return `This action updates a #${id} minijuego`;
  }

  remove(id: number) {
    return `This action removes a #${id} minijuego`;
  }
}
