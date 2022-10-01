import Buttons from "./buttons";
import imgDesligado from '../../public/image/desligado.png'
import imgVermelho from '../../public/image/vermelho.png'
import imgVerde from '../../public/image/verde.png'
import imgAmarelo from '../../public/image/amarelo.png'
import { useState } from "react";
import { SContainer, BoxSemafaro, ImgSemafaro } from "./styleSemafaro";



export default function Semafaro() {

  const [statusImg, setStatusImg] = useState(imgDesligado)

  const corVermelho = () => {
    setStatusImg(imgVermelho)
  }

  const corAmarelo = () => {
    setStatusImg(imgAmarelo)
  }

  const corVerde = () => {
    setStatusImg(imgVerde)
  }


  /**
   *  ///--//////////------------------------/////////////
   */

  function clearTime() {

  }

  
  function intervaloVermelho() {
    setStatusImg(imgVermelho)
    const stopTimeOut = setTimeout(() => {
      intervaloAmarelo()
    }, 5000)

    return stopTimeOut
  }

  function intervaloAmarelo() {
    setStatusImg(imgAmarelo)
    const stopTimeOut = setTimeout(() => {
      intervalVerde()
    }, 2000)

    return stopTimeOut
  }

  function intervalVerde() {
    setStatusImg(imgVerde)
    const stopTimeOut = setTimeout(() => {
      intervaloVermelho()
    }, 5000)

    return stopTimeOut
  }

  const desligar = () => {
    setStatusImg(imgDesligado)

  }


  return (
    <SContainer >
      <BoxSemafaro>
        <ImgSemafaro src={ statusImg.src } alt="semáfaro" />
      </BoxSemafaro>

      <Buttons corVermelho={ corVermelho } corVerde={ corVerde } corAmarelo={ corAmarelo } desligar={ desligar } automatico={ intervaloVermelho } />
    </SContainer>
  )
}