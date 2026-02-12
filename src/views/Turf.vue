<script setup lang="ts">
import { ref } from 'vue'

import BaggerButton from '@/components/BaggerButton.vue'
import TurfLine from '@/components/TurfLine.vue'

interface LineItem {
  amount?: number;
  price?: number;
}

const total = ref(0)
const lines = ref<LineItem[]>([{}])

function addLine() {
  lines.value.push({})
}

const login = true
// const login = false;

function totalUpdate(update: {index: number, amount: number, price: number}) {
  lines.value[update.index] = {
    amount: update.amount,
    price: update.price
  }

  total.value = lines.value.reduce((sum, line) => {
    const amount = line.amount || 0;
    const price = line.price || 0;
    return sum + (amount * price)
  }, 0);
}

</script>

<template>

  <!-- Flex -->
  <div id="wrapper" class="flex flex-col items-center mx-5 my-5 gap-y-5 md:gap-y-8">


    <div v-if="login" id="logout" class="self-end">
      <BaggerButton :isPrimary=false customStyling="w-[25vw] md:w-[10vw]">Logout</BaggerButton>
    </div>

    <!-- Flex -->
    <div id="total" class="flex flex-col gap-y-1">
      <BaggerButton :isPrimary=false customStyling="w-[40vw] md:w-[15vw]">Reset</BaggerButton>
      <BaggerButton :isPrimary=false customStyling="w-[40vw] md:w-[15vw]" >Totaal: €{{ total }}</BaggerButton>
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
      <TurfLine v-for="(line, i) in lines" :key="i" :index="i" @turf-line="totalUpdate"
      />
    </div>

    <div id="plus-turf-line">
      <BaggerButton :isPrimary=false customStyling="w-[40vw] md:w-[15vw]" @click="addLine">+
      </BaggerButton>
    </div>

    <div v-if="login" id="submit">
      <BaggerButton :isPrimary=false customStyling="w-[40vw] md:w-[15vw]">Klaar!</BaggerButton>
    </div>

    <div v-else id="login">
      <BaggerButton :isPrimary=false customStyling="w-[40vw] md:w-[15vw]">Login</BaggerButton>
    </div>

  </div>


</template>

<style scoped></style>
