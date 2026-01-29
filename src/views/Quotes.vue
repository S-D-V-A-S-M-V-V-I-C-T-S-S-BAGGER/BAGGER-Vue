<script setup lang="ts">
  import BaggerButton from '@/components/BaggerButton.vue';
  import { ref } from 'vue';

  // defining the refs for the quote inputs
  const name = ref('');
  const quote = ref('');
  const date = ref('');


</script>

<template>

  <div id="wrapper" class="flex flex-col items-center mx-5 my-5 gap-y-5 text-center">

    <BaggerButton>LOGOUT</BaggerButton>

    <div id="title" class="w-[70vw]">
      <h1>BAGGER ZEGT VULGAIRE DINGEN</h1>
    </div>

    <div id="inputs" class="flex flex-col gap-y-2">

      <input id="field" v-model="name" placeholder="Naam" />
      <input id="field" v-model="quote" placeholder="Quote" />
      <input id="field" v-model="date" type="date" :placeholder="new Date().toLocaleDateString()"/>

      <BaggerButton>Nieuwe quote toevoegen!</BaggerButton>

    </div>

    <div id="subtitle">
      <h2>we kramen een hoop troep uit, zoals:</h2>
    </div>

    <div id="quotes">


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
