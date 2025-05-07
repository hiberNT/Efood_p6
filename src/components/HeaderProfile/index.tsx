import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Logo, Aba, HEADERProfile, Container2 } from './styles'
import logo from '../../assets/images/logo.png'
import Fundo from '../../assets/images/fundo.png'
import { infos } from '../../Pages/Home'

const HeaderProfile = () => {
  const { id } = useParams()
  const [dados, setDados] = useState<infos>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setDados(res))
  }, [id])

  if (!dados) return null

  return (
    <>
      <HEADERProfile style={{ backgroundImage: `url(${Fundo})` }}>
        <Container>
          <Aba to="/">Restaurantes</Aba>
          <Logo src={logo} alt="efood logo" />
          <Aba to="/">0 produto(s) no carrinho</Aba>
        </Container>
        <p>ID do restaurante: {id}</p>
      </HEADERProfile>

      <Container2>
        <div style={{ backgroundImage: `url(${dados.capa})` }} />
        <h2>{dados.tipo}</h2>
        <h1>{dados.titulo}</h1>
      </Container2>
    </>
  )
}

export default HeaderProfile
