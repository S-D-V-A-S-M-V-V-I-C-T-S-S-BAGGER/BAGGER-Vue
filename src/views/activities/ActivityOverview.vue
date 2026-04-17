<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useActivityStore} from '@/stores/activityStore.ts'
  import { watch } from 'vue'

  const route = useRoute()
  const activityStore = useActivityStore()

  let activity = activityStore.activities.find(a => a.id === route.params.id)

  watch(() => route.params.id, (newId) => {
    activity = activityStore.activities.find(a => a.id === newId)
  })


</script>

<template>
  <p>the Current activity </p><br>
  <p>{{ activity }}</p>
</template>

<style scoped>

</style>
