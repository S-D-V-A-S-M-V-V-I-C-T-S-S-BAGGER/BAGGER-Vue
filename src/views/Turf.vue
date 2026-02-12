<script setup lang="ts">
  import { ref } from 'vue';

  import BaggerButton from '@/components/BaggerButton.vue';
  import TurfLine from '@/components/TurfLine.vue'

  const total = ref(0.00);
  const lines = ref([{}]);

  function addLine() {
      lines.value.push({});
  }

</script>

<template>

  <!-- Flex -->
  <div id="wrapper" class="flex flex-col items-center mx-5 my-5 gap-y-5 md:gap-y-8">

    <!-- Flex -->
    <div id="total" class="flex flex-col gap-y-1">
      <BaggerButton :isPrimary=false customStyling="w-[40vw] md:w-[15vw]">Reset</BaggerButton>
      <BaggerButton :isPrimary=false customStyling="w-[40vw] md:w-[15vw]" >Totaal: {{ total }}</BaggerButton>
    </div>

    <!-- Grid 2 rows 2 cols -->
    <div id="titles" class="grid grid-rows-1 grid-cols-2 gap-x-5 w-[80vw] justify-items-center items-center
                               md:w-[40vw] md:grid-cols-[15vw_25vw]">
      <h1 class="">Hoeveel</h1>
      <div id="sub-headers" class="md:grid md:grid-rows-1 md:grid-cols-2 md:w-[100%]">
        <h2 class="md:row-start-1 md:col-start-1 md:col-span-1">Wat</h2>
        <h2 class="md:row-start-1 md:col-start-2 md:col-span-1">Prijs</h2>
      </div>
    </div>

    <div id="turf-lines" class="w-[80vw] flex flex-col gap-y-5 md:w-[40vw]">
      <TurfLine v-for="(line, i) in lines" :key="i" />
    </div>

    <div id="plus-turf-line">
      <BaggerButton :isPrimary=false customStyling="w-[40vw] md:w-[15vw]" @click="addLine">+</BaggerButton>
    </div>

    <div id="submit">
      <BaggerButton :isPrimary=false customStyling="w-[40vw] md:w-[15vw]">Klaar!</BaggerButton>
    </div>

    <div id="login">
      <BaggerButton :isPrimary=false customStyling="w-[40vw] md:w-[15vw]">Login</BaggerButton>
    </div>

  </div>


</template>

<style scoped></style>
