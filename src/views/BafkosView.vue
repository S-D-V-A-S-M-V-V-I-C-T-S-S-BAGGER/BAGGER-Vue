<script setup lang="ts">

import BaggerButton from '@/components/BaggerButton.vue'
import BaggerInput from '@/components/BaggerInput.vue'
import BaggerDropDown from '@/components/BaggerDropDown.vue'
import BafkoBox from '@/components/BafkoBox.vue'
import BaggerFooter from '@/components/BaggerFooter.vue'
import { onMounted, ref, watch } from 'vue'

export interface DropDownOption {
  label: string;
  value: string;
}

interface Bafko {
  bafko: string;
  type: string;
  description: string;
}

const bafkos = ref<Bafko[]>([])
const options = ref<DropDownOption[]>([])
const optionFilter = ref('')
const filtered = ref<Bafko[]>([])
const search = ref('')

onMounted(() => {
  const bafko1: Bafko = { bafko: 'BAfko', type: 'znw', description: 'BAGGER Afkorting (Commissie)' }
  bafkos.value.push(bafko1)
  const bafko2: Bafko = {
    bafko: 'GGGOEEEL',
    type: 'spreuk',
    description: 'Goud Geel Grolschjes Openen, Echt Echt Echt Lekker'
  }
  bafkos.value.push(bafko2)
  const bafko3: Bafko = {
    bafko: 'Bavaria',
    type: 'volzin',
    description: 'BAGGER vakantie richting Antwerpen'
  }
  bafkos.value.push(bafko3)
  const bafko4: Bafko = {
    bafko: 'ZAX',
    type: 'bijw',
    description: 'Zwaar A-relaxt'
  }
  bafkos.value.push(bafko4)
  // also getting the dropdown for options for now
  const all: DropDownOption = { label: 'Geen', value: 'Geen' }
  const znw: DropDownOption = { label: 'znw', value: 'znw' }
  const spreuk: DropDownOption = { label: 'spreuk', value: 'spreuk' }
  const volzin: DropDownOption = { label: 'volzin', value: 'volzin' }
  const tussenwerpsel: DropDownOption = { label: 'tussenwerpsel', value: 'tussenwerpsel' }
  const bijw: DropDownOption = { label: 'bijw', value: 'bijw' }
  options.value.push(all, znw, spreuk, volzin, tussenwerpsel, bijw)

  filtered.value = bafkos.value
})

function handleOption(payload: DropDownOption) {
  optionFilter.value = payload.value
  console.log(optionFilter.value)
  // if option is all return the whole list
  if (optionFilter.value === 'Geen' || optionFilter.value === '') {
    filtered.value = bafkos.value
  } else {
    // update the bafko list to only have the ones with the given optionFilter
    filtered.value = bafkos.value.filter((option) => option.type === optionFilter.value)
  }
}

function randomBafko(randomize: boolean) {
  search.value = ''
  if (randomize) {
    filtered.value = []
    filtered.value.push(bafkos.value[Math.floor(Math.random() * bafkos.value.length)]!)
  } else {
    filtered.value = []
    filtered.value = bafkos.value
  }
}

watch(search, (current) => {
  if (current.trim() === '') {
    filtered.value = bafkos.value
  } else {
    const query = current.toLowerCase()
    filtered.value = bafkos.value.filter((item) =>
      item.bafko.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    )
  }
})

</script>

<template>
  <div id="wrapper" class="flex flex-col gap-y-4 items-center mt-3 mx-5 md:gap-y-5">

    <div id="title" class="text-wrap text-center">
      <h1>BAFKO's</h1>
      <h3>BAGGER Afkortingen Die Dan Wel Dan Niet Gemaakt Worden Door Het Woord BAGGER Voor Een
        Ander Woord Te Zetten</h3>
    </div>

    <div class="flex flex-col gap-y-4 items-center
                  md:w-[80vw] md:flex-row md:justify-around">
      <BaggerButton customStyling="w-[80vw] h-fit md:w-[15vw]" @click="randomBafko(true)"><i class="pi pi-question"></i> Willekeurige BAFKO
      </BaggerButton>

      <BaggerButton customStyling="w-[80vw] h-fit md:w-[10vw]" @click="randomBafko(false)"><i class="pi pi-sync"></i> Reset Lijst
      </BaggerButton>

      <BaggerInput type="text" placeholder="Zoek voor bafko of beschrijving"
                   customStyling="w-[80vw] md:w-[30vw]"
                   icon="pi pi-search" v-model="search"></BaggerInput>

      <div id="types" class="flex flex-col items-start w-[80vw]
                              md:w-[20vw] md:flex-row md:items-center md:gap-x-3">
        <h4>Type:</h4>
        <BaggerDropDown width="w-[80vw] md:w-[15vw]" :options="options"
                        @send-option="handleOption"></BaggerDropDown>
      </div>

    </div>

    <div id="list-wrapper"
         class="flex flex flex-col items-center h-[50vh] w-[80vw] gap-y-5 overflow-y-auto
                md:w-[90vw] md:h-[55vh] md:flex-row md:gap-x-5 md:flex-wrap md:items-start md:justify-center">
      <div id="list-item"
           class="w-[100%] md:w-[20vw]"
           v-for="(bafko, index) in filtered" :key="index">
        <BafkoBox>
          <template v-slot:bafko>{{ bafko.bafko }}</template>
          <template v-slot:type>{{ bafko.type }}</template>
          <template v-slot:description>{{ bafko.description }}</template>
        </BafkoBox>
      </div>
    </div>

    <BaggerFooter />
  </div>


</template>

<style scoped>

</style>
