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
import { v4 as uuid } from 'uuid';
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
    const transactionType = getType(type);
    const reportToDelete = data.reports.find((report) => report.id === id);
    if (
      reportToDelete &&
      reportToDelete.typeOfTransaction === transactionType
    ) {
      data.reports.splice(data.reports.indexOf(reportToDelete), 1);
    }

    return { message: 'Report deleted' };
  }

  @Put(':id')
  updateReport(
    @Param('typeOfTransaction') type: TypeOfTransaction,
    @Param('id') id: string,
    @Body() body: { amount: number; source: string; currency: string },
  ) {
    const transactionType = getType(type);
    const reportToUpdate = data.reports.find((report) => report.id === id);
    if (
      reportToUpdate &&
      reportToUpdate.typeOfTransaction === transactionType
    ) {
      reportToUpdate.amount = body.amount;
      reportToUpdate.source = body.source;
      reportToUpdate.currency = body.currency;
      reportToUpdate.updatedAt = new Date();
    }
    return { message: 'Report updated', reportToUpdate };
  }
}

// controller is handling business logic
// need to create a service to handle business logic
