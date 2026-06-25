<script setup lang="ts">

import BaggerFooter from '@/components/BaggerFooter.vue'
import BaggerButton from '@/components/BaggerButton.vue'
import { ref } from 'vue'
import ActivityBox from '@/components/ActivityBox.vue'
import { useRouter } from 'vue-router'
import { useActivityStore } from '@/stores/activityStore.ts'

const activityStore = useActivityStore()
const router = useRouter()

const buttons = ref<{ text: string, icon?: string }[]>([
  { text: 'Ik ben op tijd', icon: 'fa-regular fa-calendar-check' },
  { text: 'Ik ben later', icon: 'fa-solid fa-hourglass-half' },
  { text: 'Ik kan niet', icon: 'fa-regular fa-calendar-xmark' }
])


</script>

<template>
  <div id="wrapper" class="flex flex-col items-center">

    <!--    Title and new button-->
    <div id="title"
         class="flex flex-row justify-between w-full bg-brown-dark max-h-fit px-3 py-5 md:px-20">
      <h1>Activiteiten</h1>
      <BaggerButton icon="fa-regular fa-square-plus" @click="() => router.push('/activiteiten/nieuw')">
        Nieuwe Activiteit!
      </BaggerButton>
    </div>

    <!--    Filters-->
    <div id="filters" class="grid grid-rows-1 grid-cols-3 gap-x-3 px-2 bg-brown-dark max-h-fit pb-5 w-full mb-5
                             md:flex md:flex-row md:pb-5 md:px-20">
      <BaggerButton customStyling="md:w-1/7">Komend</BaggerButton>
      <BaggerButton customStyling="md:w-1/7">Geweest</BaggerButton>
      <BaggerButton customStyling="md:w-1/7">Alles</BaggerButton>
    </div>

    <!--    Activity list-->
    <div id="list-wrapper" class="w-[90vw] h-[70vh] flex flex-col gap-y-5 overflow-y-auto
                              md:h-[60vh] md:w-[80vw]">
      <div v-for="(activity, index) in activityStore.activities" :key="index">
        <div id="date_name" class="w-full">
          <ActivityBox :activity="activity" :buttons="buttons" />
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
