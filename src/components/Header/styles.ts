import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Background = styled.div`
  height: 384px;
  text-align: center;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    height: 400px;
    width: 554px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 768px;
  }
`
export const Logo = styled.img`
  height: 57px;
  margin-top: 16px;
`
export const Titulo = styled.p`
  color: ${cores.rosa};
  font-size: 36px;
  font-weight: 900;
  margin-top: 194px;
`
