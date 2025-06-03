import { Background, Logo, Titulo } from './styles'
import Fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <Background style={{ backgroundImage: `url(${Fundo})` }}>
    <Logo src={logo} alt="logo efood"></Logo>
    <Titulo>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Titulo>
  </Background>
)

export default Header
