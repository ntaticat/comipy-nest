import { Module } from '@nestjs/common';
import { RetosService } from './retos.service';
import { RetosController } from './retos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reto } from './entities/reto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reto])],
  controllers: [RetosController],
  providers: [RetosService],
})
export class RetosModule {}
