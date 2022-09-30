import Buttons from "./buttons";
import imgDesligado from '../../public/image/desligado.png'
import imgVermelho from '../../public/image/vermelho.png'
import imgVerde from '../../public/image/verde.png'
import imgAmarelo from '../../public/image/amarelo.png'
import { useState } from "react";

export default function Semafaro() {

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