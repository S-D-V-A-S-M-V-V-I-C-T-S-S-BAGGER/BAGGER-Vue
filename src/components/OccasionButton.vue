<script setup lang="ts">

  const emit = defineEmits(['click']);

  function emitClickEvent() {
    emit('click');
  }

  defineProps({
    customStyling: {
      type: String,
      required: false,
      default: ''
    },
    isSelected: {
      type: Boolean,
      required: false,
      default: false
    }
  })
</script>

<template>
  <button
    @click="emitClickEvent"
    :class="[
      customStyling,
      'p-3 items-center rounded-xl',
      isSelected ? 'border-0 bg-brown-light border-primary' : ''
    ]">
    <slot></slot>
  </button>
</template>

<style scoped>
  button {
    border: 0.1vw solid var(--color-brown-light);
    transition: all 0.4s ease-in-out;
    transform: scale(1);
  }

  button:hover {
    border: 0;
    background: var(--color-brown-light);
    cursor: pointer;
    transform: scale(1.1);
  }

</style>

