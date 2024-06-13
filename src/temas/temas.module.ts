import { Module } from '@nestjs/common';
import { TemasService } from './temas.service';
import { TemasController } from './temas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  controllers: [TemasController],
  providers: [TemasService],
})
export class TemasModule {}
