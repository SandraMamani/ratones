import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from "@nestjs/common";
import { AutosService } from './autos.service';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';

@Controller('autos')
export class AutosController {
  constructor(private readonly autosService: AutosService) {}

  @Post()
  create(@Body() createAutoDto: CreateAutoDto) {
    return this.autosService.create(createAutoDto);
  }

  @Get()
  findAll() {
    return this.autosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.autosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAutoDto: UpdateAutoDto) {
    return this.autosService.update(+id, updateAutoDto);
  }
  @Put(':id')
  async UpdateDulceDto(
    @Param('id') id: number,
    @Body() updateAutoDto: UpdateAutoDto,
  ) {
    await this.autosService.update(id, updateAutoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.autosService.remove(id);
  }
}
