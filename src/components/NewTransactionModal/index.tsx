import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as S from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  //type: z.enum(['income', 'output']),
});

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  function handleCreateNewTransaction(data: newTransactionFormInputs) {
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            {...register('description')}
            type='text'
            placeholder='Descrição'
            required
          />
          <input
            {...register('price', { valueAsNumber: true })}
            type='number'
            placeholder='Preço'
            required
          />
          <input
            {...register('category')}
            type='text'
            placeholder='Categoria'
            required
          />

          <S.TransactionType>
            <S.TransactionTypeButton variant='income' value='income'>
              <ArrowCircleUp size={24} />
              Entrada
            </S.TransactionTypeButton>
            <S.TransactionTypeButton variant='outcome' value='outcome'>
              <ArrowCircleDown size={24} />
              Saída
            </S.TransactionTypeButton>
          </S.TransactionType>

          <button disabled={isSubmitting} type='submit'>
            Cadastrar
          </button>
        </form>
      </S.Content>
    </Dialog.Portal>
  );
}
