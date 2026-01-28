<script setup lang="ts">
const emit = defineEmits(['click'])

function emitClickEvent() {
  emit('click')
}
</script>

<template>
  <button @click="emitClickEvent" class="border rounded min-w-35 pop-effects">
    <slot></slot>
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
