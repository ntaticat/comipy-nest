import { Test, TestingModule } from '@nestjs/testing';
import { MinijuegosController } from './minijuegos.controller';
import { MinijuegosService } from './minijuegos.service';

describe('MinijuegosController', () => {
  let controller: MinijuegosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MinijuegosController],
      providers: [MinijuegosService],
    }).compile();

    controller = module.get<MinijuegosController>(MinijuegosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
