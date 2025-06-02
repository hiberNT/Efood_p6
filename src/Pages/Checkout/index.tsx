import {
  Title,
  InputGroup,
  InputAddress,
  Btn,
  Card,
  InputCart,
  Description
} from './styles'
import { Overlay } from '../../components/Cart/styles'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
import { Navigate } from 'react-router-dom'

type Props = {
  onVoltar?: () => void
}

const Checkout = ({ onVoltar }: Props) => {
  const [step, setStep] = useState<'entrega' | 'cartao' | 'confirmacao'>(
    'entrega'
  )
  const [purchase, { data, isSuccess, error }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }
  const totalPrice = getTotalPrice()
  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }
  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      numberAndress: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      monthExpires: '',
      yearExpires: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'Minimo 8 caracteres')
        .required('Campo obrigatório'),
      numberAndress: Yup.string()
        .min(3, 'Minimo 3 caracteres')
        .required('Campo obrigatório'),
      complement: Yup.string().min(
        5,
        'O complemento precisa ter pelo menos 5 caracteres'
      ),
      cardOwner: Yup.string()
        .min(5, 'O nome do cartão precisa ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      cardNumber: Yup.string().min(5, 'Error').required('Campo obrigatório'),
      cardCode: Yup.string().min(3, 'Error').required('Campo obrigatório'),
      monthExpires: Yup.string().required('Campo obrigatório'),
      yearExpires: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      console.log('Enviando compra:', values)
      purchase({
        delivery: {
          receiver: values.fullName,
          andress: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: values.numberAndress,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: Number(values.monthExpires),
              year: Number(values.yearExpires)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputAsError = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    if (hasError) return message
    return ''
  }

  useEffect(() => {
    if (isSuccess && data) {
      setStep('confirmacao')
    }
  }, [isSuccess, data])

  if (items.length === 0) {
    return <Navigate to={'/'} />
  }

  return (
    <form onSubmit={form.handleSubmit}>
      {step === 'entrega' && (
        <>
          <Card className="container">
            <Overlay />
            <Card>
              <Title>Entrega</Title>
              <InputGroup>
                <label htmlFor="fullName">Quem irá receber</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {checkInputAsError('fullName', form.errors.fullName)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {checkInputAsError('address', form.errors.address)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{checkInputAsError('city', form.errors.city)}</small>
              </InputGroup>
              <InputAddress>
                <div>
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="number"
                    name="cep"
                    id="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{checkInputAsError('cep', form.errors.cep)}</small>
                </div>
                <div>
                  <label htmlFor="numberAndress">Número</label>
                  <input
                    type="number"
                    name="numberAndress"
                    id="numberAndress"
                    value={form.values.numberAndress}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {checkInputAsError(
                      'numberAndress',
                      form.errors.numberAndress
                    )}
                  </small>
                </div>
              </InputAddress>
              <InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  name="complement"
                  id="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {checkInputAsError('complement', form.errors.complement)}
                </small>
              </InputGroup>
              <Btn
                onClick={() => setStep('cartao')}
                type="button"
                title="Pagamento"
              >
                Continuar com pagamento
              </Btn>
              <Btn
                onClick={onVoltar}
                className="back"
                type="button"
                title="Voltar"
              >
                Voltar para o carrinho
              </Btn>
            </Card>
          </Card>
        </>
      )}
      {step === 'cartao' && (
        <>
          <Title>Pagamento - Valor a pagar R$ {totalPrice}</Title>
          <InputGroup>
            <label htmlFor="cardOwner">Nome do cartão</label>
            <input
              type="text"
              name="cardOwner"
              id="cardOwner"
              value={form.values.cardOwner}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {checkInputAsError('cardOwner', form.errors.cardOwner)}
            </small>
          </InputGroup>
          <InputCart>
            <div>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                type="number"
                name="cardNumber"
                id="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {checkInputAsError('cardNumber', form.errors.cardNumber)}
              </small>
            </div>
            <div>
              <label htmlFor="cardCode">CVV</label>
              <input
                type="number"
                name="cardCode"
                id="cardCode"
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {checkInputAsError('cardCode', form.errors.cardCode)}
              </small>
            </div>
          </InputCart>
          <InputCart>
            <div>
              <label htmlFor="monthExpires">Mês de vencimento</label>
              <input
                type="number"
                name="monthExpires"
                id="monthExpires"
                value={form.values.monthExpires}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {checkInputAsError('monthExpires', form.errors.cardCode)}
              </small>
            </div>
            <div>
              <label htmlFor="yearExpires">Ano de Vencimento</label>
              <input
                type="number"
                name="yearExpires"
                id="yearExpires"
                value={form.values.yearExpires}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {checkInputAsError('yearExpires', form.errors.yearExpires)}
              </small>
            </div>
          </InputCart>
          <Btn type="submit">Finalizar Pagamento</Btn>
          <Btn
            type="button"
            onClick={() => {
              setStep('entrega')
            }}
          >
            Voltar para a edição de endereço
          </Btn>
        </>
      )}
      {step === 'confirmacao' && data?.orderId && (
        <>
          <Title>Pedido realizado - {data.orderId}</Title>
          <Description>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido. <br />
          </Description>
          <Description>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. <br />
          </Description>
          <Description>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição. <br />
          </Description>
          <Description>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </Description>
          <Btn onClick={closeCart}>Concluir</Btn>
        </>
      )}
    </form>
  )
}

export default Checkout
