<script setup lang="ts">

import BaggerButton from '@/components/BaggerButton.vue'
import BaggerInput from '@/components/BaggerInput.vue'
import BaggerDropDown from '@/components/BaggerDropDown.vue'

export interface DropDownOption {
  label: string;
  value: string;
}

const dummyOptions = (amount: number) => {
  const result = [];
  for (let i = 0; i < amount; i++) {
    const option: DropDownOption = {label: `Option ${i}`, value: `option-${i}`};
    result.push(option);
  }
  return result;
}


</script>

<template>
  <div id="wrapper" class="flex flex-col gap-y-5 items-center mt-10 mx-5">

    <div id="title" class="text-wrap text-center">
      <h1>BAFKO's</h1>
      <h3>BAGGER Afkortingen Die Dan Wel Dan Niet Gemaakt Worden Door Het Woord BAGGER Voor Een Ander Woord Te Zetten</h3>
    </div>

    <BaggerButton customStyling="w-[80vw] h-[5vh]">Willekeurige BAFKO</BaggerButton>

    <BaggerInput type="text" placeholder="Zoek voor bafko of bescrhijving" customStyling="w-[80vw]" icon="pi pi-search"></BaggerInput>

    <div id="types" class="flex flex-col items-start w-[80vw]">
      <h4>Type</h4>
      <BaggerDropDown :options="dummyOptions(3)"></BaggerDropDown>
    </div>

    <div>start of list</div>

    <div>bafko box</div>

  </div>

  <div>footer with home and sitemap button</div>

</template>

<style scoped>

</style>
