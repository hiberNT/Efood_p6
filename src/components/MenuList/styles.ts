import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  margin: 90px 0;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  display: none;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const Conteudo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${cores.rosa};
  color: ${cores.Branco};
  width: 1024px;
  height: 344px;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 108px;
  margin-left: 224px;
`
export const Image = styled.img`
  width: 280px;
  height: 280px;
  margin-left: 32px;
`

export const Fechar = styled.img`
  position: absolute;
  left: 97%;
  top: 2%;
  cursor: pointer;
`

export const Section = styled.section`
  margin: 24px;

  h1 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  ${ButtonContainer} {
    background-color: ${cores.Branco};
    color: ${cores.rosa};
    width: 218px;
    height: 24px;
    margin-top: 16px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  width: 656px;
  line-height: 22px;
`
