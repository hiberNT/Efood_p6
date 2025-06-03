export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount) //para trasformar o dinheiro em BR
}
