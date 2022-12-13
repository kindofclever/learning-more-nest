import { Injectable, Type } from '@nestjs/common';
import { TypeOfTransaction } from './data';
import { data } from './data';
import { getType } from './helper/getType';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AppService {
  getAllReports(type: TypeOfTransaction) {
    const transactionType = getType(type);

    return data.reports.filter(
      (report) => report.typeOfTransaction === transactionType,
    );
  }

  getReportById(type: TypeOfTransaction, id: string) {
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

  createReport(
    type: TypeOfTransaction,
    body: { amount: number; source: string; currency: string },
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
}
