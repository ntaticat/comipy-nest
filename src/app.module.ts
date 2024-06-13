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
import { ComentariosModule } from './comentarios/comentarios.module';
import { ComentariosAlumnosModule } from './comentarios_alumnos/comentarios_alumnos.module';
import { ComentariosInteresadosModule } from './comentarios_interesados/comentarios_interesados.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Cambia esto a false en producción
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
    ComentariosModule,
    ComentariosAlumnosModule,
    ComentariosInteresadosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
