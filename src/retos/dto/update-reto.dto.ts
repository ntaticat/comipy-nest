import { PartialType } from '@nestjs/swagger';
import { CreateRetoDto } from './create-reto.dto';

export class UpdateRetoDto extends PartialType(CreateRetoDto) {}
