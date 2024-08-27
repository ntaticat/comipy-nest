import { PartialType } from '@nestjs/swagger';
import { CreateColeccionableDto } from './create-coleccionable.dto';

export class UpdateColeccionableDto extends PartialType(CreateColeccionableDto) {}
