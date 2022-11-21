import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutosModule } from './autos/autos.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [AutosModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'autos',
    synchronize: true,
    autoLoadEntities: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
