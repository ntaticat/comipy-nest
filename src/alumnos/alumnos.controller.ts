import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { Alumno } from './entities/alumno.entity';
// import { CreateAlumnoDto } from './dto/create-alumno.dto';
// import { UpdateAlumnoDto } from './dto/update-alumno.dto';

@Controller('alumnos')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) {}

  @Get()
  findAll(): Promise<Alumno[]> {
    return this.alumnosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Alumno> {
    return this.alumnosService.findOne(+id);
  }

  @Post()
  create(@Body() alumno: Alumno): Promise<Alumno> {
    return this.alumnosService.create(alumno);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.alumnosService.remove(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() alumno: Alumno): Promise<void> {
    return this.alumnosService.update(+id, alumno);
  }
}
