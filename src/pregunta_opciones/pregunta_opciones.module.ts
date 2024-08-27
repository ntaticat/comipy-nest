import { Module } from '@nestjs/common';
import { PreguntaOpcionesService } from './pregunta_opciones.service';
import { PreguntaOpcionesController } from './pregunta_opciones.controller';

@Module({
  controllers: [PreguntaOpcionesController],
  providers: [PreguntaOpcionesService],
})
export class PreguntaOpcionesModule {}
