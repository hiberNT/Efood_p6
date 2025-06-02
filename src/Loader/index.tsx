import { SyncLoader } from 'react-spinners'
import { cores } from '../../src/styles'
import { Container } from './styles'

export const Loader = () => (
  <Container>
    <SyncLoader color={cores.rosa} />
  </Container>
)

export default Loader
