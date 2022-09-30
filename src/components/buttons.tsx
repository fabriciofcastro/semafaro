import { BoxButton, SButton } from "./styleSemafaro";

export default function Buttons({ corVermelho, corVerde, corAmarelo, desligar, automatico }) {

  return (

    <BoxButton >
      <SButton onClick={ corVermelho } value="Vermeho" type="button"  corButton="vermelho" />
      <SButton onClick={ corAmarelo } value="Amarelo" type="button" corButton="amarelo"/>
      <SButton onClick={ corVerde } value="Verde" type="button" corButton="verde" />
      <SButton onClick={ desligar } value="Desligar" type="button" corButton="cinza" />
      <SButton onClick={ automatico } value="automatico" type="button" corButton="automatico" />
    </BoxButton>
  )
}