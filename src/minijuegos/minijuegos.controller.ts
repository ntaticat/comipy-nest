import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MinijuegosService } from './minijuegos.service';
import { CreateMinijuegoDto } from './dto/create-minijuego.dto';
import { UpdateMinijuegoDto } from './dto/update-minijuego.dto';

@Controller('minijuegos')
export class MinijuegosController {
  constructor(private readonly minijuegosService: MinijuegosService) {}

  @Post()
  create(@Body() createMinijuegoDto: CreateMinijuegoDto) {
    return this.minijuegosService.create(createMinijuegoDto);
  }

  @Get()
  findAll() {
    return this.minijuegosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.minijuegosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMinijuegoDto: UpdateMinijuegoDto) {
    return this.minijuegosService.update(+id, updateMinijuegoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.minijuegosService.remove(+id);
  }
}
