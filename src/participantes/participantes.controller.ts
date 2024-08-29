import {
  Controller,
  Get,
  Body,
  Patch,
  Delete,
  UseGuards,
  Request,
  Post,
  SetMetadata,
} from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Participante } from './entities/participante.entity';
import { RolesGuard } from 'src/guards/roles.guard';

@Controller('participantes')
@UseGuards(RolesGuard)
export class ParticipantesController {
  constructor(private readonly participantesService: ParticipantesService) {}

  @Post('register')
  async register(
    @Body()
    createParticipantDto: {
      username: string;
      password: string;
      phoneNumber: string;
    },
  ): Promise<Participante> {
    const participant = new Participante();
    participant.username = createParticipantDto.username;
    participant.password = createParticipantDto.password;
    participant.phoneNumber = createParticipantDto.phoneNumber;
    return this.participantesService.create(participant);
  }

  // Obtener el perfil del participante actual
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @SetMetadata('roles', ['usuario', 'admin'])
  getProfile(@Request() req) {
    return this.participantesService.findOneByPhoneNumber(req.user.phoneNumber);
  }

  // Actualizar el perfil del participante
  @UseGuards(JwtAuthGuard)
  @Patch('profile')
  // @SetMetadata('roles', ['usuario'])
  updateProfile(@Request() req, @Body() updateData: any) {
    return this.participantesService.update(req.user.id, updateData);
  }

  // Obtener todos los desafíos completados por el participante
  @UseGuards(JwtAuthGuard)
  @Get('challenges')
  getCompletedChallenges(@Request() req) {
    return this.participantesService.getCompletedChallenges(req.user.id);
  }

  // Eliminar la cuenta del participante
  @UseGuards(JwtAuthGuard)
  @Delete('profile')
  @SetMetadata('roles', ['admin'])
  deleteAccount(@Request() req) {
    return this.participantesService.delete(req.user.id);
  }
}
