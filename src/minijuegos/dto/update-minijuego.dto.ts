import { PartialType } from '@nestjs/swagger';
import { CreateMinijuegoDto } from './create-minijuego.dto';

export class UpdateMinijuegoDto extends PartialType(CreateMinijuegoDto) {}
