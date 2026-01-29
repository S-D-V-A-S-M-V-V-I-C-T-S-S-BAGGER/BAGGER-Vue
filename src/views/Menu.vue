<script setup lang="ts">
  import BaggerButton from '@/components/BaggerButton.vue';
</script>

<template>

  <div id="wrapper" class="flex flex-col items-center my-5 gap-y-10">

  <BaggerButton>LOGIN</BaggerButton>

  <div id="links" class="flex flex-col items-center gap-y-5">
    <h1>Links</h1>
    <BaggerButton >Home/Smoelenboek</BaggerButton>
    <BaggerButton>Turflijst</BaggerButton>
    <BaggerButton>Quotes</BaggerButton>
    <BaggerButton>Declaratie indienen</BaggerButton>
    <BaggerButton>Activiteten planning</BaggerButton>
    <BaggerButton>Hier</BaggerButton>
  </div>

  <div id="api" class="flex flex-col gap-y-3">
    <h1 class="self-center">API</h1>

    <div class="flex flex-row gap-x-3">
      <BaggerButton>Week</BaggerButton>
      <p>Geeft het huidige weeknummer</p>
    </div>

    <div class="flex flex-row gap-x-3">
      <BaggerButton>BAK ?!</BaggerButton>
      <p>Bak of geen bak?</p>
    </div>

    <div class="flex flex-row gap-x-3">
      <BaggerButton>Bafko</BaggerButton>
      <p>Voor elke situatie wel één!</p>
    </div>

  </div>

  </div>


</template>

<style scoped></style>
