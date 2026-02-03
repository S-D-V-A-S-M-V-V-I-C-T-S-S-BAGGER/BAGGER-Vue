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
  <div id="wrapper" class="flex flex-col items-center mx-5 my-5 gap-y-5">

    <!-- Flex -->
    <div id="total" class="flex flex-col gap-y-1">
      <BaggerButton buttonWidth="w-[40vw]">Reset</BaggerButton>
      <BaggerButton buttonWidth="w-[40vw]" >Totaal: {{ total }}</BaggerButton>
    </div>

    <!-- Grid 2 rows 2 cols -->
    <div id="titles" class="grid grid-rows-2 grid-cols-2 gap-x-5">
      <h1 class="row-start-1 row-span-2 col-start-1 col-span-1 self-center">Hoeveel</h1>
      <h2 class="row-start-1 row-span-1 col-start-2 col-span-1">Wat</h2>
      <h2 class="row-start-2 row-span-1 col-start-2 col-span-1">Prijs</h2>
    </div>


    <!-- Grid 2 rows 4 cols -->
    <div id="turf-lines" class="w-[80vw] flex flex-col gap-y-5">
      <TurfLine v-for="(line, i) in lines" :key="i" />
    </div>

    <div id="plus-turf-line">
      <BaggerButton buttonWidth="w-[40vw]" @click="addLine">+</BaggerButton>
    </div>

    <div id="login">
      <BaggerButton buttonWidth="w-[40vw]">Login</BaggerButton>
    </div>

  </div>


</template>

<style scoped></style>
