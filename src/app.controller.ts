import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';
import { TypeOfTransaction } from './data';
import { AppService } from './app.service';

@Controller('reports/:typeOfTransaction')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(
    @Param('typeOfTransaction', new ParseEnumPipe(TypeOfTransaction))
    type: TypeOfTransaction,
  ) {
    return this.appService.getAllReports(type);
  }

  @Get(':id')
  getReportById(
    @Param('typeOfTransaction', new ParseEnumPipe(TypeOfTransaction))
    type: TypeOfTransaction,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.appService.getReportById(type, id);
  }

  @Post()
  createReport(
    @Param('typeOfTransaction', new ParseEnumPipe(TypeOfTransaction))
    type: TypeOfTransaction,
    @Body() body: { amount: number; source: string; currency: string },
  ) {
    return this.appService.createReport(type, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(
    @Param('typeOfTransaction', new ParseEnumPipe(TypeOfTransaction))
    type: TypeOfTransaction,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.appService.deleteReport(type, id);
  }

  @Put(':id')
  updateReport(
    @Param('typeOfTransaction', new ParseEnumPipe(TypeOfTransaction))
    type: TypeOfTransaction,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: { amount: number; source: string; currency: string },
  ) {
    return this.appService.updateReport(type, id, body);
  }
}
