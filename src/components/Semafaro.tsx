import Buttons from "./buttons";
import imgDesligado from '../../public/image/desligado.png'
import imgVermelho from '../../public/image/vermelho.png'
import imgVerde from '../../public/image/verde.png'
import imgAmarelo from '../../public/image/amarelo.png'
import { useState } from "react";
import { SContainer, BoxButton, BoxSemafaro } from "./styleSemafaro";
import Image from "../../node_modules/next/image";


export default function Semafaro() {

  const [statusImg, setStatusImg] = useState(imgDesligado)


  const corVermelho = () => {

    setStatusImg(imgVermelho)
  }
  const corVerde = () => {

    setStatusImg(imgVerde)
  }
  const corAmarelo = () => {

    setStatusImg(imgAmarelo)
  }
  const desligar = () => {

    setStatusImg(imgDesligado)
  }

  const automatico = () => {
    setInterval(() => {
// implementação em desenvolvimento
    },5000)
  }


  return (
    <SContainer >
      <BoxSemafaro>
        <Image src={ statusImg } alt="semáfaro" width={100} height={100}/>
      </BoxSemafaro>

      <Buttons corVermelho={ corVermelho } corVerde={ corVerde } corAmarelo={ corAmarelo } desligar={ desligar } automatico={automatico}/>


    </SContainer>
  )
}