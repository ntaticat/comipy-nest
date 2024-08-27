import { Injectable } from '@nestjs/common';
import { CreateRetoDto } from './dto/create-reto.dto';
import { UpdateRetoDto } from './dto/update-reto.dto';

@Injectable()
export class RetosService {
  create(createRetoDto: CreateRetoDto) {
    return 'This action adds a new reto';
  }

  findAll() {
    return `This action returns all retos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reto`;
  }

  update(id: number, updateRetoDto: UpdateRetoDto) {
    return `This action updates a #${id} reto`;
  }

  remove(id: number) {
    return `This action removes a #${id} reto`;
  }
}
