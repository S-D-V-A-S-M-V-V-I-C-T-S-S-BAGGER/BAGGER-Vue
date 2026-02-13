<script setup lang="ts">

  import { ref } from 'vue'
  import Occasion from '@/views/Occasions.vue'
  import BaggerButton from '@/components/BaggerButton.vue'
  import BaggerInput from '@/components/BaggerInput.vue'
  import OccasionButton from '@/components/OccasionButton.vue'

  interface Occasion {
    name?: string;
    date?: string;
  }

  const occasions = ref<Occasion[]>([]);
  const selected = ref(false);
  const popup = ref(false);

  const name = ref('');
  const date = ref('');

  function addOccasion(name: string, date: string) {
      const occasion = {
        name: name,
        date: date
      }
      occasions.value.push(occasion);
      console.log(occasions.value);
      popup.value = false;
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return "Geen datum =(";

    const date = new Date(dateString);

    const formatted = new Intl.DateTimeFormat('nl-NL', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }

</script>

<template>
  <div id="wrapper" class="flex flex-col items-center mx-5 my-5 gap-y-10">

    <BaggerButton :isPrimary=false customStyling="w-[40vw] md:w-[15vw]">Volgende</BaggerButton>


    <div id="occasions" class="flex flex-col items-center gap-y-5">
      <div id="new-occasion">
        <BaggerButton :isPrimary=false customStyling="w-[40vw] md:w-[20vw]" @click="popup = true">Nieuwe Gelegenheid</BaggerButton>
      </div>

      <div id="title" class="text-center">
        <h1>Selecteer de gelegenheid: </h1>
      </div>

      <div id="list" v-for="(occasion, index) in occasions.values()" :key="index">
        <OccasionButton customStyling="w-[70vw] md:w-[45vw]">
          <p>{{ occasion.name }}</p>
          <p>{{ formatDate(occasion.date) }}</p>
        </OccasionButton>

      </div>
    </div>

  </div>

  <div v-if="popup" id="popup-overlay" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <div id="popup" class="w-[50vw] h-fit p-5 flex flex-col justify-center items-center gap-y-3 rounded-xl
                            md:w-[25vw] md:p-5 md:gap-y-5">
      <p id="question" class="text-wrap text-center">Vul de naam in van de gelegendheid:</p>
      <BaggerInput v-model="name" type="text" value="" />

      <p id="date-question" class="text-wrap text-center">Op welke datum?</p>
      <BaggerInput v-model="date" type="date" :placeholder="new Date().toLocaleDateString()" />

      <div id="popup-buttons" class="flex flex-row justify-evenly w-[100%]">
        <BaggerButton :isPrimary=false customStyling="w-[15vw] md:w-[8vw]" @click="popup = false">Annuleer</BaggerButton>
        <BaggerButton :isPrimary=false customStyling="w-[15vw] md:w-[8vw]" @click="addOccasion(name, date)">Maak aan!</BaggerButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #popup {
    background: var(--color-brown-medium);
  }
</style>
