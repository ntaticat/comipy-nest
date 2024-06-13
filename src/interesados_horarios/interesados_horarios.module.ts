import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InteresadosHorarios } from './entities/interesados_horarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InteresadosHorarios])],
})
export class InteresadosHorariosModule {}
