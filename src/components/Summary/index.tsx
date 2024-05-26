import React from 'react';
import * as S from './styles';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

export function Summary() {
  const { transactions } = React.useContext(TransactionsContext);

  return (
    <S.SummaryContainer>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00b37e' />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color='#f75a68' />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
      <S.SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color='#ffff' />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  );
}
