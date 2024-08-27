import { Test, TestingModule } from '@nestjs/testing';
import { MinijuegosService } from './minijuegos.service';

describe('MinijuegosService', () => {
  let service: MinijuegosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinijuegosService],
    }).compile();

    service = module.get<MinijuegosService>(MinijuegosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
