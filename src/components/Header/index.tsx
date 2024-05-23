import * as S from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import LogoImg from '../../assets/logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={LogoImg} alt='' />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transacao</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
