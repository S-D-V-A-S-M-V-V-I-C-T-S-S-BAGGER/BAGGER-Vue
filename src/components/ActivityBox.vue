<script setup lang="ts">

import BaggerButton from '@/components/BaggerButton.vue'
import type { Activity } from '@/stores/activityStore'
import { useRouter } from 'vue-router'
import { useActivityStore } from '@/stores/activityStore'

const router = useRouter()
const activityStore = useActivityStore()

const props = defineProps({
  activity: {
    type: Object as () => Activity,
    required: true
  },
  buttons: {
    type: Array as () => { text: string, icon?: string }[],
    required: true
  }
});

const handleActivityClick = () => {
  if (props.activity.id) {
    activityStore.setCurrent(props.activity.id);
    router.push(`/activiteiten/${props.activity.id}`);
  }
}

const getMonthAbbr = (dateString: string | undefined) => {
  if (!dateString) return "Geen datum =("

  const date = new Date(dateString)

  return new Intl.DateTimeFormat('nl-NL', {
    month: 'short'
  }).format(date).toUpperCase()
}

const getDay = (dateString: string | undefined) => {
  if (!dateString) return "Geen datum =("

  const date = new Date(dateString)

  return new Intl.DateTimeFormat('nl-NL', {
    day: 'numeric'
  }).format(date)
}

const getDayOfWeek = (dateString: string | undefined) => {
  if (!dateString) return "Geen datum =("
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('nl-NL', {
    weekday: 'short'
  }).format(date).toUpperCase()

}

</script>

<template>
  <div id="box" class="grid auto-rows-max grid-cols-1 w-full rounded-lg bg-offwhite py-2
                       md:grid-cols-3 md:grid-rows-1 md:auto-cols-max cursor-pointer hover:shadow-2xl transition-shadow duration-200"
       @click="handleActivityClick">

    <div id="info-items" class="rows-start-1 row-span-1 flex flex-row gap-x-5 py-3 px-5
                      md:col-start-1 col-span-1">

      <div id="date" class="flex flex-col px-5 justify-center items-center rounded-lg bg-primary
       border border-secondary">
        <div id="month">
          <h5>{{ getMonthAbbr(activity.date) }}</h5>
        </div>
        <div id="day">
          <h4>{{ getDay(activity.date) }}</h4>
        </div>
        <div id="dayofweek">
          <h5>{{ getDayOfWeek(activity.date)}}</h5>
        </div>
      </div>

      <div id="info"
           class="flex flex-col justify-center items-start max-h-fit">
        <h3 class="font-bold">{{ activity.name }}</h3>
        <p><i class="fa-solid fa-location-dot"></i> {{ activity.location?.name || 'Geen locatie' }}</p>
        <p><i class="fa-regular fa-clock"></i> {{ activity.startTime || 'Geen tijd' }}</p>
      </div>
    </div>

    <div id="participants" class="rows-start-2 row-span-1 flex flex-row flex-wrap gap-x-1 py-3 pl-2
                      md:col-start-2 md:col-span-1 md:items-center">
      <p v-if="activity.participants && activity.participants.length > 0">
        <span v-for="(participant, index) in activity.participants" :key="index">
          {{ participant }}<span v-if="index < activity.participants!.length - 1">, </span>
        </span>
      </p>
      <p v-else class="text-gray-500">Nog geen deelnemers</p>
    </div>

    <div id="buttons" class="rows-start-3 row-span-1 flex flex-col gap-y-1 items-center py-2 w-full
                      md:col-start-3 md:col-span-1 md:items-center">
      <div v-for="(button, index) in buttons" :key="index">
        <BaggerButton :icon="button.icon" customStyling="w-[80vw]">{{ button.text }}</BaggerButton>
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
