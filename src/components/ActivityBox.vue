<script setup lang="ts">

import BaggerButton from '@/components/BaggerButton.vue'
import type { Activity } from '@/views/ActivitiesView.vue'

defineProps({
  activity: {
    type: Object as () => Activity,
    required: true
  },
  participants: {
    type: Array as () => { name: string }[],
    required: true
  },
  buttons: {
    type: Array as () => { text: string, icon?: string }[],
    required: true
  }
});

const getMonthAbbr = (dateString: string | undefined) => {
  if (!dateString) return "Geen datum =("

  const date = new Date(dateString)

  const formatted = new Intl.DateTimeFormat('nl-NL', {
    month: 'short'
  }).format(date)

  return formatted.toUpperCase()
}

const getDay = (dateString: string | undefined) => {
  if (!dateString) return "Geen datum =("

  const date = new Date(dateString)

  return new Intl.DateTimeFormat('nl-NL', {
    day: 'numeric'
  }).format(date)
}


</script>

<template>
  <div id="box" class="flex flex-col w-full rounded-xl shadow-xl bg-brown-medium">

    <div id="info-items" class="flex flex-row gap-x-5 py-3 px-5 bottomBorder">

      <div id="date" class="flex flex-col px-5 justify-center items-center border border-brown-dark
                            rounded-xl shadow-xl/10 inset-shadow-sm bg-brown-dark">
        <div id="month">
          <h5>{{ getMonthAbbr(activity.date) }}</h5>
        </div>
        <div id="day">
          <h4>{{ getDay(activity.date) }}</h4>
        </div>
      </div>

      <div id="info"
           class="flex flex-col justify-center items-start max-h-fit">
        <h3 class="font-bold">{{ activity.name }}</h3>
        <p><i class="pi pi-map-marker"></i> {{ activity.location }}</p>
        <p><i class="pi pi-clock"></i> {{ activity.time }}</p>
      </div>
    </div>

    <div id="participants" class="flex flex-row flex-wrap gap-x-1 py-3 max-h-fit pl-2 bottomBorder">
      <p v-for="(participant, index) in participants" :key="index">
        {{ participant.name }}<span v-if="index < participants.length - 1">, </span>
      </p>
    </div>

    <div id="buttons" class="flex flex-row gap-x-3 pl-2 flex-wrap py-5">
      <div v-for="(button, index) in buttons" :key="index">
        <BaggerButton :icon="button.icon">{{ button.text }}</BaggerButton>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
