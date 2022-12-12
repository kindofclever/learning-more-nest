import { TypeOfTransaction } from '../data';

export const getType = (type: string) => {
  switch (type) {
    case 'incomes':
      return TypeOfTransaction.INCOMES;
    case 'expenses':
      return TypeOfTransaction.EXPENSES;
    default:
      return { message: 'Invalid type of transaction' };
  }
};
