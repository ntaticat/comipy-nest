import { Module } from '@nestjs/common';
import { MinijuegosService } from './minijuegos.service';
import { MinijuegosController } from './minijuegos.controller';

@Module({
  controllers: [MinijuegosController],
  providers: [MinijuegosService],
})
export class MinijuegosModule {}
