<script setup lang="ts">

import BaggerButton from '@/components/BaggerButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div id="footer-wrapper" class="flex flex-row w-[80vw] max-h-fit items-center justify-evenly pt-5 border-t-1 border-primary">
    <BaggerButton @click="() => router.push('/')">
      <i class="pi pi-home"></i>
    </BaggerButton>
    <BaggerButton @click="() => router.push('/sitemap')">
      <i class="pi pi-bars"></i>
    </BaggerButton>
    <BaggerButton >LOGOUT</BaggerButton>
  </div>
</template>

<style scoped>

</style>
