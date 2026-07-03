import operacionOrionImage from "../assets/images/products/operacion-orion-main.jpeg";
import elSaladoFrontImage from "../assets/images/products/el-salado-front.jpeg";
import elSaladoBackImage from "../assets/images/products/el-salado-back.jpeg";
import elSaladoBackImage2 from "../assets/images/products/el-salado-person-back.jpeg";
import elSaladoBackImage3 from "../assets/images/products/el-salado-person-front.jpeg";
import elSaladoMessageImage from "../assets/images/products/el-salado-message.jpeg";
import tiempoDescuentoImage from "../assets/images/products/tiempo-de-descuento-main.jpeg";
import operacionOrionPerson from "../assets/images/products/operacion-orion-person.png";
import operacionOrionMessage from "../assets/images/products/operacion-orion-message.png";

export const products = [
  /* {
    id: 3,
    slug: "tiempo-de-descuento",
    collectionNumber: "03",
    name: "Tiempo de Descuento",
    garmentType: "Camiseta tipo polo",
    price: 87000,
    colors: ["Paleta tricolor"],
    sizes: [
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
    ],
    shortDescription:
      "Dos épocas, una misma estrategia: usar la pasión del fútbol para ocultar hechos mucho más graves e importantes.",
    meaning:
      "Una invitación a vivir la pasión de un deporte que nos pertenece como pueblo sin cerrar los ojos. ¿Qué está sucediendo en nuestro país y en el mundo entero mientras tenemos la mirada fija en un balón? Es un llamado a la conciencia crítica y a no permitir que el entretenimiento sea la excusa para el silencio.",
    images: [
      {
        src: tiempoDescuentoImage,
        alt: "Camiseta tipo polo de la colección Tiempo de Descuento",
      },
    ],
    status: "available",
    featured: true,
  } ,*/
  {
    id: 2,
    slug: "el-salado",
    collectionNumber: "02",
    name: "El Salado",
    garmentType: "Hoodie",
    price: 155000,
    colors: ["Negro"],
    sizes: [
      { label: "S", available: false },
      { label: "M", available: false },
      { label: "L", available: true },
      { label: "XL", available: true },
    ],
    shortDescription:
      "El relato de una herida abierta en Bolívar, donde el abandono estatal facilitó la masacre de un corregimiento entero.",
    meaning:
      "Esta pieza rinde homenaje a la resistencia de una comunidad que sufrió el horror mientras el país permanecía impasible. Al usarla, alzamos la voz por quienes ya no están y reafirmamos nuestro compromiso: jamás repetir, jamás olvidar.",
    images: [
      {
        src: elSaladoFrontImage,
        alt: "Parte frontal del hoodie de la colección El Salado",
      },
      {
        src: elSaladoBackImage,
        alt: "Parte posterior del hoodie de la colección El Salado",
      },
      {
        src: elSaladoMessageImage,
        alt: "Detalle del mensaje en la parte posterior del hoodie de la colección El Salado",
      },
      {
        src: elSaladoBackImage2,
        alt: "Parte posterior del hoodie de la colección El Salado con persona",
      },
      {
        src: elSaladoBackImage3,
        alt: "Parte frontal del hoodie de la colección El Salado con persona",
      }
      
    ],
    status: "available",
    featured: true,
  },
  {
    id: 1,
    slug: "operacion-orion",
    collectionNumber: "01",
    name: "Operación Orión",
    garmentType: "Camiseta",
    price: 87000,
    colors: ["Blanco", "Negro"],
    sizes: [
      { label: "S", available: false },
      { label: "M", available: false },
      { label: "L", available: false },
      { label: "XL", available: false },
    ],
    shortDescription:
      "Un recordatorio de la incursión militar y paramilitar en la Comuna 13 de Medellín durante 2002.",
    meaning:
      "Más que una prenda, es un símbolo de lucha por la verdad. Honramos a las víctimas y a sus familiares, quienes durante años exigieron justicia ante el silencio y la negación estatal. Cada detalle en el diseño es un acto de resistencia contra el olvido.",
    images: [
      {
        src: operacionOrionImage,
        alt: "Camiseta de la colección Operación Orión",
      },
      {
        src: operacionOrionPerson,
        alt: "Camiseta de la colección Operación Orión con persona",
      },
      {
        src: operacionOrionMessage,
        alt: "Detalle del mensaje en la parte posterior de la camiseta de la colección Operación Orión",
      },

    ],
    status: "sold-out",
    featured: true,
  },
];
