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
  },
  faded: {
    type: Boolean,
    required: false,
    default: false
  },
  icon: {
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
        faded ? 'bg-secondary-faded text-white-faded border-secondary-faded' : '',
       customStyling,
       'border rounded-lg pop-effects px-2 py-1 flex flex-row items-center justify-center md:px-5 md:py-1 ',
       ]
    "
  >
    <i v-if="icon" :class="icon + ' px-2 md:pr-2 md:px-0'"></i>
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
