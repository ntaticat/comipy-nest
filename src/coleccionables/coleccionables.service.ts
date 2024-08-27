import { Injectable } from '@nestjs/common';
import { CreateColeccionableDto } from './dto/create-coleccionable.dto';
import { UpdateColeccionableDto } from './dto/update-coleccionable.dto';

@Injectable()
export class ColeccionablesService {
  create(createColeccionableDto: CreateColeccionableDto) {
    return 'This action adds a new coleccionable';
  }

  findAll() {
    return `This action returns all coleccionables`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coleccionable`;
  }

  update(id: number, updateColeccionableDto: UpdateColeccionableDto) {
    return `This action updates a #${id} coleccionable`;
  }

  remove(id: number) {
    return `This action removes a #${id} coleccionable`;
  }
}
