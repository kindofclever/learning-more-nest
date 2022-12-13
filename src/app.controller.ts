import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { data, TypeOfTransaction, Report } from './data';
import { getType } from './helper/getType';
import { AppService } from './app.service';

@Controller('reports/:typeOfTransaction')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param('typeOfTransaction') type: TypeOfTransaction) {
    return this.appService.getAllReports(type);
  }

  @Get(':id')
  getReportById(
    @Param('typeOfTransaction') type: TypeOfTransaction,
    @Param('id') id: string,
  ) {
    return this.appService.getReportById(type, id);
  }

  @Post()
  createReport(
    @Param('typeOfTransaction') type: TypeOfTransaction,
    @Body() body: { amount: number; source: string; currency: string },
  ) {
    return this.appService.createReport(type, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(
    @Param('typeOfTransaction') type: TypeOfTransaction,
    @Param('id') id: string,
  ) {
    return this.appService.deleteReport(type, id);
  }

  @Put(':id')
  updateReport(
    @Param('typeOfTransaction') type: TypeOfTransaction,
    @Param('id') id: string,
    @Body() body: { amount: number; source: string; currency: string },
  ) {
    return this.appService.updateReport(type, id, body);
  }
}
