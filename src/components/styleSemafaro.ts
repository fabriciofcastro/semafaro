import backg from '../../public/image/estrada.jpg'
import styled from "styled-components";

export const SContainer = styled.div`
  background-image: url(${backg.src});
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
`

/**
 * *****  B O X     I M A G E M     S E M Á F A R O    *****
 */


export const BoxSemafaro = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  justify-content: center;
`

/**
 *     **************    S T Y L E     B U T T O N    *************
 */
export const BoxButton = styled.div`
  width: 20rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: end;

`

export const SButton = styled.input<corButtonProps>`
  width: 10rem;
  height: 4rem;
  margin: 1rem;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: .5rem;

      :hover {
        background-color: #c1c1c180;
        color: #000;

      }

  ${({corButton}) => getCorButton(corButton)}
`

interface corButtonProps {
  corButton: string
}

const getCorButton = corButton => {
    if (corButton === 'vermelho') {
        return `
          background-color: red;
        `
    }
    else if(corButton === 'verde') {
      return `
        background-color: green;
      `
    }

    else if(corButton === 'amarelo'){
      return `
        background-color: yellow;
        color: orange;
      `
    }

    else if (corButton === 'cinza') {
      return `
        background-color: #c1c1c1;
      `
    }

    else
        return `
          background-color: #2314aa;
        `
}

