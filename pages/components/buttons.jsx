import styles  from '../../styles/semaro.module.css'
export default function Buttons(props) {

    return (

       <div className={styles.buttons}>
         <button id="Vermelho"   onClick={ props.verifica } >Vermeho</button>
         <button id="Amarelo"    onClick={ props.verifica } >Amarelo</button>
         <button id="Verde"      onClick={ props.verifica } >Verde</button>
         <button id="Desligar"   onClick={ props.verifica } >Desligar</button>
       </div>
    )
}