import { Test, TestingModule } from '@nestjs/testing';
import { InteresadosService } from './interesados.service';

describe('InteresadosService', () => {
  let service: InteresadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InteresadosService],
    }).compile();

    service = module.get<InteresadosService>(InteresadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
