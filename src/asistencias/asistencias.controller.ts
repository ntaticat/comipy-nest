import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';
import { Asistencia } from './entities/asistencia.entity';

@Controller('asistencias')
export class AsistenciasController {
  constructor(private readonly asistenciasService: AsistenciasService) {}

  @Get()
  findAll(): Promise<Asistencia[]> {
    return this.asistenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Asistencia> {
    return this.asistenciasService.findOne(+id);
  }

  @Post()
  create(@Body() asistencia: Asistencia): Promise<Asistencia> {
    return this.asistenciasService.create(asistencia);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.asistenciasService.remove(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() asistencia: Asistencia,
  ): Promise<void> {
    return this.asistenciasService.update(+id, asistencia);
  }
}
