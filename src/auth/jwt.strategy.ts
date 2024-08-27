import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { ParticipantesService } from '../participantes/participantes.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private participantsService: ParticipantesService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return await this.participantsService.findOneByPhoneNumber(
      payload.phoneNumber,
    );
  }
}
