import { Injectable } from '@nestjs/common';
import { CreateRatonDto } from './dto/create-raton.dto';
import { UpdateRatonDto } from './dto/update-raton.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Raton } from './entities/raton.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RatonesService {
  constructor(
    @InjectRepository(Raton) private ratonRepository: Repository<Raton>,
  ) {}
  create(createRatonDto: CreateRatonDto) {
    return this.ratonRepository.save(createRatonDto);
  }

  findAll() {
    return this.ratonRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} raton`;
  }

  update(id: number, updateRatonDto: UpdateRatonDto) {
    return this.ratonRepository.update({ id }, { ...updateRatonDto });
  }

  remove(id: number) {
    return this.ratonRepository.delete({ id });
  }
}
