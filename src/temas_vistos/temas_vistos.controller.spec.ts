import { Test, TestingModule } from '@nestjs/testing';
import { TemasVistosController } from './temas_vistos.controller';
import { TemasVistosService } from './temas_vistos.service';

describe('TemasVistosController', () => {
  let controller: TemasVistosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemasVistosController],
      providers: [TemasVistosService],
    }).compile();

    controller = module.get<TemasVistosController>(TemasVistosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
