import { ConflictException, Injectable } from '@nestjs/common';
import { Participante } from './entities/participante.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
// import { CreateParticipanteDto } from './dto/create-participante.dto';
// import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Injectable()
export class ParticipantesService {
  constructor(
    @InjectRepository(Participante)
    private participantsRepository: Repository<Participante>,
  ) {}

  async findOneByPhoneNumber(
    phoneNumber: string,
  ): Promise<Participante | undefined> {
    return this.participantsRepository.findOne({ where: { phoneNumber } });
  }

  async create(participant: Participante): Promise<Participante> {
    const existingParticipant = await this.participantsRepository.findOne({
      where: [
        { phoneNumber: participant.phoneNumber },
        { username: participant.username },
      ],
    });

    if (existingParticipant) {
      throw new ConflictException(
        'El número de celular o nombre de usuario ya está en uso',
      );
    }

    const salt = await bcrypt.genSalt();
    participant.password = await bcrypt.hash(participant.password, salt);
    return this.participantsRepository.save(participant);
  }

  async update(id: number, updateData: any): Promise<Participante> {
    await this.participantsRepository.update(id, updateData);
    return this.participantsRepository.findOne({ where: { id: id } });
  }

  async getCompletedChallenges(id: number) {
    const participant = await this.participantsRepository.findOne({
      where: { id: id },
      relations: ['challenges'],
    });
    return participant.challenges;
  }

  async delete(id: number): Promise<void> {
    await this.participantsRepository.delete(id);
  }
}
