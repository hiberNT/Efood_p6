import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  color: ${cores.Branco};
  background-color: ${cores.rosa};
  width: 82px;
  height: 24px;
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: none;
`

export const ButtonLink = styled(Link)`
  color: ${cores.Branco};
  background-color: ${cores.rosa};
  width: 82px;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  border: none;
  padding: 4px;
`
