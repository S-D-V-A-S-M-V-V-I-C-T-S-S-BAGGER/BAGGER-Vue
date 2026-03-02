<script setup lang="ts">
  import BaggerButton from '@/components/BaggerButton.vue';
  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>

<template>

  <div id="wrapper" class="flex flex-col items-center my-5 gap-y-10
                          md:gap-y-15">

  <BaggerButton>LOGIN</BaggerButton>

  <div id="links" class="flex flex-col items-center gap-y-5
                          md:grid md:grid-cols-3 md:grid-rows-3 md:gap-5">
    <h1 class="md:col-start-1 md:col-span-3 md:row-start-1 md:justify-self-center">Links</h1>
    <BaggerButton icon="pi pi-home" @click="() => router.push('/')">Home/Smoelenboek</BaggerButton>
    <BaggerButton icon="pi pi-money-bill" @click="() => router.push('/turf')">Turflijst</BaggerButton>
    <BaggerButton icon="pi pi-comments" @click="() => router.push('/quotes')">Quotes</BaggerButton>
    <BaggerButton icon="pi pi-receipt">Declaratie indienen</BaggerButton>
    <BaggerButton icon="pi pi-calendar">Activiteiten planning</BaggerButton>
    <BaggerButton icon="pi pi-bars" @click="() => router.push('/sitemap')">Hier</BaggerButton>
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
      <BaggerButton @click="() => router.push('/bafkos')">Bafko</BaggerButton>
      <p>Voor elke situatie wel één!</p>
    </div>

  </div>

  </div>


</template>

<style scoped></style>
