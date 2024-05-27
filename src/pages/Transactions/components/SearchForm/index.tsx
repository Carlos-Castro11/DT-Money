// import { MagnifyingGlass } from 'phosphor-react';
import React from 'react'
import * as S from './styles'

interface SearchFormProps {
  setSearchTransactions: (query: string) => void
}

export function SearchForm({ setSearchTransactions }: SearchFormProps) {
  function handleSearchInput(e: React.FormEvent<HTMLInputElement>) {
    setSearchTransactions(e.currentTarget.value)
  }

  return (
    <S.SearchFormContainer>
      <input
        type="text"
        placeholder="Busque por transacoes"
        onChange={handleSearchInput}
      />
      {/* <button type='submit' disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button> */}
    </S.SearchFormContainer>
  )
}
