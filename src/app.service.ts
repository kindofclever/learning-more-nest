import { Injectable, Body } from '@nestjs/common';
import { Report, TypeOfTransaction } from './data';
import { data } from './data';
import { getType } from './helper/getType';
import { v4 as uuid } from 'uuid';

interface Body {
  amount: number;
  source: string;
  currency: string;
}

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

  createReport(type: TypeOfTransaction, body: Body) {
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

  deleteReport(type: TypeOfTransaction, id: string) {
    const transactionType = getType(type);
    const reportToDelete = data.reports.find((report) => report.id === id);
    if (
      reportToDelete &&
      reportToDelete.typeOfTransaction === transactionType
    ) {
      data.reports.splice(data.reports.indexOf(reportToDelete), 1);
      return { message: 'Report deleted' };
    }
  }

  updateReport(type: TypeOfTransaction, id: string, body: Body) {
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
