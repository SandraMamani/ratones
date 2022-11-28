import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Raton {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  tipo: string;
  @Column()
  genero: string;
  @Column()
  peso: number;
  @Column()
  tamaño: number;
}
