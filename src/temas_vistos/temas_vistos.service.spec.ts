import { Test, TestingModule } from '@nestjs/testing';
import { TemasVistosService } from './temas_vistos.service';

describe('TemasVistosService', () => {
  let service: TemasVistosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemasVistosService],
    }).compile();

    service = module.get<TemasVistosService>(TemasVistosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
