import { IsString, IsOptional, IsUrl } from 'class-validator';

export class CreateRetoDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsUrl()
  mediaUrl?: string;
}
