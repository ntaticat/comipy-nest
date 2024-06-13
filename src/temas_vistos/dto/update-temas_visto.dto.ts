import { PartialType } from '@nestjs/mapped-types';
import { CreateTemasVistoDto } from './create-temas_visto.dto';

export class UpdateTemasVistoDto extends PartialType(CreateTemasVistoDto) {}
