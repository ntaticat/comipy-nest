import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TemasVistosService } from './temas_vistos.service';
import { CreateTemasVistoDto } from './dto/create-temas_visto.dto';
import { UpdateTemasVistoDto } from './dto/update-temas_visto.dto';

@Controller('temas-vistos')
export class TemasVistosController {
  constructor(private readonly temasVistosService: TemasVistosService) {}

  @Post()
  create(@Body() createTemasVistoDto: CreateTemasVistoDto) {
    return this.temasVistosService.create(createTemasVistoDto);
  }

  @Get()
  findAll() {
    return this.temasVistosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.temasVistosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTemasVistoDto: UpdateTemasVistoDto) {
    return this.temasVistosService.update(+id, updateTemasVistoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.temasVistosService.remove(+id);
  }
}
