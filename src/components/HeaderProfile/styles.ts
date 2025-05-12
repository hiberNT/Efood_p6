import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HEADERProfile = styled.div`
  height: 186px;
`
export const Container = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  justify-content: space-evenly;
  padding-top: 63px;
`

export const Logo = styled.img`
  height: 57px;
  cursor: pointer;
`

export const Aba = styled(Link)`
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
  }

  h2 {
    font-size: 32px;
    font-weight:100;
    top: 30%;
    position: absolute;
    margin-left: 170px;
  }

  h1 {
    position: absolute;
    margin-left: 170px;
    bottom: 36%;
`
