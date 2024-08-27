import { Injectable } from '@nestjs/common';
import { CreatePreguntaOpcioneDto } from './dto/create-pregunta_opcione.dto';
import { UpdatePreguntaOpcioneDto } from './dto/update-pregunta_opcione.dto';

@Injectable()
export class PreguntaOpcionesService {
  create(createPreguntaOpcioneDto: CreatePreguntaOpcioneDto) {
    return 'This action adds a new preguntaOpcione';
  }

  findAll() {
    return `This action returns all preguntaOpciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} preguntaOpcione`;
  }

  update(id: number, updatePreguntaOpcioneDto: UpdatePreguntaOpcioneDto) {
    return `This action updates a #${id} preguntaOpcione`;
  }

  remove(id: number) {
    return `This action removes a #${id} preguntaOpcione`;
  }
}
