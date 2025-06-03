import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HEADERProfile = styled.div`
  height: 186px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 768px;
  }
`
export const Container = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  justify-content: space-evenly;
  padding-top: 63px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 52px;
  }
`

export const Logo = styled.img`
  height: 57px;
  cursor: pointer;
`

export const Aba = styled.button`
  height: 21px;
  margin-top: 24px;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
  cursor: pointer;
  text-decoration: none;
  background: none;
  border: none;
`

export const AbaRestaurante = styled(Link)`
  height: 21px;
  margin-top: 24px;
  color: ${cores.rosa};
  cursor: pointer;
  text-decoration: none;
`

export const Container2 = styled.div`
  div {
  height: 280px;
  filter: brightness(70%);
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${breakpoints.tablet}) {
    width: 768px;
  }
  }

  h2 {
    font-size: 32px;
    font-weight:100;
    position: absolute;
    margin-left: 170px;
    top: 60%;

    @media (max-width: ${breakpoints.desktop}) {
      top: 84%;
    }
  }

  h1 {
    position: absolute;
    margin-left: 170px;
    top: 34%;

    @media (max-width: ${breakpoints.desktop}) {
      top: 48%;
    }
`
