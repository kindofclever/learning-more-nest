import { Injectable, Type } from '@nestjs/common';
import { TypeOfTransaction } from './data';
import { data } from './data';
import { getType } from './helper/getType';

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
}
