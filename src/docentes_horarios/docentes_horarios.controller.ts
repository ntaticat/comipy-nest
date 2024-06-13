import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DocentesHorarios } from './entities/docentes_horarios.entity';
import { DocentesHorariosService } from './docentes_horarios.service';

@Controller('docentes-horarios')
export class DocentesHorariosController {
  constructor(
    private readonly docentesHorariosService: DocentesHorariosService,
  ) {}

  @Get()
  findAll(): Promise<DocentesHorarios[]> {
    return this.docentesHorariosService.findAll();
  }

  @Get(':docente_id/:horario_id')
  findOne(
    @Param('docente_id') docente_id: string,
    @Param('horario_id') horario_id: string,
  ): Promise<DocentesHorarios> {
    return this.docentesHorariosService.findOne(+docente_id, +horario_id);
  }

  @Post()
  create(
    @Body() docentesHorarios: DocentesHorarios,
  ): Promise<DocentesHorarios> {
    return this.docentesHorariosService.create(docentesHorarios);
  }

  @Delete(':docente_id/:horario_id')
  remove(
    @Param('docente_id') docente_id: string,
    @Param('horario_id') horario_id: string,
  ): Promise<void> {
    return this.docentesHorariosService.remove(+docente_id, +horario_id);
  }

  @Put(':docente_id/:horario_id')
  update(
    @Param('docente_id') docente_id: string,
    @Param('horario_id') horario_id: string,
    @Body() docentesHorarios: DocentesHorarios,
  ): Promise<void> {
    return this.docentesHorariosService.update(
      +docente_id,
      +horario_id,
      docentesHorarios,
    );
  }
}
