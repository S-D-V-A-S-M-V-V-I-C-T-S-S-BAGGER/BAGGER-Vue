<script setup lang="ts">
import BaggerLogo from '@/components/icons/BaggerLogo.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToMenu() {
  router.push('/sitemap')
}
</script>

<template>
  <BaggerLogo @buttonPressed="goToMenu" />
</template>

<style scoped></style>
