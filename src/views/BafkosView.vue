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
  const bafko4: Bafko = {
    bafko: 'ZAX',
    type: 'bijw',
    description: 'Zwaar A-relaxt'
  }
  dummy.value.push(bafko4);
  // also getting the dropdown for options for now
  const all: DropDownOption = {label: "all", value: "all"};
  const znw: DropDownOption = {label: "znw", value: "znw"};
  const spreuk: DropDownOption = {label: "spreuk", value: "spreuk"};
  const volzin: DropDownOption = {label: "volzin", value: "volzin"};
  const tussenwerpsel: DropDownOption = {label: "tussenwerpsel", value: "tussenwerpsel"};
  const bijw: DropDownOption = {label: "bijw", value: "bijw"};
  options.value.push(all);
  options.value.push(znw);
  options.value.push(spreuk);
  options.value.push(volzin);
  options.value.push(tussenwerpsel);
  options.value.push(bijw);
});


</script>

<template>
  <div id="wrapper" class="flex flex-col gap-y-5 items-center mt-5 mx-5">

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

    <div id="list-wrapper" class="flex flex flex-col items-center h-[50vh] w-[80vw] gap-y-5 overflow-y-auto">
      <div id="list-item"
           class="w-[100%]"
           v-for="(bafko, index) in dummy" :key="index">
        <BafkoBox>
          <template v-slot:bafko>{{ bafko.bafko }}</template>
          <template v-slot:type>{{ bafko.type }}</template>
          <template v-slot:description>{{ bafko.description }}</template>
        </BafkoBox>
      </div>
    </div>

    <div id="footer" class="flex flex-row w-[80vw] max-h-fit items-center justify-evenly pt-5 border-t-1 border-primary ">
      <BaggerButton><router-link :to="{ name: 'home'}"><i class="pi pi-home"></i></router-link></BaggerButton>
      <BaggerButton><router-link :to="{ name: 'sitemap'}"><i class="pi pi-bars"></i></router-link></BaggerButton>
      <BaggerButton>LOGOUT</BaggerButton>
    </div>
  </div>



</template>

<style scoped>

</style>
