import { Test, TestingModule } from '@nestjs/testing';
import { DocentesHorariosController } from './docentes_horarios.controller';

describe('DocentesHorariosController', () => {
  let controller: DocentesHorariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocentesHorariosController],
    }).compile();

    controller = module.get<DocentesHorariosController>(DocentesHorariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
