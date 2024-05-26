import React from 'react';

export interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionsContextType {
  transactions: Transaction[];
}

export const TransactionsContext = React.createContext(
  {} as TransactionsContextType
);

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions');
    const data = await response.json();

    setTransactions(data);
  }

  React.useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
