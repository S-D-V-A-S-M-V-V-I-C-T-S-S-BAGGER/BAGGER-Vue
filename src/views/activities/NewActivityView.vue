<script setup lang="ts">

import BaggerButton from '@/components/BaggerButton.vue'
import BaggerInput from '@/components/BaggerInput.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useActivityStore } from '@/stores/activityStore'
import BaggerFooter from '@/components/BaggerFooter.vue'

const router = useRouter()
const activityStore = useActivityStore()

const name = ref('')
const date = ref('')
const startTime = ref('')
const endTime = ref('')
const locationName = ref('')
const locationAddress = ref('')
const description = ref('')

function createActivity() {
  if (!name.value || !date.value) {
    alert('Vul alstublieft naam en datum in')
    return
  }

  activityStore.addActivity({
    name: name.value,
    date: date.value,
    startTime: startTime.value,
    endTime: endTime.value,
    location: {
      name: locationName.value,
      address: locationAddress.value
    },
    description: description.value
  })

  resetForm()
  router.push('/activiteiten')
}

function resetForm() {
  name.value = ''
  date.value = ''
  startTime.value = ''
  endTime.value = ''
  locationName.value = ''
  locationAddress.value = ''
  description.value = ''
}

</script>

<template>
  <div id="wrapper" class="flex flex-col items-center gap-5 mt-5 mx-5">

    <div id="title" class="w-full text-center border-b-3 border-secondary max-h-fit pb-3">
      <h1>Hier Kan Je Een Nieuwe Activiteit Aanmaken</h1>
    </div>

    <div id="form" class="w-full grid grid-cols-2 grid-rows-8 auto-rows-max gap-y-5
                            md:grid-cols-4 md:grid-rows-7 md:h-[70vh]">

      <div id="name" class="flex flex-col col-start-1 col-span-2 row-start-1 row-span-1
                                md:col-start-2">
        <h6>Naam:</h6>
        <BaggerInput
          v-model="name"
          type="text"
          placeholder="Naam van de activiteit ..."
          customStyling="w-full" />
      </div>

      <div id="date" class="flex flex-col col-start-1 col-span-2 row-start-2 row-span-1
                              md:col-start-2">
        <h6>Datum:</h6>
        <BaggerInput
          v-model="date"
          type="date"
          customStyling="w-full" />
      </div>

      <div id="times" class="col-start-1 col-span-2 row-start-3 row-span-1 pl-3 grid grid-cols-2 grid-rows-1
                                md:col-start-2">
        <div id="start" class="flex flex-col col-start-1 col-span-1">
          <h6>Starttijd:</h6>
          <BaggerInput
            v-model="startTime"
            type="time"
            customStyling="w-9/10" />
        </div>
        <div id="end" class="flex flex-col col-start-2 col-span-2">
          <h6>Eindtijd:</h6>
          <BaggerInput
            v-model="endTime"
            type="time"
            customStyling="w-9/10" />
        </div>
      </div>

<!--      TODO: 20260519 - Have the location maybe be a dropdown with saved locations if wanted and also still be able to add a new one using the form-->
      <div id="location" class="col-start-1 col-span-2 row-start-4 row-span-2 grid grid-cols-2 grid-rows-2 gap-y-2
                                  md:col-start-2">
        <div id="location_name" class="flex flex-col col-start-1 col-span-2 row-start-1 row-span-1">
          <h6>Naam van locatie:</h6>
          <BaggerInput
            v-model="locationName"
            type="text"
            placeholder="Naam van de locatie ..."
            customStyling="w-full" />
        </div>
        <div id="location_address" class="flex flex-col col-start-1 col-span-2 row-start-2 row-span-1">
          <h6>Adres:</h6>
          <BaggerInput
            v-model="locationAddress"
            type="text"
            placeholder="Adres van de locatie ..."
            customStyling="w-full" />
        </div>
      </div>

<!--      TODO: 20260519 - Make the description field a pop-up that covers the rest and can is Markdown -->
      <div id="description" class="flex flex-col col-start-1 col-span-2 row-start-6 row-span-1
                                      md:col-start-2">
        <h6>Beschrijving:</h6>
        <BaggerInput
          v-model="description"
          type="text"
          placeholder="Vul hier de extra informatie in ..."
          customStyling="w-full" />
      </div>

      <div id="sing-up-options" class="flex flex-col col-start-1 col-span-2 row-start-7 row-span-1
                                          md:col-start-2">
        <h6>Hier komt iets met buttons maken voor inschrijven</h6>
      </div>

      <div id="buttons" class="flex flex-row justify-evenly col-start-1 col-span-2 row-start-8 row-span-1
                                  md:col-start-2">
        <BaggerButton
          customStyling="w-1/3"
          @click="createActivity"
        >Maak aan!</BaggerButton>
        <BaggerButton customStyling="w-1/3" @click="resetForm">Reset</BaggerButton>
      </div>
    </div>
  </div>

  <div id="footer" class="flex flex-col items-center w-full fixed bottom-0 pb-[5vh]">
    <BaggerFooter />
  </div>
</template>

<style scoped>

</style>
