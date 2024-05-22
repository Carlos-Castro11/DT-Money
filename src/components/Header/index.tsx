import * as S from "./styles";
import LogoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={LogoImg} alt="" />
        <S.NewTransactionButton>Nova transacao</S.NewTransactionButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
