import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { InteresadosService } from './interesados.service';
import { Interesado } from './entities/interesado.entity';

@Controller('interesados')
export class InteresadosController {
  constructor(private readonly interesadosService: InteresadosService) {}

  @Get()
  findAll(): Promise<Interesado[]> {
    return this.interesadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Interesado> {
    return this.interesadosService.findOne(+id);
  }

  @Post()
  create(@Body() interesado: Interesado): Promise<Interesado> {
    return this.interesadosService.create(interesado);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.interesadosService.remove(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() interesado: Interesado,
  ): Promise<void> {
    return this.interesadosService.update(+id, interesado);
  }
}
