import { Test, TestingModule } from '@nestjs/testing';
import { InteresadosController } from './interesados.controller';
import { InteresadosService } from './interesados.service';

describe('InteresadosController', () => {
  let controller: InteresadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InteresadosController],
      providers: [InteresadosService],
    }).compile();

    controller = module.get<InteresadosController>(InteresadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
