import { Module } from '@nestjs/common';
import { InteresadosService } from './interesados.service';
import { InteresadosController } from './interesados.controller';
import { Interesado } from './entities/interesado.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Interesado])],
  controllers: [InteresadosController],
  providers: [InteresadosService],
})
export class InteresadosModule {}
