import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PreguntaOpcionesService } from './pregunta_opciones.service';
import { CreatePreguntaOpcioneDto } from './dto/create-pregunta_opcione.dto';
import { UpdatePreguntaOpcioneDto } from './dto/update-pregunta_opcione.dto';

@Controller('pregunta-opciones')
export class PreguntaOpcionesController {
  constructor(private readonly preguntaOpcionesService: PreguntaOpcionesService) {}

  @Post()
  create(@Body() createPreguntaOpcioneDto: CreatePreguntaOpcioneDto) {
    return this.preguntaOpcionesService.create(createPreguntaOpcioneDto);
  }

  @Get()
  findAll() {
    return this.preguntaOpcionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.preguntaOpcionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePreguntaOpcioneDto: UpdatePreguntaOpcioneDto) {
    return this.preguntaOpcionesService.update(+id, updatePreguntaOpcioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.preguntaOpcionesService.remove(+id);
  }
}
