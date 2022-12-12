import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { data, TypeOfTransaction, Report } from './data';
import { getType } from './helper/helpers';
import { v4 as uuid } from 'uuid';

@Controller('reports/:typeOfTransaction')
export class AppController {
  @Get()
  getAllReports(@Param('typeOfTransaction') type: TypeOfTransaction) {
    const transactionType = getType(type);
    return data.reports.filter(
      (report) => report.typeOfTransaction === transactionType,
    );
  }

  @Get(':id')
  getReportById(
    @Param('typeOfTransaction') type: TypeOfTransaction,
    @Param('id') id: string,
  ) {
    const transactionType = getType(type);
    const specificReport = data.reports.find((report) => report.id === id);
    if (
      specificReport &&
      specificReport.typeOfTransaction === transactionType
    ) {
      return specificReport;
    } else {
      return { message: 'There is no such report' };
    }
  }

  @Post()
  createReport(
    @Param('typeOfTransaction') type: TypeOfTransaction,
    @Body() body: { amount: number; source: string; currency: string },
  ) {
    const newReport: Report = {
      id: uuid(),
      typeOfTransaction:
        type === 'incomes'
          ? TypeOfTransaction.INCOMES
          : TypeOfTransaction.EXPENSES,
      createdAt: new Date(),
      updatedAt: new Date(),
      source: body.source,
      amount: body.amount,
      currency: body.currency,
    };

    data.reports.push(newReport);

    return { message: 'Report created', newReport };
  }

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
  updateReport() {
    return { message: 'Report deleted' };
  }
}
