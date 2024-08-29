import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { RetosService } from './retos.service';
import { CreateRetoDto } from './dto/create-reto.dto';

@Controller('retos')
export class RetosController {
  constructor(private readonly retosService: RetosService) {}

  @Post()
  async createReto(@Body() createRetoDto: CreateRetoDto) {
    return this.retosService.create(createRetoDto);
  }

  @Get()
  async getAllRetos() {
    return this.retosService.findAll();
  }

  @Get(':id')
  async getReto(@Param('id') id: number) {
    return this.retosService.findOne(id);
  }

  @Put(':id')
  async updateReto(
    @Param('id') id: number,
    @Body() updateRetoDto: CreateRetoDto,
  ) {
    return this.retosService.update(id, updateRetoDto);
  }
}
