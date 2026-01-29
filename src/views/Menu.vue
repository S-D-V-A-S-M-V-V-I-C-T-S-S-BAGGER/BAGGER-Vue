<script setup lang="ts">
  import BaggerButton from '@/components/BaggerButton.vue';
</script>

<template>

  <div id="wrapper" class="flex flex-col items-center my-5 gap-y-10
                          md:gap-y-15">

  <BaggerButton>LOGIN</BaggerButton>

  <div id="links" class="flex flex-col items-center gap-y-5
                          md:grid md:grid-cols-3 md:grid-rows-3 md:gap-5">
    <h1 class="md:col-start-1 md:col-span-3 md:row-start-1 md:justify-self-center">Links</h1>
    <BaggerButton >Home/Smoelenboek</BaggerButton>
    <BaggerButton>Turflijst</BaggerButton>
    <BaggerButton>Quotes</BaggerButton>
    <BaggerButton>Declaratie indienen</BaggerButton>
    <BaggerButton>Activiteiten planning</BaggerButton>
    <BaggerButton>Hier</BaggerButton>
  </div>

  <div id="api" class="flex flex-col gap-y-3">
    <h1 class="self-center">API</h1>

    <div class="flex flex-row gap-x-3 items-center">
      <BaggerButton>Week</BaggerButton>
      <p>Geeft het huidige weeknummer</p>
    </div>

    <div class="flex flex-row gap-x-3 items-center">
      <BaggerButton>BAK ?!</BaggerButton>
      <p>Bak of geen bak?</p>
    </div>

    <div class="flex flex-row gap-x-3 items-center">
      <BaggerButton>Bafko</BaggerButton>
      <p>Voor elke situatie wel één!</p>
    </div>

  </div>

  </div>


</template>

<style scoped></style>
