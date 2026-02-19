<script setup lang="ts">

import BaggerButton from '@/components/BaggerButton.vue'
import BaggerInput from '@/components/BaggerInput.vue'
import BaggerDropDown from '@/components/BaggerDropDown.vue'
import BafkoBox from '@/components/BafkoBox.vue'
import { onMounted, ref } from 'vue'

export interface DropDownOption {
  label: string;
  value: string;
}

interface Bafko {
  bafko: string;
  type: string;
  description: string;
}

const dummy = ref<Bafko[]>([])
const options = ref<DropDownOption[]>([]);

onMounted(() => {
  const bafko1: Bafko = { bafko: 'BAfko', type: 'znw', description: 'BAGGER Afkorting (Commissie)' }
  dummy.value.push(bafko1)
  const bafko2: Bafko = {
    bafko: 'GGGOEEEL',
    type: 'spreuk',
    description: 'Goud Geel Grolschjes Openen, Echt Echt Echt Lekker'
  }
  dummy.value.push(bafko2)
  const bafko3: Bafko = {
    bafko: 'Bavaria',
    type: 'volzin',
    description: 'BAGGER vakantie richting Antwerpen'
  }
  dummy.value.push(bafko3);
  // also getting the dropdown for options for now
  const all: DropDownOption = {label: "all", value: "all"};
  const znw: DropDownOption = {label: "znw", value: "znw"};
  const spreuk: DropDownOption = {label: "spreuk", value: "spreuk"};
  const volzin: DropDownOption = {label: "volzin", value: "volzin"};
  const tussenwerpsel: DropDownOption = {label: "tussenwerpsel", value: "tussenwerpsel"};
  options.value.push(all);
  options.value.push(znw);
  options.value.push(spreuk);
  options.value.push(volzin);
  options.value.push(tussenwerpsel);
});


</script>

<template>
  <div id="wrapper" class="flex flex-col gap-y-5 items-center mt-10 mx-5">

    <div id="title" class="text-wrap text-center">
      <h1>BAFKO's</h1>
      <h3>BAGGER Afkortingen Die Dan Wel Dan Niet Gemaakt Worden Door Het Woord BAGGER Voor Een
        Ander Woord Te Zetten</h3>
    </div>

    <BaggerButton customStyling="w-[80vw] h-[5vh]">Willekeurige BAFKO</BaggerButton>

    <BaggerInput type="text" placeholder="Zoek voor bafko of bescrhijving" customStyling="w-[80vw]"
                 icon="pi pi-search"></BaggerInput>

    <div id="types" class="flex flex-col items-start w-[80vw]">
      <h4>Type</h4>
      <BaggerDropDown width="w-[80vw]" :options="options"></BaggerDropDown>
    </div>

    <div id="list"
         class="flex flex-col items-center w-[80vw] mt-2"
         v-for="(bafko, index) in dummy" :key="index">
      <BafkoBox>
        <template v-slot:bafko>{{ bafko.bafko }}</template>
        <template v-slot:type>{{ bafko.type }}</template>
        <template v-slot:description>{{ bafko.description }}</template>
      </BafkoBox>
    </div>


  </div>

  <div>footer with home and sitemap button</div>

</template>

<style scoped>

</style>
