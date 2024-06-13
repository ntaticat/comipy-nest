import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnosModule } from './alumnos/alumnos.module';
import { DocentesModule } from './docentes/docentes.module';
import { CursosModule } from './cursos/cursos.module';
import { HorariosModule } from './horarios/horarios.module';
import { DocentesHorariosModule } from './docentes_horarios/docentes_horarios.module';
import { AlumnosHorariosModule } from './alumnos_horarios/alumnos_horarios.module';
import { AsistenciasModule } from './asistencias/asistencias.module';
import { TemasModule } from './temas/temas.module';
import { TemasVistosModule } from './temas_vistos/temas_vistos.module';
import { InteresadosModule } from './interesados/interesados.module';
import { InteresadosHorariosModule } from './interesados_horarios/interesados_horarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AlumnosModule,
    DocentesModule,
    CursosModule,
    HorariosModule,
    DocentesHorariosModule,
    AlumnosHorariosModule,
    AsistenciasModule,
    TemasModule,
    TemasVistosModule,
    InteresadosModule,
    InteresadosHorariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
