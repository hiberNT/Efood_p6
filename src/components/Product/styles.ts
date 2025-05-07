import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/style'

export const Card = styled.div`
  width: 475px;
  height: 398px;
  color: ${cores.rosa};
  position: relative;
  border: 2px solid ${cores.rosa};
  margin-bottom: 48px;

  img {
    width: 472px;
    height: 198px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagContainer} {
    margin-left: 8px;
  }
`
export const Restaurante = styled.div`
  margin-left: 8px;
`

export const TituloContainer = styled.h2`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
`
export const Nota = styled.div`
  display: flex;

  h4 {
    width: 26px;
    height: 21px;
  }

  img {
    width: 21px;
    height: 21px;
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 16px;
`
