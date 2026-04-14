<script setup lang="ts">

import BaggerFooter from '@/components/BaggerFooter.vue'
import BaggerButton from '@/components/BaggerButton.vue'
import { ref } from 'vue'
import ActivityBox from '@/components/ActivityBox.vue'

export interface Activity {
  name?: string;
  date?: string;
  time?: string;
  location?: string;
}

export interface Location {
  name?: string;
  street?: string;
  postalCode?: string;
  city?: string;
  country?: string;
}


const activities = ref<Activity[]>([
  {
    name: 'BALV',
    date: '2026-03-22',
    time: '14:00',
    location: 'Villa Fietspad'
  },
  {
    name: 'Brawl Stars tegen Tegel',
    date: '2026-03-25',
    time: '20:00',
    location: 'Villa Fietspad'
  },
  {
    name: 'Cocktail avond met Yorinf',
    date: '2026-04-15',
    time: '20:00',
    location: 'TBD'
  },
  {
    name: 'BAvond',
    date: '2026-04-01',
    time: '20:00',
    location: 'Huize Oranje Boven'
  }
])

const participants = ref<{ name: string }[]>([
  { name: 'Rik' },
  { name: 'Lucas' },
  { name: 'Joram' },
  { name: 'Guusje' },
  { name: 'Conner' },
  { name: 'Guido' },
  { name: 'Dilan' },
  { name: 'Masha' },
  { name: 'Tessa' },
  { name: 'Minke' },
  { name: 'Margot' },
  { name: 'Max' },
])

const buttons = ref<{ text: string, icon?: string }[]>([
  { text: 'Ik ben bij', icon: 'pi pi-check' },
  { text: 'Ik ben saai', icon: 'pi pi-times' },
  { text: 'Ik ben later', icon: 'pi pi-times' },
  { text: 'Ik kan niet ofzo', icon: 'pi pi-times' },
])


</script>

<template>
  <div id="wrapper" class="flex flex-col items-start gap-y-5 mt-5 px-5 md:items-center">

<!--    Title and new button-->
    <div id="title" class="flex flex-row justify-between w-full border-b border-secondary max-h-fit pb-3 md:px-10">
      <h1>Activiteiten</h1>
      <BaggerButton icon="pi pi-plus">Nieuwe Activiteit!</BaggerButton>
    </div>

<!--    Filters-->
    <div id="filters" class="grid grid-rows-1 grid-cols-2 gap-x-5 border-b border-secondary max-h-fit pb-5 w-full
                             md:flex md:flex-row md:pb-3 md:px-10" >
      <BaggerButton icon="pi pi-hourglass" customStyling="md:w-1/7">Aankomende</BaggerButton>
      <BaggerButton icon="pi pi-history" customStyling="md:w-1/7">Geweest</BaggerButton>
    </div>

<!--    Activity list-->
    <div id="list-wrapper" class="w-[90vw] h-[65vh] flex flex-col gap-y-5 overflow-y-auto
                              md:h-[60vh]">
      <div v-for="(activity, index) in activities" :key="index">
        <div id="date_name" class="w-full">
          <ActivityBox :activity="activity" :participants="participants" :buttons="buttons"/>
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
