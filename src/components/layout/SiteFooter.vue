<script setup>
import logoUrl from '../../assets/images/brand/nn-logo-blanco.jpg'
import { siteConfig } from '../../data/siteConfig'

const currentYear = new Date().getFullYear()

const socialNetworks = [
  {
    name: 'TikTok',
    url: siteConfig.socialLinks.tiktok,
  },
  {
    name: 'Facebook',
    url: siteConfig.socialLinks.facebook,
  },
  {
    name: 'Instagram',
    url: siteConfig.socialLinks.instagram,
  },
].filter((network) => network.url)

const whatsappLink = `https://wa.me/${siteConfig.contact.whatsappNumber}`
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__container">
      <div class="site-footer__top">
        <div class="site-footer__brand">
          <a
            href="#inicio"
            aria-label="Volver al inicio de NN"
          >
            <img
              class="site-footer__logo"
              :src="logoUrl"
              alt="Logo de NN Colombia"
            />
          </a>

          <p class="site-footer__slogan">
            {{ siteConfig.slogan }}
          </p>

          <p class="site-footer__description">
            Proyecto colombiano de memoria colectiva, arte e identidad.
          </p>
        </div>

        <nav
          class="site-footer__navigation"
          aria-label="Navegación del pie de página"
        >
          <p class="site-footer__heading">Explorar</p>

          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Proyecto</a>
          <a href="#coleccion">Colección</a>
          <a href="#memoria">Memoria</a>
          <a href="#comprar">Cómo comprar</a>
        </nav>

        <div class="site-footer__contact">
          <p class="site-footer__heading">Contacto</p>

          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <span>{{ siteConfig.contact.whatsappDisplay }}</span>

          <p class="site-footer__shipping">
            {{ siteConfig.shipping.coverage }}
          </p>
        </div>

        <div class="site-footer__social">
          <p class="site-footer__heading">Comunidad</p>

          <a
            v-for="network in socialNetworks"
            :key="network.name"
            :href="network.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ network.name }}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div class="site-footer__statement">
        <p>Memoria</p>
        <p>Arte</p>
        <p>Colombia</p>
      </div>

      <div class="site-footer__bottom">
        <p>
          © {{ currentYear }} {{ siteConfig.brandName }}. Todos los derechos
          reservados.
        </p>

        <p>Diseñado con memoria en Colombia.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  overflow: hidden;
  color: #ffffff;
  background-color: #050505;
  border-top: 1px solid #292929;
}

.site-footer__container {
  width: min(100% - 40px, 1200px);
  margin-inline: auto;
  padding-top: 90px;
}

.site-footer__top {
  display: grid;
  grid-template-columns: minmax(240px, 1.4fr) repeat(3, minmax(130px, 0.6fr));
  padding-bottom: 70px;
  gap: 55px;
}

.site-footer__logo {
  width: 120px;
  height: 66px;
  object-fit: contain;
}

.site-footer__slogan {
  max-width: 350px;
  margin-top: 30px;
  font-size: clamp(1.6rem, 3vw, 2.7rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

.site-footer__description {
  max-width: 350px;
  margin-top: 20px;
  color: #999999;
  font-size: 0.86rem;
  line-height: 1.65;
}

.site-footer__heading {
  margin-bottom: 24px;
  color: #777777;
  font-size: 0.67rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.site-footer__navigation,
.site-footer__contact,
.site-footer__social {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.site-footer__navigation a,
.site-footer__contact a,
.site-footer__social a {
  margin-bottom: 13px;
  font-size: 0.86rem;
  font-weight: 700;
  transition: color 180ms ease;
}

.site-footer__navigation a:hover,
.site-footer__contact a:hover,
.site-footer__social a:hover {
  color: #8d8d8d;
}

.site-footer__contact span {
  color: #8d8d8d;
  font-size: 0.78rem;
}

.site-footer__shipping {
  max-width: 180px;
  margin-top: 22px;
  color: #8d8d8d;
  font-size: 0.78rem;
  line-height: 1.5;
}

.site-footer__social a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.site-footer__social span {
  transition: transform 180ms ease;
}

.site-footer__social a:hover span {
  transform: translate(3px, -3px);
}

.site-footer__statement {
  display: flex;
  justify-content: space-between;
  padding-block: 36px;
  overflow: hidden;
  border-top: 1px solid #292929;
  border-bottom: 1px solid #292929;
  gap: 25px;
}

.site-footer__statement p {
  font-size: clamp(2.3rem, 4vw, 7rem);
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -0.07em;
  text-transform: uppercase;
}

.site-footer__statement p:nth-child(2) {
  color: transparent;
  -webkit-text-stroke: 1px #ffffff;
}

.site-footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 28px;
  color: #737373;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  gap: 30px;
}

@media (max-width: 900px) {
  .site-footer__top {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .site-footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 600px) {
  .site-footer__container {
    width: min(100% - 32px, 1200px);
    padding-top: 70px;
  }

  .site-footer__top {
    grid-template-columns: 1fr;
    padding-bottom: 50px;
    gap: 42px;
  }

  .site-footer__brand {
    grid-column: auto;
  }

  .site-footer__statement {
    align-items: flex-start;
    flex-direction: column;
  }

  .site-footer__statement p {
    font-size: clamp(3rem, 16vw, 5.5rem);
  }

  .site-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
    line-height: 1.5;
  }
}
</style>