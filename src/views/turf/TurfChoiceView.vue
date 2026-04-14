<script setup lang="ts">

import BaggerButton from '@/components/BaggerButton.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import BaggerFooter from '@/components/BaggerFooter.vue'

const router = useRouter()

const username = ref('username')
</script>

<template>
  <div id="wrapper" class="flex flex-col items-center justify-center h-[90vh] gap-y-10">
    <h1>Hallo {{ username }}!</h1>
    <div id="buttons" class="flex flex-col items-center justify-around w-[70vw] gap-y-15 md:flex-row">
      <BaggerButton icon="fa-solid fa-coins" @click="() => router.push('/turf-total')" customStyling="w-full h-[15vh] md:w-[25vw]">Eindbedrag invoeren</BaggerButton>
      <BaggerButton icon="pi pi-list-check" @click="() => router.push('/turf')" customStyling="w-full h-[15vh] md:w-[25vw]">Turven</BaggerButton>
    </div>
  </div>

  <div id="footer" class="flex flex-col items-center w-full fixed bottom-0 pb-[5vh]">
    <BaggerFooter />
  </div>
</template>

<style scoped>

</style>
