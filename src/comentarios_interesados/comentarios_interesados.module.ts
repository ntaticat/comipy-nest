import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentariosInteresados } from './entities/comentarios_interesados.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComentariosInteresados])],
})
export class ComentariosInteresadosModule {}
