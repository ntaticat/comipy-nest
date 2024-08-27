import { PartialType } from '@nestjs/swagger';
import { CreatePreguntaOpcioneDto } from './create-pregunta_opcione.dto';

export class UpdatePreguntaOpcioneDto extends PartialType(CreatePreguntaOpcioneDto) {}
