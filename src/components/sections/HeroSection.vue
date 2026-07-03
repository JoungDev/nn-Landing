<template>
  <section
    id="inicio"
    class="hero"
    aria-labelledby="hero-title"
  >
    <div class="hero__container">
      <div class="hero__content">
        <p class="hero__eyebrow">Proyecto colombiano · Memoria colectiva</p>

        <h1
          id="hero-title"
          class="hero__title"
        >
          La memoria
          <span>no se viste</span>
          de olvido.
        </h1>

        <p class="hero__description">
          NN transforma capítulos de la historia Colombiana en prendas
          creadas para recordar, cuestionar y resistir.
        </p>

        <div class="hero__actions">
          <a
            class="hero__button hero__button--primary"
            href="#coleccion"
          >
            Ver colección
          </a>

          <a
            class="hero__button hero__button--secondary"
            href="#nosotros"
          >
            Conocer el proyecto
          </a>
        </div>
      </div>

      <div
        class="hero__visual"
        aria-hidden="true"
      >
        <span class="hero__collection-number">001</span>

        <div class="hero__visual-content">
          <p>Memoria</p>
          <p>Colectiva</p>
          <span>Colombia</span>
        </div>

        <span class="hero__vertical-text">NN · COLOMBIA</span>
      </div>
    </div>

    <div class="hero__ticker">
      <span>No somos tendencia, Somos conciencia</span>
      <span aria-hidden="true">✦</span>
      <span>HIstoria que se lleva puesta</span>
      <span aria-hidden="true">✦</span>
      <span>si ellos lo ocultan, nosotros lo contamos</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - 78px);
  overflow: hidden;
  color: #ffffff;
  background-color: #090909;
}

.hero__container {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
  width: min(100% - 40px, 1200px);
  min-height: calc(100vh - 134px);
  margin-inline: auto;
}

.hero__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 70px 80px 0;
}

.hero__eyebrow {
  margin-bottom: 24px;
  color: #a8a8a8;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero__title {
  max-width: 780px;
  font-size: clamp(3.7rem, 7.5vw, 7.6rem);
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -0.065em;
  text-transform: uppercase;
}

.hero__title span {
  display: block;
  color: transparent;
  -webkit-text-stroke: 1px #ffffff;
}

.hero__description {
  max-width: 570px;
  margin-top: 34px;
  color: #c7c7c7;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.7;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 38px;
}

.hero__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding-inline: 24px;
  border: 1px solid #ffffff;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition:
    color 200ms ease,
    background-color 200ms ease;
}

.hero__button--primary {
  color: #111111;
  background-color: #ffffff;
}

.hero__button--primary:hover {
  color: #ffffff;
  background-color: transparent;
}

.hero__button--secondary {
  color: #ffffff;
  background-color: transparent;
}

.hero__button--secondary:hover {
  color: #111111;
  background-color: #ffffff;
}

.hero__visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 520px;
  overflow: hidden;
  color: #090909;
  background-color: #f2f0eb;
}

.hero__visual::before,
.hero__visual::after {
  position: absolute;
  border: 1px solid rgba(9, 9, 9, 0.2);
  border-radius: 50%;
  content: '';
}

.hero__visual::before {
  width: 410px;
  height: 410px;
}

.hero__visual::after {
  width: 290px;
  height: 290px;
}

.hero__collection-number {
  position: absolute;
  top: 28px;
  left: 28px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.hero__visual-content {
  position: relative;
  z-index: 2;
  text-align: center;
  text-transform: uppercase;
}

.hero__visual-content p {
  font-size: clamp(2.6rem, 5vw, 5.3rem);
  font-weight: 900;
  line-height: 0.82;
  letter-spacing: -0.07em;
}

.hero__visual-content p:nth-child(2) {
  color: transparent;
  -webkit-text-stroke: 1px #090909;
}

.hero__visual-content span {
  display: inline-block;
  margin-top: 24px;
  padding: 7px 12px;
  color: #ffffff;
  background-color: #090909;
  font-size: 0.67rem;
  font-weight: 800;
  letter-spacing: 0.2em;
}

.hero__vertical-text {
  position: absolute;
  right: 17px;
  bottom: 30px;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  writing-mode: vertical-rl;
}

.hero__ticker {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;

  width: 100%;
  min-height: 56px;
  padding: 0 24px;
  box-sizing: border-box;

  color: #111111;
  background-color: #ffffff;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-align: center;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .hero__container {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .hero__content {
    min-height: 650px;
    padding: 80px 24px;
  }

  .hero__visual {
    min-height: 480px;
  }

  .hero__ticker {
    gap: 18px;
    padding: 14px 20px;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
  }
}

@media (max-width: 560px) {
  .hero {
    min-height: auto;
  }

  .hero__content {
    min-height: 590px;
    padding: 64px 20px;
  }

  .hero__title {
    font-size: clamp(3.2rem, 18vw, 5rem);
  }

  .hero__description {
    margin-top: 28px;
  }

  .hero__actions {
    flex-direction: column;
  }

  .hero__button {
    width: 100%;
  }

  .hero__visual {
    min-height: 390px;
  }

  .hero__visual::before {
    width: 310px;
    height: 310px;
  }

  .hero__visual::after {
    width: 220px;
    height: 220px;
  }

  .hero__ticker {
    flex-wrap: wrap;
    justify-content: center;

    width: 100%;
    min-height: auto;
    padding: 16px 12px;

    gap: 10px 14px;

    font-size: 0.6rem;
    letter-spacing: 0.07em;
    line-height: 1.5;
    text-align: center;
  }
}
</style>