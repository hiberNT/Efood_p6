import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  position: fixed;
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 16px;
  margin-top: 32px;
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  input {
    margin-bottom: 8px;
    width: 100%;
    height: 32px;
    border: none;

    &.error {
      border: 1px red solid;
    }
  }

  label {
    display: block;
    margin-bottom: 8px;
  }
`

export const InputAddress = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  border: none;

  div {
    label {
      display: block;
      margin-bottom: 4px;
    }
    input {
      width: 100%;
      padding: 8px;

      &.error {
        border: 1px red solid;
      }
    }
  }
`
export const InputCart = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  border: none;

  div {
    label {
      display: block;
      margin-bottom: 4px;
    }

    input {
      width: 155px;
      padding: 8px;
      &.error {
        border: 1px red solid;
      }
    }

    #numberCart {
      width: 228px;
    }

    #cardCode {
      width: 87px;
    }
  }
`

export const Description = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 24px;
`

export const Btn = styled.button`
  background-color: ${cores.Branco};
  color: ${cores.rosa};
  display: block;
  border: none;
  width: 100%;
  height: 24px;
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &.back {
    margin-top: 0;
  }
`
