export function formatCurrency(value) {
  if (value === null || value === undefined) {
    return 'Precio por confirmar'
  }

  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}