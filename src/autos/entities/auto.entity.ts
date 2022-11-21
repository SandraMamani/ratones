import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auto {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  marca: string;
  @Column()
  placa:number;
  @Column()
  pintura:string;
  @Column()
  año:number;
}
