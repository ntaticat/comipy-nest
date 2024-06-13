import { Module } from '@nestjs/common';
import { TemasVistosService } from './temas_vistos.service';
import { TemasVistosController } from './temas_vistos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaVisto } from './entities/temas_visto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TemaVisto])],
  controllers: [TemasVistosController],
  providers: [TemasVistosService],
})
export class TemasVistosModule {}
