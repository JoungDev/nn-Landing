<script setup>
import ProductGrid from '../catalog/ProductGrid.vue'
import { products } from '../../data/products'
</script>

<template>
  <section
    id="coleccion"
    class="catalog"
    aria-labelledby="catalog-title"
  >
    <div class="catalog__container">
      <header class="catalog__header">
        <div>
          <p class="catalog__eyebrow">Colección actual</p>

          <h2
            id="catalog-title"
            class="catalog__title"
          >
            Prendas que cargan memoria.
          </h2>
        </div>

        <p class="catalog__introduction">
          Cada pieza nace de una historia colombiana que merece permanecer en
          la conversación. Conoce su significado, elige tu talla y consulta su
          disponibilidad.
        </p>
      </header>

      <ProductGrid :products="products" />

      <div class="catalog__note">
        <p>
          Los pedidos se gestionan directamente por WhatsApp. La disponibilidad
          de tallas se confirma antes de finalizar la compra.
        </p>

        <span>{{ products.length }} piezas disponibles</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.catalog {
  color: #111111;
  background-color: #f7f6f2;
}

.catalog__container {
  width: min(100% - 40px, 1200px);
  margin-inline: auto;
  padding-block: 120px;
}

.catalog__header {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  align-items: end;
  margin-bottom: 60px;
  gap: 60px;
}

.catalog__eyebrow {
  margin-bottom: 20px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.catalog__title {
  max-width: 750px;
  font-size: clamp(3rem, 6vw, 6.5rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.06em;
  text-transform: uppercase;
}

.catalog__introduction {
  max-width: 500px;
  color: #505050;
  font-size: 1rem;
  line-height: 1.75;
}

.catalog__note {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 38px;
  padding-top: 24px;
  border-top: 1px solid #c9c7c1;
  gap: 30px;
}

.catalog__note p {
  max-width: 690px;
  color: #555555;
  font-size: 0.85rem;
  line-height: 1.6;
}

.catalog__note span {
  flex-shrink: 0;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

@media (max-width: 850px) {
  .catalog__container {
    padding-block: 90px;
  }

  .catalog__header {
    grid-template-columns: 1fr;
    margin-bottom: 44px;
    gap: 30px;
  }
}

@media (max-width: 560px) {
  .catalog__container {
    width: min(100% - 32px, 1200px);
    padding-block: 72px;
  }

  .catalog__note {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>