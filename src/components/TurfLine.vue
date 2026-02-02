<script setup lang="ts">
  import { ref } from 'vue'
  import BaggerButton from '@/components/BaggerButton.vue'
  import BaggerInput from '@/components/BaggerInput.vue'

  const amount = ref();
  const item = ref();
  const price = ref();
</script>

<template>
  <div id="line" class="grid grid-rows-2 grid-cols-5 gap-y-2 ">
    <div id="minus" class="row-start-1 row-span-2 col-start-1 col-span-1 self-center">
      <BaggerButton buttonWidth="w-[100%]">-</BaggerButton>
    </div>

    <div id="amount" class="row-start-1 row-span-2 col-start-2 col-span-1 self-center">
      <BaggerInput
        v-model="amount"
        type="number"
        value="1"
        />
    </div>

    <div id="plus" class="row-start-1 row-span-2 col-start-3 col-span-1 self-center">
      <BaggerButton buttonWidth="w-[100%] h-[100%]">+</BaggerButton>
    </div>

    <div id="item" class="row-start-1 row-span-1 col-start-4 col-span-2">
      <BaggerInput
        v-model="item"
        type="text"
        placeholder="Pils"
      />
    </div>

    <div id="price" class="row-start-2 row-span-1 col-start-4 col-span-2">
      <BaggerInput
        v-model="price"
        type="number"
        min="0"
        value="2"
        step=".01"
      />
    </div>

  </div>

</template>

<style scoped>

</style>
