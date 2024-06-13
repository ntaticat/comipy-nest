import { Module } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { DocentesController } from './docentes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docentes } from './entities/docente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Docentes])],
  controllers: [DocentesController],
  providers: [DocentesService],
})
export class DocentesModule {}
