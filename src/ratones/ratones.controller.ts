import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { RatonesService } from './ratones.service';
import { CreateRatonDto } from './dto/create-raton.dto';
import { UpdateRatonDto } from './dto/update-raton.dto';

@Controller('ratones')
export class RatonesController {
  constructor(private readonly ratonesService: RatonesService) {}

  @Post()
  create(@Body() createRatonDto: CreateRatonDto) {
    return this.ratonesService.create(createRatonDto);
  }

  @Get()
  findAll() {
    return this.ratonesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ratonesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRatonDto: UpdateRatonDto) {
    return this.ratonesService.update(+id, updateRatonDto);
  }
  @Put(':id')
  async UpdateDulceDto(
    @Param('id') id: number,
    @Body() updateRatonDto: UpdateRatonDto,
  ) {
    await this.ratonesService.update(id, updateRatonDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.ratonesService.remove(id);
  }
}
