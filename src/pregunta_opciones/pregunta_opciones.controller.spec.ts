import { Test, TestingModule } from '@nestjs/testing';
import { PreguntaOpcionesController } from './pregunta_opciones.controller';
import { PreguntaOpcionesService } from './pregunta_opciones.service';

describe('PreguntaOpcionesController', () => {
  let controller: PreguntaOpcionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreguntaOpcionesController],
      providers: [PreguntaOpcionesService],
    }).compile();

    controller = module.get<PreguntaOpcionesController>(PreguntaOpcionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
