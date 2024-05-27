import React from 'react';
import { api } from '../lib/axios';

export interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}
interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

interface TransactionsContextType {
  transactions: Transaction[];
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

export const TransactionsContext = React.createContext(
  {} as TransactionsContextType
);

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  async function fetchTransactions() {
    const allTransactions = await api.get('transactions');
    setTransactions(allTransactions.data);
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, category, price, type } = data;

    const newTransaction = await api.post('transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    });

    setTransactions((prevState) => [newTransaction.data, ...prevState]);
  }

  React.useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
