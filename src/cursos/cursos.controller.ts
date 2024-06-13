import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './entities/curso.entity';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Get()
  findAll(): Promise<Curso[]> {
    return this.cursosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Curso> {
    return this.cursosService.findOne(+id);
  }

  @Post()
  create(@Body() curso: Curso): Promise<Curso> {
    return this.cursosService.create(curso);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.cursosService.remove(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() curso: Curso): Promise<void> {
    return this.cursosService.update(+id, curso);
  }
}
