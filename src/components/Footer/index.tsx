import logo from '../../assets/images/logo.png'
import Ig from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import Face from '../../assets/images/facebook-round-svgrepo-com 1.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.png'
import { Container, Description, ListaSociais } from './styles'

const Rodape = () => (
  <Container>
    <img src={logo} alt="" />
    <div>
      <ListaSociais>
        <img src={Ig} alt="" />
        <img src={Face} alt="" />
        <img src={twitter} alt="" />
      </ListaSociais>
      <Description>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br />
        dos produtos é toda do estabelecimento contratado.
      </Description>
    </div>
  </Container>
)

export default Rodape
