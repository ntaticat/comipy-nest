import { Test, TestingModule } from '@nestjs/testing';
import { ColeccionablesController } from './coleccionables.controller';
import { ColeccionablesService } from './coleccionables.service';

describe('ColeccionablesController', () => {
  let controller: ColeccionablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColeccionablesController],
      providers: [ColeccionablesService],
    }).compile();

    controller = module.get<ColeccionablesController>(ColeccionablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
