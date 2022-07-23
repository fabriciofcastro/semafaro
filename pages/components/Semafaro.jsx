import Buttons from "./buttons";
import Image from "next/image";
import imgDesligado from '../../public/image/desligado.png'
import imgVermelho from '../../public/image/vermelho.png'
import imgVerde from '../../public/image/verde.png'
import imgAmarelo from '../../public/image/amarelo.png'
import styles  from '../../styles/semaro.module.css'
import { useState } from "react";

export default function Semafaro(props) {

    const [status, setStatus] = useState(imgDesligado) 
    

    function validarStatus(e) {
            corSemafaro[e.target.id]()
    }

        

        const corSemafaro = {

            'Vermelho': () => <Image src={setStatus(imgVermelho)} alt="" />,
            'Amarelo':  () => <Image src={setStatus(imgAmarelo)} alt="" />,
            'Verde':    () => <Image src={setStatus(imgVerde)} alt="" />,
            'Desligar': () => <Image src={setStatus(imgDesligado)} alt="" />
        } 

    return (
        <div className={styles.Buttons}>
             <Image src={status} alt="" />
             <Buttons verifica={validarStatus} />          
        </div>
    )
}