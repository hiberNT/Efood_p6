import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  width: 320px;
  background-color: ${cores.rosa};
  margin-bottom: 24px;
  img {
    height: 167px;
    margin-top: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  ${ButtonContainer} {
    background-color: ${cores.Branco};
    color: ${cores.rosa};
    width: 304px;
    height: 24px;
    margin-top: 8px;
  }
`

export const Container = styled.div`
  margin: 8px 8px;
`

export const Titulo = styled.h1`
  font-size: 16px;
  margin-bottom: 8px;
`
