<script setup lang="ts">
defineOptions({
  name: 'BAGGER Button',
})
const emit = defineEmits(['click'])

function emitClickEvent() {
  emit('click')
}
</script>

<template>
  <button @click="emitClickEvent" class="bg-blue-700">
    <slot></slot>
  </button>
</template>

<style scoped></style>
