import { Module } from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { ParticipantesController } from './participantes.controller';
import { Participante } from './entities/participante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesGuard } from 'src/guards/roles.guard';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Participante]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [ParticipantesController],
  providers: [ParticipantesService, RolesGuard, JwtStrategy, AuthService],
  exports: [ParticipantesService], // Exporta el servicio aquí
})
export class ParticipantesModule {}
