<script setup lang="ts">

import BaggerButton from '@/components/BaggerButton.vue'
import BaggerFooter from '@/components/BaggerFooter.vue'
import { useTurfStore } from '@/stores/turfStore.ts'
import { useRouter } from 'vue-router'

const turfStore = useTurfStore();
const router = useRouter();

const formatDate = (dateString: string | undefined) => {
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
      Je hebt <b>€ {{ turfStore.total }}</b> geturfd voor <b>{{ turfStore.currentOccasion.name }}</b> op <i>{{ formatDate(turfStore.currentOccasion.date)
      }}</i>
    </p>

    <div id="buttons" class="w-full md:w-[40vw] flex flex-col gap-y-5">
      <BaggerButton icon="fa-solid fa-backward" customStyling="w-full" @click="() => { router.push('/turf') }">Pas turven aan</BaggerButton>

      <!--TODO: 20260227 - Add functionality to edit the total amount only -->
      <BaggerButton icon="fa-solid fa-backward" customStyling="w-full">Pas eindbedrag aan</BaggerButton>

      <BaggerButton icon="fa-solid fa-backward" customStyling="w-full" @click="() => { router.push('/gelegenheid') }">Pas gelegenheid aan</BaggerButton>

      <BaggerButton customStyling="w-full">Klaar!</BaggerButton>
    </div>

    <div id="turf" class="w-full flex flex-col gap-y-1 md:w-[40vw] md:px-5">
      <p>Je hebt geturfd: </p>
      <div id="list" class="flex flex-col items-center gap-y-2 h-[50vh] overflow-y-auto md:h-[40vh] lg:h-[50vh]">
        <div id="line" class="flex flex-row justify-evenly w-full"
             v-for="(line, i) in turfStore.lines" :key="i">
          <template v-if="line.amount && line.amount > 0">
            <p>{{ line.item || 'Niks ingevuld bij drankje :('}}</p>
            <p>€ {{ line.price || 0 }}</p>
            <p>{{ line.amount }}</p>
          </template>
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
