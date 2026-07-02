<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import logoUrl from '../../assets/images/brand/nn-logo-blanco.jpg'
import { siteConfig } from '../../data/siteConfig'

const isMenuOpen = ref(false)

const navigationItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyecto', href: '#nosotros' },
  { label: 'Colección', href: '#coleccion' },
  { label: 'Memoria', href: '#memoria' },
  { label: 'Cómo comprar', href: '#comprar' },
  { label: 'Comunidad', href: '#comunidad' },
]

const whatsappLink = `https://wa.me/${siteConfig.contact.whatsappNumber}`

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleKeydown(event) {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
  }
}

function handleResize() {
  if (window.innerWidth > 760 && isMenuOpen.value) {
    closeMenu()
  }
}

watch(isMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="site-header">
    <div class="site-header__container">
      <a
        class="site-header__brand"
        href="#inicio"
        aria-label="Ir al inicio de NN"
        @click="closeMenu"
      >
        <img
          class="site-header__logo"
          :src="logoUrl"
          alt="Logo de NN Colombia"
        />
      </a>

      <nav
        class="site-header__desktop-nav"
        aria-label="Navegación principal"
      >
        <a
          v-for="item in navigationItems"
          :key="item.href"
          :href="item.href"
        >
          {{ item.label }}
        </a>
      </nav>

      <a
        class="site-header__cta"
        :href="whatsappLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>

      <button
        class="site-header__menu-button"
        :class="{
          'site-header__menu-button--open': isMenuOpen,
        }"
        type="button"
        aria-controls="mobile-navigation"
        :aria-expanded="isMenuOpen"
        :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
      </button>
    </div>

<Teleport to="body">
  <Transition name="mobile-menu">
    <div
      v-if="isMenuOpen"
      class="site-header__mobile-layer"
      @click.self="closeMenu"
    >
      <nav
        id="mobile-navigation"
        class="site-header__mobile-nav"
        aria-label="Navegación móvil"
      >
        <p class="site-header__mobile-label">Explorar NN</p>

        <a
          v-for="(item, index) in navigationItems"
          :key="item.href"
          :href="item.href"
          @click="closeMenu"
        >
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          {{ item.label }}
        </a>

        <div class="site-header__mobile-contact">
          <p>Pedidos y disponibilidad</p>

          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeMenu"
          >
            Hablar por WhatsApp
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </div>
  </Transition>
</Teleport>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: rgba(10, 10, 10, 0.96);
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(12px);
}

.site-header__container {
  display: flex;
  align-items: center;
  width: min(100% - 40px, 1200px);
  min-height: 78px;
  margin-inline: auto;
  gap: 32px;
}

.site-header__brand {
  display: flex;
  flex-shrink: 0;
  align-items: center;
}

.site-header__logo {
  width: 92px;
  height: 52px;
  object-fit: contain;
}

.site-header__desktop-nav {
  display: flex;
  align-items: center;
  gap: 26px;
  margin-left: auto;
}

.site-header__desktop-nav a {
  position: relative;
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.site-header__desktop-nav a::after {
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

.site-header__desktop-nav a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.site-header__cta {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding-inline: 20px;
  color: #111111;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  transition:
    color 200ms ease,
    background-color 200ms ease;
}

.site-header__cta:hover {
  color: #ffffff;
  background-color: transparent;
}

.site-header__menu-button {
  display: none;
  width: 46px;
  height: 46px;
  padding: 0;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.35);
  cursor: pointer;
}

.site-header__menu-button span {
  display: block;
  width: 20px;
  height: 1px;
  margin-inline: auto;
  background-color: #ffffff;
  transition:
    transform 200ms ease,
    margin 200ms ease;
}

.site-header__menu-button span + span {
  margin-top: 7px;
}

.site-header__menu-button--open span:first-child {
  margin-top: 1px;
  transform: rotate(45deg);
}

.site-header__menu-button--open span:last-child {
  margin-top: -1px;
  transform: rotate(-45deg);
}

.site-header__mobile-layer {
  position: fixed;
  inset: 70px 0 0;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.72);
}

.site-header__mobile-nav {
  display: flex;
  width: min(100%, 470px);
  height: 100%;
  padding: 38px 24px 30px;
  overflow-y: auto;
  color: #111111;
  background-color: #f2f0eb;
  flex-direction: column;
}

.site-header__mobile-label {
  margin-bottom: 22px;
  color: #747474;
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.17em;
  text-transform: uppercase;
}

.site-header__mobile-nav > a {
  display: grid;
  grid-template-columns: 42px 1fr;
  align-items: center;
  min-height: 67px;
  border-bottom: 1px solid #c8c5be;
  font-size: clamp(1.7rem, 8vw, 2.8rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

.site-header__mobile-nav > a span {
  color: #797979;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.site-header__mobile-contact {
  margin-top: auto;
  padding-top: 38px;
}

.site-header__mobile-contact p {
  margin-bottom: 14px;
  color: #696969;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.site-header__mobile-contact a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 54px;
  padding-inline: 18px;
  color: #ffffff;
  background-color: #111111;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 200ms ease;
}

.mobile-menu-enter-active .site-header__mobile-nav,
.mobile-menu-leave-active .site-header__mobile-nav {
  transition: transform 250ms ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from .site-header__mobile-nav,
.mobile-menu-leave-to .site-header__mobile-nav {
  transform: translateX(100%);
}

@media (max-width: 1050px) {
  .site-header__desktop-nav {
    gap: 18px;
  }

  .site-header__desktop-nav a {
    font-size: 0.65rem;
  }
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

  .site-header__desktop-nav,
  .site-header__cta {
    display: none;
  }

  .site-header__menu-button {
    display: block;
    margin-left: auto;
  }
}
</style>