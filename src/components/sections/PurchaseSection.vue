git commit -m "feat: add collective memory section"<script setup>
import { siteConfig } from '../../data/siteConfig'

const whatsappLink = `https://wa.me/${siteConfig.contact.whatsappNumber}`
</script>

<template>
  <section
    id="comprar"
    class="purchase"
    aria-labelledby="purchase-title"
  >
    <div class="purchase__container">
      <header class="purchase__header">
        <p class="purchase__eyebrow">Cómo comprar</p>

        <h2
          id="purchase-title"
          class="purchase__title"
        >
          Elige una pieza. Nosotros confirmamos el resto.
        </h2>

        <p class="purchase__introduction">
          Los pedidos se realizan directamente por WhatsApp. Antes de finalizar
          la compra confirmamos la talla, disponibilidad y valor del envío.
        </p>
      </header>

      <ol class="purchase__steps">
        <li class="purchase__step">
          <span class="purchase__number">01</span>

          <div>
            <h3>Conoce la colección</h3>

            <p>
              Explora las prendas, su significado, colores y tallas
              disponibles.
            </p>
          </div>
        </li>

        <li class="purchase__step">
          <span class="purchase__number">02</span>

          <div>
            <h3>Selecciona tu talla</h3>

            <p>
              Abre el detalle de la prenda y elige la talla que deseas
              consultar.
            </p>
          </div>
        </li>

        <li class="purchase__step">
          <span class="purchase__number">03</span>

          <div>
            <h3>Escríbenos por WhatsApp</h3>

            <p>
              El mensaje se genera automáticamente con los datos de la pieza
              seleccionada.
            </p>
          </div>
        </li>

        <li class="purchase__step">
          <span class="purchase__number">04</span>

          <div>
            <h3>Confirma tu pedido</h3>

            <p>
              Verificamos disponibilidad, forma de pago, dirección y costo del
              envío.
            </p>
          </div>
        </li>
      </ol>

      <div class="purchase__shipping">
        <div>
          <p class="purchase__shipping-label">Cobertura</p>

          <h3>{{ siteConfig.shipping.coverage }}</h3>

          <p>{{ siteConfig.shipping.message }}</p>
        </div>

        <a
          class="purchase__button"
          :href="whatsappLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablar con NN
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.purchase {
  color: #111111;
  background-color: #f2f0eb;
}

.purchase__container {
  width: min(100% - 40px, 1200px);
  margin-inline: auto;
  padding-block: 120px;
}

.purchase__header {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  align-items: end;
  padding-bottom: 64px;
  border-bottom: 1px solid #c9c6bf;
  gap: 60px;
}

.purchase__eyebrow {
  grid-column: 1 / -1;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.purchase__title {
  max-width: 780px;
  font-size: clamp(3rem, 6vw, 6.3rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.06em;
  text-transform: uppercase;
}

.purchase__introduction {
  max-width: 500px;
  color: #505050;
  line-height: 1.75;
}

.purchase__steps {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0;
  padding: 0;
  list-style: none;
}

.purchase__step {
  display: grid;
  grid-template-columns: 54px 1fr;
  min-height: 230px;
  padding: 42px;
  border-right: 1px solid #c9c6bf;
  border-bottom: 1px solid #c9c6bf;
  gap: 26px;
}

.purchase__step:nth-child(2n) {
  border-right: 0;
}

.purchase__number {
  color: #777777;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.purchase__step h3 {
  max-width: 390px;
  font-size: clamp(1.7rem, 3vw, 2.8rem);
  line-height: 1;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

.purchase__step p {
  max-width: 430px;
  margin-top: 20px;
  color: #555555;
  font-size: 0.92rem;
  line-height: 1.7;
}

.purchase__shipping {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
  padding: 54px;
  color: #ffffff;
  background-color: #0a0a0a;
  gap: 40px;
}

.purchase__shipping-label {
  margin-bottom: 12px;
  color: #929292;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.purchase__shipping h3 {
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 0.95;
  letter-spacing: -0.045em;
  text-transform: uppercase;
}

.purchase__shipping div > p:last-child {
  max-width: 620px;
  margin-top: 18px;
  color: #b8b8b8;
  line-height: 1.65;
}

.purchase__button {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding-inline: 26px;
  color: #111111;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition:
    color 180ms ease,
    background-color 180ms ease;
}

.purchase__button:hover {
  color: #ffffff;
  background-color: transparent;
}

@media (max-width: 850px) {
  .purchase__header {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .purchase__eyebrow {
    grid-column: auto;
  }

  .purchase__steps {
    grid-template-columns: 1fr;
  }

  .purchase__step {
    border-right: 0;
  }

  .purchase__shipping {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 560px) {
  .purchase__container {
    width: min(100% - 32px, 1200px);
    padding-block: 72px;
  }

  .purchase__header {
    padding-bottom: 46px;
  }

  .purchase__step {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 34px 4px;
    gap: 14px;
  }

  .purchase__shipping {
    margin-top: 54px;
    padding: 40px 24px;
  }

  .purchase__button {
    width: 100%;
  }
}
</style>