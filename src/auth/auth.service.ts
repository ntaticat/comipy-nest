import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ParticipantesService } from 'src/participantes/participantes.service';
import { JwtService } from '@nestjs/jwt';
import { Participante } from 'src/participantes/entities/participante.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private participantsService: ParticipantesService,
    private jwtService: JwtService,
  ) {}

  async register(
    username: string,
    password: string,
    phoneNumber: string,
  ): Promise<Participante> {
    const hashedPassword = await bcrypt.hash(password, 10); // Encriptar la contraseña
    const participant = new Participante();
    participant.username = username;
    participant.password = hashedPassword;
    participant.phoneNumber = phoneNumber;
    return this.participantsService.create(participant);
  }

  async validateParticipant(
    phoneNumber: string,
    password: string,
  ): Promise<any> {
    const participant =
      await this.participantsService.findOneByPhoneNumber(phoneNumber);
    if (!participant) {
      throw new NotFoundException('Número de celular no encontrado');
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      participant.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }
    const { ...result } = participant;
    return result;
  }

  async login(participant: any) {
    const payload = {
      phoneNumber: participant.phoneNumber,
      sub: participant.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
