<script setup lang="ts">

import BaggerButton from '@/components/BaggerButton.vue'
import BaggerInput from '@/components/BaggerInput.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const date = ref('')
const startTime = ref('')
const endTime = ref('')
const locationName = ref('')
const locationAddress = ref('')
const description = ref('')


</script>

<template>
  <div id="wrapper" class="flex flex-col items-start gap-5 mt-5 mx-5">

    <div id="title" class="w-full text-center border-b border-secondary max-h-fit pb-3">
      <h1>Hier Kan Je Een Nieuwe Activiteit Aanmaken</h1>
    </div>

    <div id="form" class="w-full grid grid-cols-2 grid-rows-10 auto-rows-max gap-x-3 gap-y-3">

      <div id="name" class="flex flex-col">
        <h6>Naam:</h6>
        <BaggerInput />
      </div>

      <div id="date" class="flex flex-col">
        <h6>Datum:</h6>
        <BaggerInput />
      </div>

      <div id="times">
        <div id="start" class="flex flex-col">
          <h6>Starttijd:</h6>
          <BaggerInput />
        </div>
        <div id="end" class="flex flex-col">
          <h6>Eindtijd:</h6>
          <BaggerInput />
        </div>
      </div>

      <div id="location">
        <div id="location_name" class="flex flex-col">
          <h6>Naam van locatie:</h6>
          <BaggerInput />
        </div>
        <div id="location_address" class="flex flex-col">
          <h6>Adres</h6>
          <BaggerInput />
        </div>
      </div>

      <div id="description" class="flex flex-col">
        <h6>Beschrijving:</h6>
        <BaggerInput placeholder="Vul hier de extra informatie in ..." />
      </div>

      <div id="sing-up-options" class="flex flex-col">
        <h6>Hier komt iets met buttons maken voor inschrijven</h6>
      </div>

      <div id="buttons">
        <BaggerButton>Maak aan!</BaggerButton>
        <BaggerButton>Reset</BaggerButton>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
