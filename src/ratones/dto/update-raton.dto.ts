import { PartialType } from '@nestjs/mapped-types';
import { CreateRatonDto } from './create-raton.dto';

export class UpdateRatonDto extends PartialType(CreateRatonDto) {
  id: number;
  nombre: string;
  tipo: string;
  genero: string;
  peso: number;
  tamaño: number;
}
