import React from 'react';
import * as S from './styles';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import { TransactionsContext } from '../../contexts/TransactionsContext';

export function Transactions() {
  const { transactions } = React.useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />
        <S.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width='50%'>{transaction.description}</td>
                  <td>
                    <S.PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </S.PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  );
}
