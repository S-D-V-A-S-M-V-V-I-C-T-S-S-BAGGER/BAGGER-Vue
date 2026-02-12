<script setup lang="ts">
const emit = defineEmits(['click'])

function emitClickEvent() {
  emit('click')
}

defineProps({
  isPrimary: {
    type: Boolean,
    required: false,
    default: true
  },
  customStyling: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<template>
  <button
    @click="emitClickEvent"
    :class="[
      isPrimary
        ? 'bg-primary text-black border-primary'
        : 'bg-secondary text-white border-secondary',
       customStyling,
       'border rounded-xl pop-effects px-2 md:px-5 md:py-1 '
       ]
    "
  >
    <slot>🌱</slot>
  </button>
</template>

<style scoped>
button {
  transition: all 0.4s ease-in-out;
  transform: scale(1);
}

button:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
