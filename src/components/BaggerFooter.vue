<script setup lang="ts">

import BaggerButton from '@/components/BaggerButton.vue'
</script>

<template>
  <div id="footer-wrapper" class="flex flex-row w-[80vw] max-h-fit items-center justify-evenly pt-5 border-t-1 border-primary">
    <BaggerButton>
      <router-link :to="{ name: 'home'}"><i class="pi pi-home"></i></router-link>
    </BaggerButton>
    <BaggerButton>
      <router-link :to="{ name: 'sitemap'}"><i class="pi pi-bars"></i></router-link>
    </BaggerButton>
    <BaggerButton>LOGOUT</BaggerButton>
  </div>
</template>

<style scoped>

</style>
