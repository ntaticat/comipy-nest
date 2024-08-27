import { Test, TestingModule } from '@nestjs/testing';
import { PreguntaOpcionesService } from './pregunta_opciones.service';

describe('PreguntaOpcionesService', () => {
  let service: PreguntaOpcionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreguntaOpcionesService],
    }).compile();

    service = module.get<PreguntaOpcionesService>(PreguntaOpcionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
