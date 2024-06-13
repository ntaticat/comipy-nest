import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnosHorarios } from './entities/alumnos_horarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AlumnosHorarios])],
})
export class AlumnosHorariosModule {}
