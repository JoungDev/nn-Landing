<script setup>
import logoUrl from '../../assets/images/brand/nn-logo-blanco.JPG'
</script>

<template>
  <header class="site-header">
    <div class="site-header__container">
      <a
        class="site-header__brand"
        href="#inicio"
        aria-label="Ir al inicio de NN"
      >
        <img
          class="site-header__logo"
          :src="logoUrl"
          alt="Logo de NN Colombia"
        />
      </a>

      <nav
        class="site-header__nav"
        aria-label="Navegación principal"
      >
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Proyecto</a>
        <a href="#coleccion">Colección</a>
        <a href="#memoria">Memoria</a>
      </nav>

      <a
        class="site-header__cta"
        href="https://wa.me/573102910668"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: rgba(10, 10, 10, 0.96);
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(12px);
}

.site-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100% - 40px, 1200px);
  min-height: 78px;
  margin-inline: auto;
  gap: 32px;
}

.site-header__brand {
  display: flex;
  align-items: center;
}

.site-header__logo {
  width: 92px;
  height: 102px;
  object-fit: contain;
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-left: auto;
}

.site-header__nav a {
  position: relative;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.site-header__nav a::after {
  position: absolute;
  right: 0;
  bottom: -7px;
  left: 0;
  height: 1px;
  background-color: #ffffff;
  content: '';
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 200ms ease;
}

.site-header__nav a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.site-header__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 20px;
  color: #111111;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition:
    color 200ms ease,
    background-color 200ms ease;
}

.site-header__cta:hover {
  color: #ffffff;
  background-color: transparent;
}

@media (max-width: 760px) {
  .site-header__container {
    width: min(100% - 28px, 1200px);
    min-height: 70px;
  }

  .site-header__logo {
    width: 78px;
    height: 44px;
  }

  .site-header__nav {
    display: none;
  }

  .site-header__cta {
    min-height: 40px;
    padding-inline: 14px;
    font-size: 0.75rem;
  }
}
</style>