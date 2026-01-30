<script setup lang="ts">
  import BaggerButton from '@/components/BaggerButton.vue';
import BaggerInput from '@/components/BaggerInput.vue';
  import { ref, computed } from 'vue';

  // defining the refs for the quote inputs
  const name = ref('');
  const quote = ref('');
  const date = ref('');

  // some dummy data for the quotes, to check the layout. Will be changed to API calls to the spreadsheet in the Drive
  const dummyQuotes = ref([
    {"when": "01/21/2026", "who": "Guido", "what": "Het is tijd voor een Burgeroorlog"},
    {"when": "01/21/2026", "who": "Minke, Conner", "what": "\"De provincie waar Lelystad ligt\", \"Overijssel!\""},
    {"when": "01/21/2026", "who": "Conner, Minke & Rik, Conner", "what": "\"Traject van Enschede naar Deventer en als je dan verder gaat, naast Flevoland\", \"Zwolle?\", \"Ja!\""},
    {"when": "01/21/2026", "who": "Lucas", "what": "De persoon die dit heeft geschreven heeft ontzettende hersenstamkanker.., Sorry dat ging te ver. Hij is dom."},
    {"when": "01/21/2026", "who": "Guusje", "what": "Mijn huisbaas ruikt naar mijn oma!"}
  ]);

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

  <div id="wrapper" class="flex flex-col items-center mx-5 my-5 gap-y-5 text-center">

    <BaggerButton>LOGOUT</BaggerButton>

    <div id="title" class="w-[70vw]">
      <h1>BAGGER ZEGT VULGAIRE DINGEN</h1>
    </div>

    <div id="inputs" class="flex flex-col gap-y-2 ">

      <BaggerInput
        v-model="name"
        type="text"
        placeholder="Naam"
      />
       <BaggerInput
        v-model="quote"
        type="text"
        placeholder="Quote"
      />
       <BaggerInput
        v-model="date"
        type="date"
        :placeholder="new Date().toLocaleDateString()"
      />
      <BaggerButton>Nieuwe quote toevoegen!</BaggerButton>

    </div>

    <div id="subtitle">
      <h2>we kramen een hoop troep uit, zoals:</h2>
    </div>

    <div v-for="(quote, index) in dummyQuotes" :key="index">
      <div id="date_name" class="text-lg">
        {{ formatDate(quote.when) }} -
        {{ quote.who }}
      </div>
      <div id="sentence">
        {{ quote.what }}
      </div>
    </div>

  </div>



</template>

<style scoped>

  #field {
    background-color: var(--color-blue);
    min-width: 70vw;
    padding: 0 1vw;
  }

</style>
