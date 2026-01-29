<script setup lang="ts">
const emit = defineEmits(['click'])

function emitClickEvent() {
  emit('click')
}

defineProps({
  isPrimary: {
    type: Boolean,
    required: false,
    default: true,
  },
})
</script>

<template>
  <button
    @click="emitClickEvent"
    :class="
      isPrimary
        ? 'bg-primary text-black border-primary'
        : 'bg-secondary text-white border-secondary'
    "
    class="border rounded-xl min-w-35 pop-effects px-2 md:px-5 md:py-1"
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
  transform: scale(1.1);
}
</style>
