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
    'Hola, quiero consultar la disponibilidad de esta prenda de NN:',
    '',
    `Prenda: ${product.garmentType} ${product.name}`,
    `Colección: ${product.collectionNumber}`,
    `Talla: ${selectedSize}`,
    `Color: ${colors}`,
    `Precio: ${price}`,
    '',
    '¿Está disponible?',
  ].join('\n')

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}