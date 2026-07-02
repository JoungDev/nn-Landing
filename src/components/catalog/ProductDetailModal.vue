<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import SizeSelector from './SizeSelector.vue'
import { formatCurrency } from '../../utils/formatCurrency'
import { createWhatsAppLink } from '../../utils/createWhatsAppLink'
import { siteConfig } from '../../data/siteConfig'

const props = defineProps({
  product: {
    type: Object,
    default: null,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])

const selectedSize = ref('')
const activeImageIndex = ref(0)

const activeImage = computed(() => {
  return props.product?.images[activeImageIndex.value] ?? null
})

const whatsappLink = computed(() => {
  return createWhatsAppLink({
    phoneNumber: siteConfig.contact.whatsappNumber,
    product: props.product,
    selectedSize: selectedSize.value,
  })
})

function closeModal() {
  emit('close')
}

function selectImage(index) {
  activeImageIndex.value = index
}

function handleKeydown(event) {
  if (event.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

watch(
  () => props.product,
  () => {
    selectedSize.value = ''
    activeImageIndex.value = 0
  },
)

watch(
  () => props.isOpen,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen && product"
      class="product-modal"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`product-modal-title-${product.id}`"
      @click.self="closeModal"
    >
      <div class="product-modal__panel">
        <button
          class="product-modal__close"
          type="button"
          aria-label="Cerrar detalle del producto"
          @click="closeModal"
        >
          ×
        </button>

        <div class="product-modal__gallery">
          <div class="product-modal__main-image">
            <img
              v-if="activeImage"
              :src="activeImage.src"
              :alt="activeImage.alt"
            />
          </div>

          <div
            v-if="product.images.length > 1"
            class="product-modal__thumbnails"
          >
            <button
              v-for="(image, index) in product.images"
              :key="image.src"
              class="product-modal__thumbnail"
              :class="{
                'product-modal__thumbnail--active':
                  activeImageIndex === index,
              }"
              type="button"
              @click="selectImage(index)"
            >
              <img
                :src="image.src"
                :alt="image.alt"
              />
            </button>
          </div>
        </div>

        <div class="product-modal__content">
          <p class="product-modal__collection">
            Colección {{ product.collectionNumber }}
          </p>

          <p class="product-modal__type">
            {{ product.garmentType }}
          </p>

          <h2
            :id="`product-modal-title-${product.id}`"
            class="product-modal__title"
          >
            {{ product.name }}
          </h2>

          <p class="product-modal__price">
            {{ formatCurrency(product.price) }}
          </p>

          <p class="product-modal__description">
            {{ product.shortDescription }}
          </p>

          <div class="product-modal__meaning">
            <p class="product-modal__label">Significado de la pieza</p>

            <p>
              {{ product.meaning }}
            </p>
          </div>

          <dl class="product-modal__details">
            <div>
              <dt>Colores</dt>
              <dd>{{ product.colors.join(', ') }}</dd>
            </div>

            <div>
              <dt>Envío</dt>
              <dd>{{ siteConfig.shipping.coverage }}</dd>
            </div>
          </dl>

          <SizeSelector
            v-model="selectedSize"
            :sizes="product.sizes"
          />

          <a
            class="product-modal__whatsapp"
            :class="{
              'product-modal__whatsapp--disabled': !whatsappLink,
            }"
            :href="whatsappLink || undefined"
            target="_blank"
            rel="noopener noreferrer"
            :aria-disabled="!whatsappLink"
            @click="!whatsappLink && $event.preventDefault()"
          >
            Pedir por WhatsApp
          </a>

          <p class="product-modal__shipping-note">
            El costo del envío corre por cuenta del cliente. La disponibilidad
            se confirma antes de finalizar la compra.
          </p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.product-modal {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: grid;
  place-items: center;
  padding: 24px;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(8px);
}

.product-modal__panel {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.85fr);
  width: min(100%, 1120px);
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  color: #111111;
  background-color: #f5f3ee;
}

.product-modal__close {
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 4;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  color: #ffffff;
  background-color: #111111;
  border: 1px solid #111111;
  cursor: pointer;
  font-size: 1.7rem;
  line-height: 1;
}

.product-modal__gallery {
  padding: 24px;
  background-color: #dedbd3;
}

.product-modal__main-image {
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background-color: #cac7c0;
}

.product-modal__main-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.product-modal__thumbnails {
  display: flex;
  gap: 12px;
  margin-top: 14px;
}

.product-modal__thumbnail {
  width: 78px;
  aspect-ratio: 1;
  padding: 0;
  overflow: hidden;
  background-color: transparent;
  border: 2px solid transparent;
  cursor: pointer;
}

.product-modal__thumbnail--active {
  border-color: #111111;
}

.product-modal__thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-modal__content {
  display: flex;
  flex-direction: column;
  padding: 64px 48px 42px;
}

.product-modal__collection,
.product-modal__type,
.product-modal__label {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.product-modal__collection {
  color: #696969;
}

.product-modal__type {
  margin-top: 30px;
}

.product-modal__title {
  margin-top: 8px;
  font-size: clamp(2.6rem, 5vw, 5rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.055em;
  text-transform: uppercase;
}

.product-modal__price {
  margin-top: 22px;
  font-size: 1.15rem;
  font-weight: 800;
}

.product-modal__description {
  margin-top: 26px;
  color: #444444;
  line-height: 1.7;
}

.product-modal__meaning {
  margin-top: 32px;
  padding-block: 24px;
  border-top: 1px solid #c5c2bb;
  border-bottom: 1px solid #c5c2bb;
}

.product-modal__meaning > p:last-child {
  margin-top: 14px;
  color: #4b4b4b;
  font-size: 0.92rem;
  line-height: 1.75;
}

.product-modal__details {
  display: grid;
  margin: 28px 0;
}

.product-modal__details div {
  display: grid;
  grid-template-columns: 100px 1fr;
  padding-block: 11px;
  border-bottom: 1px solid #d2cfc8;
  gap: 18px;
}

.product-modal__details dt {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.product-modal__details dd {
  margin: 0;
  color: #555555;
  font-size: 0.85rem;
}

.product-modal__whatsapp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  margin-top: 30px;
  color: #ffffff;
  background-color: #111111;
  border: 1px solid #111111;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition:
    color 180ms ease,
    background-color 180ms ease;
}

.product-modal__whatsapp:hover {
  color: #111111;
  background-color: transparent;
}

.product-modal__whatsapp--disabled {
  color: #888888;
  background-color: #d2d0ca;
  border-color: #d2d0ca;
  cursor: not-allowed;
  pointer-events: none;
}

.product-modal__shipping-note {
  margin-top: 14px;
  color: #666666;
  font-size: 0.74rem;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .product-modal {
    display: block;
    padding: 0;
    overflow: hidden;
    background-color: #f5f3ee;
    backdrop-filter: none;
  }

  .product-modal__panel {
    display: block;
    width: 100%;
    height: 100dvh;
    max-height: 100dvh;
    overflow-x: hidden;
    overflow-y: auto;
    overscroll-behavior: contain;
  }

  .product-modal__close {
    position: fixed;
    top: 14px;
    right: 14px;
    z-index: 2002;
    width: 46px;
    height: 46px;
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.24);
  }

  .product-modal__gallery {
    padding: 0 0 16px;
    background-color: #dedbd3;
  }

  .product-modal__main-image {
    width: 100%;
    height: min(62dvh, 570px);
    aspect-ratio: auto;
    background-color: #dedbd3;
  }

  .product-modal__main-image img {
    padding: 18px;
    object-fit: contain;
  }

  .product-modal__thumbnails {
    padding-inline: 16px;
    overflow-x: auto;
    scrollbar-width: thin;
  }

  .product-modal__thumbnail {
    flex: 0 0 72px;
    width: 72px;
  }

  .product-modal__content {
    padding: 38px 20px 44px;
  }

  .product-modal__title {
    max-width: 90%;
    font-size: clamp(2.5rem, 12vw, 4.5rem);
  }

  .product-modal__description {
    font-size: 0.94rem;
  }

  .product-modal__meaning {
    margin-top: 26px;
  }

  .product-modal__details {
    margin-block: 24px;
  }

  .product-modal__whatsapp {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .product-modal__main-image {
    height: 54dvh;
    min-height: 390px;
  }

  .product-modal__main-image img {
    padding: 14px;
  }

  .product-modal__content {
    padding: 34px 18px 40px;
  }

  .product-modal__collection {
    padding-right: 60px;
  }

  .product-modal__type {
    margin-top: 22px;
  }

  .product-modal__title {
    font-size: clamp(2.3rem, 13vw, 3.7rem);
    line-height: 0.92;
  }

  .product-modal__price {
    margin-top: 18px;
  }

  .product-modal__details div {
    grid-template-columns: 1fr;
    gap: 5px;
  }

  .product-modal__shipping-note {
    text-align: center;
  }
}
</style>