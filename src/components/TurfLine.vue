<script setup lang="ts">
  import { ref } from 'vue'
  import BaggerButton from '@/components/BaggerButton.vue'
  import BaggerInput from '@/components/BaggerInput.vue'

  const amount = ref(0);
  const item = ref("");
  const price = ref(0);

  function increase() {
    amount.value++;
  }

  function decrease() {
    if (amount.value > 0) amount.value--;
  }
</script>

<template>
  <div id="line" class="grid grid-rows-1 grid-cols-2 gap-y-2 gap-x-2">

    <div id="counter" class="row-start-1 col-start-1 col-span-1
     grid grid-rows-1 grid-cols-3 gap-x-2 ">

      <div id="minus" class="row-start-1 col-start-1 col-span-1">
        <BaggerButton customStyling="w-[100%] h-[100%]" @click="decrease">-</BaggerButton>
      </div>

      <div id="amount" class="row-start-1 row-span-1 col-start-2 col-span-1 h-full">
        <BaggerInput
          v-model="amount"
          type="number"
          value=""
        />
      </div>

      <div id="plus" class="row-start-1 row-span-1 col-start-3 col-span-1">
        <BaggerButton customStyling="w-[100%] h-[100%]" @click="increase">+</BaggerButton>
      </div>

    </div>

    <div id="name-and-price" class="row-start-1
    grid grid-rows-2 grid-cols-1 gap-y-2">

      <div id="item" class="row-start-1 row-span-1">
        <BaggerInput
          v-model="item"
          type="text"
          placeholder="Drankje..."
        />
      </div>

      <div id="price" class="row-start-2 row-span-1">
        <BaggerInput
          v-model="price"
          type="number"
          min="0"
          placeholder="price"
          step=".01"
        />
      </div>


    </div>


  </div>

</template>

<style scoped>

</style>
