import { Test, TestingModule } from '@nestjs/testing';
import { RetosController } from './retos.controller';
import { RetosService } from './retos.service';

describe('RetosController', () => {
  let controller: RetosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RetosController],
      providers: [RetosService],
    }).compile();

    controller = module.get<RetosController>(RetosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
