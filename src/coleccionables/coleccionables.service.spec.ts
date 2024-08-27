import { Test, TestingModule } from '@nestjs/testing';
import { ColeccionablesService } from './coleccionables.service';

describe('ColeccionablesService', () => {
  let service: ColeccionablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColeccionablesService],
    }).compile();

    service = module.get<ColeccionablesService>(ColeccionablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
