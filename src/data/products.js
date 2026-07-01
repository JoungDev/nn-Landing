import operacionOrionImage from '../assets/images/products/operacion-orion-main.jpeg'
import elSaladoFrontImage from '../assets/images/products/el-salado-front.jpeg'
import elSaladoBackImage from '../assets/images/products/el-salado-back.jpeg'
import tiempoDescuentoImage from '../assets/images/products/tiempo-de-descuento-main.jpeg'

export const products = [
  {
    id: 1,
    slug: 'operacion-orion',
    collectionNumber: '01',
    name: 'Operación Orión',
    garmentType: 'Camiseta',
    price: null,
    colors: ['Blanco', 'Negro'],
    sizes: [
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
    shortDescription:
      'Un recordatorio de la incursión militar y paramilitar en la Comuna 13 de Medellín durante 2002.',
    meaning:
      'Más que una prenda, es un símbolo de lucha por la verdad. Honramos a las víctimas y a sus familiares, quienes durante años exigieron justicia ante el silencio y la negación estatal. Cada detalle en el diseño es un acto de resistencia contra el olvido.',
    images: [
      {
        src: operacionOrionImage,
        alt: 'Camiseta de la colección Operación Orión',
      },
    ],
    status: 'available',
    featured: true,
  },
  {
    id: 2,
    slug: 'el-salado',
    collectionNumber: '02',
    name: 'El Salado',
    garmentType: 'Hoodie',
    price: 155000,
    colors: ['Negro'],
    sizes: [
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
    shortDescription:
      'El relato de una herida abierta en Bolívar, donde el abandono estatal facilitó la masacre de un corregimiento entero.',
    meaning:
      'Esta pieza rinde homenaje a la resistencia de una comunidad que sufrió el horror mientras el país permanecía impasible. Al usarla, alzamos la voz por quienes ya no están y reafirmamos nuestro compromiso: jamás repetir, jamás olvidar.',
    images: [
      {
        src: elSaladoFrontImage,
        alt: 'Parte frontal del hoodie de la colección El Salado',
      },
      {
        src: elSaladoBackImage,
        alt: 'Parte posterior del hoodie de la colección El Salado',
      },
    ],
    status: 'available',
    featured: true,
  },
  {
    id: 3,
    slug: 'tiempo-de-descuento',
    collectionNumber: '03',
    name: 'Tiempo de Descuento',
    garmentType: 'Camiseta tipo polo',
    price: 87000,
    colors: ['Paleta tricolor'],
    sizes: [
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
    shortDescription:
      'Dos épocas, una misma estrategia: usar la pasión del fútbol para ocultar hechos mucho más graves e importantes.',
    meaning:
      'Una invitación a vivir la pasión de un deporte que nos pertenece como pueblo sin cerrar los ojos. Es un llamado a la conciencia crítica y a no permitir que el entretenimiento sea la excusa para el silencio.',
    images: [
      {
        src: tiempoDescuentoImage,
        alt: 'Camiseta tipo polo de la colección Tiempo de Descuento',
      },
    ],
    status: 'available',
    featured: true,
  },
]