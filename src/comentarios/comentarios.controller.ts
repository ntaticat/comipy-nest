import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { Comentario } from './entities/comentario.entity';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Get()
  findAll(): Promise<Comentario[]> {
    return this.comentariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Comentario> {
    return this.comentariosService.findOne(+id);
  }

  @Post()
  create(@Body() comentario: Comentario): Promise<Comentario> {
    return this.comentariosService.create(comentario);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.comentariosService.remove(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() comentario: Comentario,
  ): Promise<void> {
    return this.comentariosService.update(+id, comentario);
  }
}
