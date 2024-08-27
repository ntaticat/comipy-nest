import { Module } from '@nestjs/common';
import { ColeccionablesService } from './coleccionables.service';
import { ColeccionablesController } from './coleccionables.controller';

@Module({
  controllers: [ColeccionablesController],
  providers: [ColeccionablesService],
})
export class ColeccionablesModule {}
