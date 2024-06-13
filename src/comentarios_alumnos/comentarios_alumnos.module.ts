import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentariosAlumnos } from './entities/comentarios_alumnos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComentariosAlumnos])],
})
export class ComentariosAlumnosModule {}
