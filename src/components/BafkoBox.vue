<script setup lang="ts">

</script>

<template>
  <div id="box_wrapper" class="w-[100%] h-[15vh] flex flex-col p-5 bg-secondary border-primary rounded-xl gap-y-5">

    <div id="title" class="w-[100%] flex flex-row justify-between item-center">
      <h2 class="text-shadow-md font-bold"><slot name="bafko"></slot></h2>
      <p class="border py-1 px-3 w-fit rounded-xl text-shadow-lg font-bold"><slot name="type"></slot></p>
    </div>

    <div id="description">
      <p class="text-wrap font-semibold text-shadow-md"><slot name="description"></slot></p>
    </div>
  </div>
</template>

<style scoped>

</style>
