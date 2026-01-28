<script setup lang="ts">
import BaggerButton from '@/components/BaggerButton.vue'
</script>

<template>
  <h1>Main page</h1>
  <BaggerButton @click="() => console.log('Hello world!')" :is-primary="false"></BaggerButton>
</template>

<style scoped></style>
