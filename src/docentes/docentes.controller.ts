import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { Docente } from './entities/docente.entity';

@Controller('docentes')
export class DocentesController {
  constructor(private readonly docentesService: DocentesService) {}

  @Get()
  findAll(): Promise<Docente[]> {
    return this.docentesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Docente> {
    return this.docentesService.findOne(+id);
  }

  @Post()
  create(@Body() docente: Docente): Promise<Docente> {
    return this.docentesService.create(docente);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.docentesService.remove(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() docente: Docente): Promise<void> {
    return this.docentesService.update(+id, docente);
  }
}
