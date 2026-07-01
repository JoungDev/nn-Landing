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
      <p class="size-selector__label">Selecciona tu talla</p>

      <span v-if="modelValue">
        Talla seleccionada: {{ modelValue }}
      </span>
    </div>

    <div
      class="size-selector__options"
      role="group"
      aria-label="Tallas disponibles"
    >
      <button
        v-for="size in sizes"
        :key="size.label"
        class="size-selector__option"
        :class="{
          'size-selector__option--selected': modelValue === size.label,
          'size-selector__option--unavailable': !size.available,
        }"
        type="button"
        :disabled="!size.available"
        :aria-pressed="modelValue === size.label"
        @click="selectSize(size)"
      >
        {{ size.label }}
      </button>
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
    border-color 180ms ease;
}

.size-selector__option:hover:not(:disabled) {
  border-color: #111111;
}

.size-selector__option--selected {
  color: #ffffff;
  background-color: #111111;
  border-color: #111111;
}

.size-selector__option--unavailable {
  position: relative;
  color: #9a9a9a;
  background-color: #eeeeee;
  border-color: #d0d0d0;
  cursor: not-allowed;
}

.size-selector__option--unavailable::after {
  position: absolute;
  width: 70%;
  height: 1px;
  background-color: #9a9a9a;
  content: '';
  transform: rotate(-35deg);
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
}
</style>