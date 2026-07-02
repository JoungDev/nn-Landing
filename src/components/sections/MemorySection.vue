<script setup>
import { products } from '../../data/products'
</script>

<template>
  <section
    id="memoria"
    class="memory"
    aria-labelledby="memory-title"
  >
    <div class="memory__container">
      <header class="memory__header">
        <p class="memory__eyebrow">Memoria colectiva</p>

        <h2
          id="memory-title"
          class="memory__title"
        >
          Recordar también es una forma de resistir.
        </h2>

        <p class="memory__introduction">
          Cada colección parte de un acontecimiento que dejó una marca en
          Colombia. Las prendas no buscan convertir el dolor en espectáculo,
          sino mantener abiertas las conversaciones que el olvido intenta
          cerrar.
        </p>
      </header>

      <div class="memory__chapters">
        <article
          v-for="product in products"
          :key="product.id"
          class="memory__chapter"
        >
          <div class="memory__chapter-heading">
            <span class="memory__number">
              {{ product.collectionNumber }}
            </span>

            <div>
              <p class="memory__garment">
                {{ product.garmentType }}
              </p>

              <h3 class="memory__name">
                {{ product.name }}
              </h3>
            </div>
          </div>

          <p class="memory__meaning">
            {{ product.meaning }}
          </p>

          <a
            class="memory__link"
            href="#coleccion"
          >
            Conocer la pieza
            <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>

      <blockquote class="memory__statement">
        <span class="memory__quote-mark" aria-hidden="true">“</span>

        <p>
          La memoria no se viste de olvido.
        </p>

        <footer>NN · Colombia</footer>
      </blockquote>
    </div>
  </section>
</template>

<style scoped>
.memory {
  overflow: hidden;
  color: #ffffff;
  background-color: #090909;
}

.memory__container {
  width: min(100% - 40px, 1200px);
  margin-inline: auto;
  padding-block: 120px;
}

.memory__header {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  align-items: end;
  padding-bottom: 70px;
  border-bottom: 1px solid #343434;
  gap: 60px;
}

.memory__eyebrow {
  grid-column: 1 / -1;
  color: #929292;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.memory__title {
  max-width: 760px;
  font-size: clamp(3rem, 6vw, 6.4rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.06em;
  text-transform: uppercase;
}

.memory__introduction {
  max-width: 510px;
  color: #b5b5b5;
  line-height: 1.75;
}

.memory__chapters {
  display: grid;
}

.memory__chapter {
  display: grid;
  grid-template-columns: minmax(280px, 0.8fr) minmax(0, 1.2fr) auto;
  align-items: start;
  padding-block: 52px;
  border-bottom: 1px solid #343434;
  gap: 50px;
}

.memory__chapter-heading {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.memory__number {
  color: #707070;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.memory__garment {
  margin-bottom: 8px;
  color: #8e8e8e;
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.memory__name {
  max-width: 320px;
  font-size: clamp(1.8rem, 3vw, 3.3rem);
  line-height: 0.95;
  letter-spacing: -0.045em;
  text-transform: uppercase;
}

.memory__meaning {
  max-width: 640px;
  color: #bdbdbd;
  font-size: 0.95rem;
  line-height: 1.75;
}

.memory__link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid #ffffff;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.memory__link span {
  transition: transform 180ms ease;
}

.memory__link:hover span {
  transform: translate(3px, -3px);
}

.memory__statement {
  position: relative;
  margin: 110px 0 0;
  padding: 70px 60px;
  overflow: hidden;
  color: #111111;
  background-color: #f2f0eb;
}

.memory__quote-mark {
  position: absolute;
  top: -45px;
  right: 30px;
  color: rgba(17, 17, 17, 0.08);
  font-size: 18rem;
  font-weight: 900;
  line-height: 1;
}

.memory__statement p {
  position: relative;
  z-index: 1;
  max-width: 920px;
  font-size: clamp(2.8rem, 6vw, 6.8rem);
  font-weight: 900;
  line-height: 0.88;
  letter-spacing: -0.065em;
  text-transform: uppercase;
}

.memory__statement footer {
  position: relative;
  z-index: 1;
  margin-top: 42px;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .memory__header {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .memory__eyebrow {
    grid-column: auto;
  }

  .memory__chapter {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .memory__link {
    justify-self: start;
  }
}

@media (max-width: 560px) {
  .memory__container {
    width: min(100% - 32px, 1200px);
    padding-block: 72px;
  }

  .memory__header {
    padding-bottom: 48px;
  }

  .memory__chapter {
    padding-block: 40px;
  }

  .memory__statement {
    margin-top: 72px;
    padding: 52px 24px;
  }

  .memory__quote-mark {
    right: -10px;
    font-size: 12rem;
  }
}
</style>