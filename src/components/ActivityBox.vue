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
  <div id="box" class="grid auto-rows-max grid-cols-1 w-full rounded-xl shadow-xl bg-brown-medium
                      md:grid-cols-3 md:grid-rows-1 md:auto-cols-max">

    <div id="info-items" class="rows-start-1 row-span-1 flex flex-row gap-x-5 py-3 px-5
                      md:col-start-1 col-span-1">

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

    <div id="participants" class="rows-start-2 row-span-1 flex flex-row flex-wrap gap-x-1 py-3 pl-2
                      md:col-start-2 md:col-span-1 md:items-center">
      <p v-for="(participant, index) in participants" :key="index">
        {{ participant.name }}<span v-if="index < participants.length - 1">, </span>
      </p>
    </div>

    <div id="buttons" class="rows-start-3 row-span-1 flex flex-row gap-x-3 gap-y-3 flex-wrap justify-center py-5
                      md:col-start-3 md:col-span-1 md:items-center">
      <div v-for="(button, index) in buttons" :key="index">
        <BaggerButton :icon="button.icon">{{ button.text }}</BaggerButton>
      </div>
    </div>

  </div>
</template>

<style scoped>

 @media (width < 48rem) {
   #info-items, #participants {
     width: 100%;
     border-bottom: var(--color-green-neon-faded) solid 1px;
   }
 }

 @media (width >= 48rem) {
   #info-items, #participants {
     height: 100%;
     border: none;
   }
 }

</style>
