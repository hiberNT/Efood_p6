import styled from 'styled-components'
import { cores } from '../../styles'
import lixo from '../../assets/images/lixeira-de-reciclagem 1.png'

export const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 1;
  display: none;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  max-width: 360px;
  width: 100%;
  z-index: 1;
  padding: 32px 8px 8px 8px;
`

export const CartItem = styled.li`
  background-color: ${cores.Branco};
  color: ${cores.rosa};
  display: flex;
  margin-bottom: 16px;
  position: relative;

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0 16px 8px;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    margin-left: 8px;
  }

  button {
    background-image: url(${lixo});
    width: 16px;
    height: 16px;
    top: 80px;
    right: 14px;
    position: absolute;
    border: none;
    cursor: pointer;
  }
`
export const Produto = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
  margin: 8px 8px 12px 8px;
`

export const Total = styled.p`
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  background-color: ${cores.Branco};
  color: ${cores.rosa};
  font-weight: bold;
  font-size: 14px;
  border: none;
  width: 100%;
  height: 24px;
  margin-top: 16px;
  align-itens: center;
  cursor: pointer;
`
