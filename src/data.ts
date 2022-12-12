export interface Data {
  reports: Report[];
}

export enum TypeOfTransaction {
  INCOMES = 'incomes',
  EXPENSES = 'expenses',
}

export interface Report {
  id: string;
  typeOfTransaction: TypeOfTransaction;
  createdAt: Date;
  updatedAt: Date;
  source: string;
  amount: number;
  currency: string;
}

export const data: Data = {
  reports: [
    {
      id: 'uuid1',
      typeOfTransaction: TypeOfTransaction.INCOMES,
      createdAt: new Date(),
      updatedAt: new Date(),
      source: 'Salary',
      amount: 20000,
      currency: 'SEK',
    },
    {
      id: 'uuid2 ',
      typeOfTransaction: TypeOfTransaction.INCOMES,
      createdAt: new Date(),
      updatedAt: new Date(),
      source: 'Subrental',
      amount: 6500,
      currency: 'SEK',
    },
    {
      id: 'uuid3',
      typeOfTransaction: TypeOfTransaction.INCOMES,
      createdAt: new Date(),
      updatedAt: new Date(),
      source: 'Singing in the streets',
      amount: 1000,
      currency: 'SEK',
    },
    {
      id: 'uuid3',
      typeOfTransaction: TypeOfTransaction.INCOMES,
      createdAt: new Date(),
      updatedAt: new Date(),
      source: 'Tax refund',
      amount: 500,
      currency: 'SEK',
    },
    {
      id: 'uuid4',
      typeOfTransaction: TypeOfTransaction.INCOMES,
      createdAt: new Date(),
      updatedAt: new Date(),
      source: 'Christmas gift',
      amount: 5000,
      currency: 'SEK',
    },
    {
      id: 'uuid5',
      typeOfTransaction: TypeOfTransaction.INCOMES,
      createdAt: new Date(),
      updatedAt: new Date(),
      source: 'Christmas gift',
      amount: 2000,
      currency: 'SEK',
    },
    {
      id: 'uuid6',
      typeOfTransaction: TypeOfTransaction.EXPENSES,
      createdAt: new Date(),
      updatedAt: new Date(),
      source: 'Food',
      amount: 1000,
      currency: 'SEK',
    },
    {
      id: 'uuid7',
      typeOfTransaction: TypeOfTransaction.EXPENSES,
      createdAt: new Date(),
      updatedAt: new Date(),
      source: 'Rent',
      amount: 5000,
      currency: 'SEK',
    },
    {
      id: 'uuid8',
      typeOfTransaction: TypeOfTransaction.EXPENSES,
      createdAt: new Date(),
      updatedAt: new Date(),
      source: 'Ergo chair',
      amount: 2000,
      currency: 'SEK',
    },
    {
      id: 'uuid9',
      typeOfTransaction: TypeOfTransaction.EXPENSES,
      createdAt: new Date(),
      updatedAt: new Date(),
      source: 'Dog food',
      amount: 2000,
      currency: 'SEK',
    },
    {
      id: 'uuid10',
      typeOfTransaction: TypeOfTransaction.EXPENSES,
      createdAt: new Date(),
      updatedAt: new Date(),
      source: 'Mobile phone',
      amount: 500,
      currency: 'SEK',
    },
  ],
};
