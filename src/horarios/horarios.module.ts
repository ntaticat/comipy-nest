import { Module } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { HorariosController } from './horarios.controller';
import { Horario } from './entities/horario.entity';
import { Curso } from 'src/cursos/entities/curso.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Horario, Curso])],
  controllers: [HorariosController],
  providers: [HorariosService],
})
export class HorariosModule {}
