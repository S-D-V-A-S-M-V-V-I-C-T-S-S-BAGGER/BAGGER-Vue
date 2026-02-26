<script setup lang="ts">

import BaggerButton from '@/components/BaggerButton.vue'
import BaggerFooter from '@/components/BaggerFooter.vue'
import { ref } from 'vue'

const total = ref(6.67)
const occasion = ref('Proeflokaal bavond')
const date = ref('2026-02-11')

const item = ref('Pils van Pitcher');
const item_price = ref(6.67);
const amount = ref(1);

const formatDate = (dateString: string) => {
  if (!dateString) return 'Geen datum =('

  const date = new Date(dateString)

  const formatted = new Intl.DateTimeFormat('nl-NL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)

  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}
</script>

<template>
  <div id="wrapper" class="flex flex-col items-center mx-5 mt-10 gap-y-5">

    <p id="turf-data" class="w-full text-center text-wrap md:w-[80vw]">
      Je hebt <b>€ {{ total }}</b> geturfd voor <b>{{ occasion }}</b> op <i>{{ formatDate(date)
      }}</i>
    </p>

    <div id="buttons" class="w-full md:w-[40vw] flex flex-col gap-y-5">
      <BaggerButton customStyling="w-full">Pas turven aan</BaggerButton>

      <BaggerButton customStyling="w-full">Pas eindbedrag aan</BaggerButton>

      <BaggerButton customStyling="w-full">Pas gelegenheid aan</BaggerButton>

      <BaggerButton customStyling="w-full">Klaar!</BaggerButton>
    </div>

    <div id="turf" class="w-full flex flex-col gap-y-1 md:w-[40vw] md:px-5">
      <p>Je hebt geturfd: </p>
      <div id="list" class="flex flex-col items-center gap-y-2 h-[50vh] overflow-y-auto md:h-[40vh] lg:h-[50vh]">
        <div id="line" class="flex flex-row justify-evenly w-full">
          <p>{{ item }}</p>
          <p>€ {{ item_price }}</p>
          <p>{{ amount }}</p>
        </div>
        <div id="line" class="flex flex-row justify-evenly w-full">
          <p>{{ item }}</p>
          <p>€ {{ item_price }}</p>
          <p>{{ amount }}</p>
        </div>



      </div>
    </div>

  </div>

  <div id="footer" class="flex flex-col items-center w-full fixed bottom-0 pb-[5vh]">
    <BaggerFooter />
  </div>

</template>

<style scoped>

</style>
