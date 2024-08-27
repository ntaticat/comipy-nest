import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColeccionablesService } from './coleccionables.service';
import { CreateColeccionableDto } from './dto/create-coleccionable.dto';
import { UpdateColeccionableDto } from './dto/update-coleccionable.dto';

@Controller('coleccionables')
export class ColeccionablesController {
  constructor(private readonly coleccionablesService: ColeccionablesService) {}

  @Post()
  create(@Body() createColeccionableDto: CreateColeccionableDto) {
    return this.coleccionablesService.create(createColeccionableDto);
  }

  @Get()
  findAll() {
    return this.coleccionablesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coleccionablesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColeccionableDto: UpdateColeccionableDto) {
    return this.coleccionablesService.update(+id, updateColeccionableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coleccionablesService.remove(+id);
  }
}
