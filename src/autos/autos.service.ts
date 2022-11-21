import { Injectable } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Auto } from "./entities/auto.entity";
import { Repository } from "typeorm";

@Injectable()
export class AutosService {
  constructor(
    @InjectRepository(Auto) private autoRepository: Repository<Auto>,
  ){}
  create(createAutoDto: CreateAutoDto) {
    return this.autoRepository.save(createAutoDto);
  }

  findAll() {
    return this.autoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} auto`;
  }

  update(id: number, updateAutoDto: UpdateAutoDto) {
    return this.autoRepository.update({ id }, { ...updateAutoDto });
  }

  remove(id: number) {
    return this.autoRepository.delete({ id });
  }
}
