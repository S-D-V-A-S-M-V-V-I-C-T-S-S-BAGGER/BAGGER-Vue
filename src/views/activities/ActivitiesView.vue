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
  { text: 'Ik ben bij', icon: 'pi pi-check' },
  { text: 'Ik ben saai', icon: 'pi pi-times' },
  { text: 'Ik ben later', icon: 'pi pi-times' },
  { text: 'Ik kan niet ofzo', icon: 'pi pi-times' }
])


</script>

<template>
  <div id="wrapper" class="flex flex-col items-start gap-y-5 mt-5 px-5 md:items-center">

    <!--    Title and new button-->
    <div id="title"
         class="flex flex-row justify-between w-full border-b border-secondary max-h-fit pb-3 md:px-10">
      <h1>Activiteiten</h1>
      <BaggerButton icon="pi pi-plus" @click="() => router.push('/activiteiten/nieuw')">
        Nieuwe Activiteit!
      </BaggerButton>
    </div>

    <!--    Filters-->
    <div id="filters" class="grid grid-rows-1 grid-cols-2 gap-x-5 border-b border-secondary max-h-fit pb-5 w-full
                             md:flex md:flex-row md:pb-3 md:px-10">
      <BaggerButton icon="pi pi-hourglass" customStyling="md:w-1/7">Aankomende</BaggerButton>
      <BaggerButton icon="pi pi-history" customStyling="md:w-1/7">Geweest</BaggerButton>
    </div>

    <!--    Activity list-->
    <div id="list-wrapper" class="w-[90vw] h-[65vh] flex flex-col gap-y-5 overflow-y-auto
                              md:h-[60vh]">
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
