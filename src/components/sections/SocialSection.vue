<script setup>
import { computed } from 'vue'
import { siteConfig } from '../../data/siteConfig'

const socialNetworks = computed(() => {
  return [
    {
      name: 'TikTok',
      username: '@nn.colombia8',
      url: siteConfig.socialLinks.tiktok,
    },
    {
      name: 'Facebook',
      username: 'NN Colombia',
      url: siteConfig.socialLinks.facebook,
    },
    {
      name: 'Instagram',
      username: '@nn.colombia',
      url: siteConfig.socialLinks.instagram,
    },
  ].filter((network) => network.url)
})
</script>

<template>
  <section
    id="comunidad"
    class="social"
    aria-labelledby="social-title"
  >
    <div class="social__container">
      <header class="social__header">
        <p class="social__eyebrow">Comunidad NN</p>

        <h2
          id="social-title"
          class="social__title"
        >
          La memoria también se comparte.
        </h2>

        <p class="social__introduction">
          Sigue el proyecto, conoce el proceso detrás de cada colección y
          acompáñanos a mantener vivas las historias que Colombia no debe
          olvidar.
        </p>
      </header>

      <div class="social__networks">
        <a
          v-for="network in socialNetworks"
          :key="network.name"
          class="social__card"
          :href="network.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Visitar ${network.name} de NN`"
        >
          <div>
            <p class="social__network-name">
              {{ network.name }}
            </p>

            <p class="social__username">
              {{ network.username }}
            </p>
          </div>

          <span
            class="social__arrow"
            aria-hidden="true"
          >
            ↗
          </span>
        </a>
      </div>

    
    </div>
  </section>
</template>

<style scoped>
.social {
  color: #ffffff;
  background-color: #0a0a0a;
}

.social__container {
  width: min(100% - 40px, 1200px);
  margin-inline: auto;
  padding-block: 120px;
}

.social__header {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  align-items: end;
  padding-bottom: 64px;
  border-bottom: 1px solid #343434;
  gap: 60px;
}

.social__eyebrow {
  grid-column: 1 / -1;
  color: #929292;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.social__title {
  max-width: 760px;
  font-size: clamp(3rem, 6vw, 6.3rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.06em;
  text-transform: uppercase;
}

.social__introduction {
  max-width: 500px;
  color: #b7b7b7;
  line-height: 1.75;
}

.social__networks {
  display: grid;
}

.social__card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 145px;
  padding: 30px 4px;
  border-bottom: 1px solid #343434;
  gap: 30px;
  transition:
    padding 200ms ease,
    background-color 200ms ease;
}

.social__card:hover {
  padding-inline: 24px;
  color: #111111;
  background-color: #f2f0eb;
}

.social__network-name {
  color: #8f8f8f;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.social__card:hover .social__network-name {
  color: #555555;
}

.social__username {
  margin-top: 10px;
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.045em;
  text-transform: uppercase;
}

.social__arrow {
  flex-shrink: 0;
  font-size: 2.5rem;
  transition: transform 200ms ease;
}

.social__card:hover .social__arrow {
  transform: translate(5px, -5px);
}

.social__message {
  display: grid;
  grid-template-columns: 180px 1fr;
  margin-top: 90px;
  padding: 52px;
  color: #111111;
  background-color: #f2f0eb;
  gap: 50px;
}

.social__message span {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.17em;
  text-transform: uppercase;
}

.social__message p {
  max-width: 850px;
  font-size: clamp(1.9rem, 4vw, 4.2rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.045em;
  text-transform: uppercase;
}

@media (max-width: 850px) {
  .social__header {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .social__eyebrow {
    grid-column: auto;
  }

  .social__message {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 560px) {
  .social__container {
    width: min(100% - 32px, 1200px);
    padding-block: 72px;
  }

  .social__header {
    padding-bottom: 46px;
  }

  .social__card {
    min-height: 120px;
  }

  .social__card:hover {
    padding-inline: 14px;
  }

  .social__arrow {
    font-size: 2rem;
  }

  .social__message {
    margin-top: 64px;
    padding: 38px 24px;
  }
}
</style>