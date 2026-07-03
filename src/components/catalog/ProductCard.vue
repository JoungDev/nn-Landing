<script setup>
import { computed } from 'vue'
import { formatCurrency } from '../../utils/formatCurrency'

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
})

const emit = defineEmits(['view-product'])

function viewProduct() {
    emit('view-product', props.product)
}

const availableSizes = computed(() => {
    return props.product.sizes
        .filter((size) => size.available)
        .map((size) => size.label)
        .join(', ')
})

const statusText = computed(() => {
    const statusLabels = {
        available: 'Disponible',
        'low-stock': 'Últimas unidades',
        'sold-out': 'Agotado',
        new: 'New'
    }

    return statusLabels[props.product.status] ?? 'Consultar'
})
</script>

<template>
    <article class="product-card">
        <div class="product-card__media">
            <img class="product-card__image" :src="product.images[0].src" :alt="product.images[0].alt" />

            <span v-if="product.status === 'sold-out'" class="product-card__sold-out-ribbon">
                Sold out
            </span>

            <span v-else-if="product.status === 'new'" class="product-card__new-ribbon">
                New
            </span>

            <span v-else class="product-card__status" :class="`product-card__status--${product.status}`">
                {{ statusText }}
            </span>

            <span class="product-card__number">
                Colección {{ product.collectionNumber }}
            </span>
        </div>

        <div class="product-card__content">
            <div class="product-card__heading">
                <div>
                    <p class="product-card__type">{{ product.garmentType }}</p>
                    <h3 class="product-card__name">{{ product.name }}</h3>
                </div>

                <p class="product-card__price">
                    {{ formatCurrency(product.price) }}
                </p>
            </div>

            <p class="product-card__description">
                {{ product.shortDescription }}
            </p>

            <dl class="product-card__details">
                <div>
                    <dt>Colores</dt>
                    <dd>{{ product.colors.join(', ') }}</dd>
                </div>

                <div>
                    <dt>Tallas disponibles</dt>
                    <dd>{{ availableSizes || 'Agotadas' }}</dd>
                </div>
            </dl>

            <button class="product-card__button" type="button" @click="viewProduct">
                Ver pieza
            </button>
        </div>
    </article>
</template>

<style scoped>
.product-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: #111111;
    background-color: #ffffff;
    border: 1px solid #d9d7d1;
}

.product-card__media {
    position: relative;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    background-color: #ffffff;
}

.product-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 500ms ease;
}

.product-card:hover .product-card__image {
    transform: scale(1.035);
}

.product-card__status,
.product-card__number {
    position: absolute;
    top: 18px;
    padding: 8px 11px;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.09em;
    text-transform: uppercase;
}

.product-card__status {
    left: 18px;
    color: #111111;
    background-color: #ffffff;
}

.product-card__status--sold-out {
    color: #ffffff;
    background-color: #111111;
}

.product-card__status--low-stock {
    color: #111111;
    background-color: #e7db54;
}

.product-card__number {
    right: 18px;
    color: #ffffff;
    background-color: #111111;
}

.product-card__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 28px;
}

.product-card__heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
}

.product-card__type {
    margin-bottom: 6px;
    color: #6a6a6a;
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.13em;
    text-transform: uppercase;
}

.product-card__name {
    font-size: clamp(1.6rem, 2.5vw, 2.2rem);
    line-height: 1;
    letter-spacing: -0.04em;
    text-transform: uppercase;
}

.product-card__price {
    flex-shrink: 0;
    font-size: 0.95rem;
    font-weight: 800;
}

.product-card__description {
    margin-top: 24px;
    color: #555555;
    font-size: 0.92rem;
    line-height: 1.65;
}

.product-card__details {
    display: grid;
    margin-top: 26px;
    border-top: 1px solid #dddddd;
}

.product-card__details div {
    display: grid;
    grid-template-columns: 125px 1fr;
    padding-block: 13px;
    border-bottom: 1px solid #dddddd;
    gap: 18px;
}

.product-card__details dt {
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.product-card__details dd {
    margin: 0;
    color: #555555;
    font-size: 0.85rem;
}

.product-card__button {
    width: 100%;
    min-height: 48px;
    margin-top: auto;
    padding-inline: 20px;
    color: #ffffff;
    background-color: #111111;
    border: 1px solid #111111;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition:
        color 200ms ease,
        background-color 200ms ease;
}

.product-card__button:hover {
    color: #111111;
    background-color: transparent;
}

.product-card__sold-out-ribbon,
.product-card__new-ribbon {
    position: absolute;
    top: 34px;
    left: -48px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 190px;
    min-height: 34px;
    font-size: 0.68rem;
    font-weight: 900;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    transform: rotate(-38deg);
}

.product-card__sold-out-ribbon {
    color: #ffffff;
    background-color: #111111;
}

.product-card__new-ribbon {
    color: #111111;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
}

@media (max-width: 480px) {
    .product-card__content {
        padding: 22px;
    }

    .product-card__heading {
        flex-direction: column;
        gap: 12px;
    }

    .product-card__details div {
        grid-template-columns: 1fr;
        gap: 5px;
    }
}
</style>