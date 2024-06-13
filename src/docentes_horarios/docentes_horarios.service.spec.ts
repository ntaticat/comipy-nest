import { Test, TestingModule } from '@nestjs/testing';
import { DocentesHorariosService } from './docentes_horarios.service';

describe('DocentesHorariosService', () => {
  let service: DocentesHorariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocentesHorariosService],
    }).compile();

    service = module.get<DocentesHorariosService>(DocentesHorariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
