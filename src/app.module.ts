import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnosModule } from './alumnos/alumnos.module';
import { DocentesModule } from './docentes/docentes.module';
import { CursosModule } from './cursos/cursos.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
