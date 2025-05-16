import { styled } from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.rosaClaro};
  padding-top: 40px;
  height: 270px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    width: 554px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 768px;
  }
`
export const ListaSociais = styled.ul`
  height: 24px;

  img {
    height: 24px;
    margin-right: 8px;
    margin-top: 24px;
    margin-bottom: 80px;
  }
`

export const Description = styled.p`
  color: ${cores.rosa};
  font-size: 10px;
  margin-top: 80px;
`
