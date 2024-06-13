import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TemasService } from './temas.service';
import { Tema } from './entities/tema.entity';

@Controller('temas')
export class TemasController {
  constructor(private readonly temasService: TemasService) {}

  @Get()
  findAll(): Promise<Tema[]> {
    return this.temasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Tema> {
    return this.temasService.findOne(+id);
  }

  @Post()
  create(@Body() tema: Tema): Promise<Tema> {
    return this.temasService.create(tema);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.temasService.remove(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() tema: Tema): Promise<void> {
    return this.temasService.update(+id, tema);
  }
}
