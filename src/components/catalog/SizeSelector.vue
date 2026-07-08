<script setup>
defineProps({
  sizes: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

function selectSize(size) {
  if (!size.available) {
    return
  }

  emit('update:modelValue', size.label)
}
</script>

<template>
  <div class="size-selector">
    <div class="size-selector__heading">
      <p class="size-selector__label">
        Selecciona tu talla
      </p>

      <span v-if="modelValue">
        Talla seleccionada: {{ modelValue }}
      </span>
    </div>

    <div
      class="size-selector__options"
      role="group"
      aria-label="Tallas disponibles"
    >
      <div
        v-for="size in sizes"
        :key="size.label"
        class="size-selector__option-wrapper"
        :class="{
          'size-selector__option-wrapper--unavailable': !size.available,
        }"
        :tabindex="!size.available ? 0 : -1"
        :aria-label="
          !size.available
            ? `Talla ${size.label} agotada`
            : undefined
        "
      >
        <button
          class="size-selector__option"
          :class="{
            'size-selector__option--selected':
              modelValue === size.label,
            'size-selector__option--unavailable':
              !size.available,
          }"
          type="button"
          :disabled="!size.available"
          :aria-pressed="modelValue === size.label"
          :aria-label="
            size.available
              ? `Seleccionar talla ${size.label}`
              : `Talla ${size.label} agotada`
          "
          @click="selectSize(size)"
        >
          {{ size.label }}
        </button>

        <span
          v-if="!size.available"
          class="size-selector__tooltip"
          role="tooltip"
        >
          Sold out
        </span>
      </div>
    </div>

    <p
      v-if="!modelValue"
      class="size-selector__help"
    >
      Debes seleccionar una talla para continuar con el pedido.
    </p>
  </div>
</template>

<style scoped>
.size-selector__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.size-selector__label {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.size-selector__heading span {
  color: #5b5b5b;
  font-size: 0.75rem;
}

.size-selector__options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}

.size-selector__option-wrapper {
  position: relative;
  display: inline-flex;
}

.size-selector__option-wrapper:focus {
  outline: none;
}

.size-selector__option {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 52px;
  min-height: 46px;
  padding-inline: 14px;
  color: #111111;
  background-color: transparent;
  border: 1px solid #a9a9a9;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 800;
  transition:
    color 180ms ease,
    background-color 180ms ease,
    border-color 180ms ease,
    opacity 180ms ease;
}

.size-selector__option:hover:not(:disabled) {
  border-color: #111111;
}

.size-selector__option:focus-visible {
  outline: 2px solid #111111;
  outline-offset: 3px;
}

.size-selector__option--selected {
  color: #ffffff;
  background-color: #111111;
  border-color: #111111;
}

.size-selector__option--unavailable {
  color: #999999;
  background-color: #eeeeee;
  border-color: #d0d0d0;
  cursor: not-allowed;
  opacity: 0.72;
}

.size-selector__tooltip {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  z-index: 10;
  padding: 7px 10px;
  color: #ffffff;
  background-color: #111111;
  font-size: 0.55rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translate(-50%, 6px);
  transition:
    opacity 160ms ease,
    visibility 160ms ease,
    transform 160ms ease;
}

.size-selector__tooltip::after {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 0;
  height: 0;
  border-top: 6px solid #111111;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: '';
  transform: translateX(-50%);
}

.size-selector__option-wrapper--unavailable:hover
  .size-selector__tooltip,
.size-selector__option-wrapper--unavailable:focus
  .size-selector__tooltip,
.size-selector__option-wrapper--unavailable:focus-within
  .size-selector__tooltip {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
}

.size-selector__option-wrapper--unavailable:focus-visible {
  border-radius: 2px;
  outline: 2px solid #111111;
  outline-offset: 3px;
}

.size-selector__help {
  margin-top: 12px;
  color: #6a6a6a;
  font-size: 0.76rem;
  line-height: 1.5;
}

@media (max-width: 480px) {
  .size-selector__heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
  }

  .size-selector__option {
    min-width: 48px;
  }

  .size-selector__tooltip {
    font-size: 0.52rem;
  }
}
</style>