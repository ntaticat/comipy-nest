import { Module } from '@nestjs/common';
import { DocentesHorariosService } from './docentes_horarios.service';
import { DocentesHorariosController } from './docentes_horarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocentesHorarios } from './entities/docentes_horarios.entity';
import { Docente } from 'src/docentes/entities/docente.entity';
import { Horario } from 'src/horarios/entities/horario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DocentesHorarios, Docente, Horario])],
  providers: [DocentesHorariosService],
  controllers: [DocentesHorariosController],
})
export class DocentesHorariosModule {}
