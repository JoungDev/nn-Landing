import { formatCurrency } from './formatCurrency.js'

export function createWhatsAppLink({
  phoneNumber,
  product,
  selectedSize,
}) {
  if (!phoneNumber || !product || !selectedSize) {
    return ''
  }

  const price = formatCurrency(product.price)
  const colors = product.colors.join(', ')

  const message = [
    'Hola, quiero confrimar mi pedido para esta prenda de NN:',
    '',
    `Prenda: ${product.garmentType} ${product.name}`,
    `Colección: ${product.collectionNumber}`,
    `Talla: ${selectedSize}`,
    `Color: ${colors}`,
    `Precio: ${price}`,
    '',
    '¿Que medios de pago manejas?',
  ].join('\n')

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}