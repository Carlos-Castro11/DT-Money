import React from 'react'
import * as S from './styles'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Transactions() {
  const { transactions } = React.useContext(TransactionsContext)
  const [search, setSearch] = React.useState<string>('')

  const filteredTransactions =
    transactions.length > 0
      ? transactions.filter((transaction) =>
          transaction.description
            .toLowerCase()
            .includes(search.toLocaleLowerCase()),
        )
      : []

  function setSearchTransactions(query: string) {
    setSearch(query)
  }

  return (
    <div>
      <Header />
      <Summary />
      <S.TransactionsContainer>
        <SearchForm setSearchTransactions={setSearchTransactions} />
        <S.TransactionsTable>
          <tbody>
            {search.length > 0
              ? filteredTransactions.map((transaction) => {
                  return (
                    <tr key={transaction.id}>
                      <td width="50%">{transaction.description}</td>
                      <td>
                        <S.PriceHighlight variant={transaction.type}>
                          {transaction.type === 'outcome' && '- '}
                          {priceFormatter.format(transaction.price)}
                        </S.PriceHighlight>
                      </td>
                      <td>{transaction.category}</td>
                      <td>
                        {dateFormatter.format(new Date(transaction.createdAt))}
                      </td>
                    </tr>
                  )
                })
              : transactions.map((transaction) => {
                  return (
                    <tr key={transaction.id}>
                      <td width="50%">{transaction.description}</td>
                      <td>
                        <S.PriceHighlight variant={transaction.type}>
                          {transaction.type === 'outcome' && '- '}
                          {priceFormatter.format(transaction.price)}
                        </S.PriceHighlight>
                      </td>
                      <td>{transaction.category}</td>
                      <td>
                        {dateFormatter.format(new Date(transaction.createdAt))}
                      </td>
                    </tr>
                  )
                })}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  )
}
