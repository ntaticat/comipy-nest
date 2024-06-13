import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { Horario } from './entities/horario.entity';

@Controller('horarios')
export class HorariosController {
  constructor(private readonly horariosService: HorariosService) {}

  @Get()
  findAll(): Promise<Horario[]> {
    return this.horariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Horario> {
    return this.horariosService.findOne(+id);
  }

  @Post()
  create(@Body() horario: Horario): Promise<Horario> {
    return this.horariosService.create(horario);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.horariosService.remove(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() horario: Horario): Promise<void> {
    return this.horariosService.update(+id, horario);
  }
}
