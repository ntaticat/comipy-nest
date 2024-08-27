import { Test, TestingModule } from '@nestjs/testing';
import { RetosService } from './retos.service';

describe('RetosService', () => {
  let service: RetosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RetosService],
    }).compile();

    service = module.get<RetosService>(RetosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
