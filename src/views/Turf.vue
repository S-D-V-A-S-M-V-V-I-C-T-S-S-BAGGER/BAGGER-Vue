<script setup lang="ts">
  import { ref } from 'vue';

  import BaggerButton from '@/components/BaggerButton.vue';
  import BaggerInput from '@/components/BaggerInput.vue';


  const total = ref();

  // TODO 20260130: make the turf line a seprate component so that it can be added by the plus button
  const lineAmount = ref();
  const item = ref();
  const price = ref();
</script>

<template>

  <!-- Flex -->
  <div id="wrapper" class="flex flex-col items-center mx-5 my-5 gap-y-5">

    <!-- Flex -->
    <div id="total" class="flex flex-col gap-y-1">
      <BaggerButton>Reset</BaggerButton>
      <BaggerButton>Totaal: {{ total }}</BaggerButton>
    </div>

    <!-- Grid 2 rows 2 cols -->
    <div id="titles" class="grid grid-rows-2 grid-cols-2 gap-x-5">
      <h1 class="row-start-1 row-span-2 col-start-1 col-span-1">Hoeveel</h1>
      <h2 class="row-start-1 row-span-1 col-start-2 col-span-1">Wat</h2>
      <h2 class="row-start-2 row-span-1 col-start-2 col-span-1">Prijs</h2>
    </div>


    <!-- Grid 2 rows 4 cols -->
    <div id="turf-line" class="grid grid-rows-2 grid-cols-6 md:w-[60vw] min-h-[10vh]">

      <div id="minus" class="row-start-1 row-span-2 col-start-1 col-span-1">
        <BaggerButton>-</BaggerButton>
      </div>

      <div id="amount" class="row-start-1 row-span-2 col-start-2 col-span-1">
        <BaggerInput
          v-model="lineAmount"
          type="number"
          value="1"
        />
      </div>

      <div id="plus" class="row-start-1 row-span-2 col-start-3 col-span-1">
        <BaggerButton>+</BaggerButton>
      </div>

      <div id="item-input" class="row-start-1 row-span-1 col-start-4 col-span-3">
        <BaggerInput
          v-model="item"
          type="text"
          placeholder="Pils"
        />
      </div>

      <div id="item-price" class="row-start-2 row-span-1 col-start-1 col-span-3">
        <BaggerInput
          v-model="price"
          type="number"
          min="0"
          value="2"
          step=".01"
        />
      </div>

    </div>

    <!-- TODO 20260130: make the turf line a seprate component so that it can be added by the plus button -->
    <div id="plus-turf-line">
      <BaggerButton>+</BaggerButton>
    </div>

    <div id="login">
      <BaggerButton>Login</BaggerButton>
    </div>

  </div>


</template>

<style scoped></style>
