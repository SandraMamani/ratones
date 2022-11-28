import { Module } from '@nestjs/common';
import { RatonesService } from './ratones.service';
import { RatonesController } from './ratones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Raton } from './entities/raton.entity';
@Module({
  controllers: [RatonesController],
  providers: [RatonesService],
  imports: [TypeOrmModule.forFeature([Raton])],
})
export class RatonesModule {}
