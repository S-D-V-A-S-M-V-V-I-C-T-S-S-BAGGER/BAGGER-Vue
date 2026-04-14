<script setup lang="ts">

import BaggerButton from '@/components/BaggerButton.vue'
import BaggerInput from '@/components/BaggerInput.vue'
import BaggerFooter from '@/components/BaggerFooter.vue'


</script>

<template>
  <div id="wrapper" class="flex flex-col items-center justify-center h-[90vh]">
    <div id="page-items" class="flex flex-col items-center justify-center gap-y-10">
      <BaggerButton icon="pi pi-sync" customStyling="w-[70vw] md:w-[40vw]">Reset</BaggerButton>

      <BaggerInput
      type="number"
      value=""
      customStyling="w-[60vw] md:w-[30vw]"
      placeholder="0.00"
      />

      <BaggerButton icon="fa-solid fa-arrow-right-to-bracket" customStyling="w-[70vw] md:w-[40vw]">Stuur Op!</BaggerButton>
    </div>
  </div>

  <div id="footer" class="flex flex-col items-center w-full fixed bottom-0 pb-[5vh]">
    <BaggerFooter />
  </div>
</template>

<style scoped>

</style>
