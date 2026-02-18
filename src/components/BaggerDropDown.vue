<script setup lang="ts">

import type { DropDownOption } from '@/views/BafkosView.vue'
import { ref } from 'vue'

const props = defineProps({
  options: {
    type: Array as () => DropDownOption[],
    required: true,
    default: null
  }
})


const selected = ref(props.options[0])

function selectOption(option: DropDownOption) {
  selected.value = option
  console.log(selected.value)
}


</script>

<template>
  <!--  The dropdown button is gotten from: https://uiverse.io/3bdel3ziz-T/gentle-vampirebat-46 -->

  <div id="select" class="group relative w-fit cursor-pointer text-sm font-medium text-white">
    <div id="selected"
         class="flex items-center justify-between  rounded-md bg-primary px-3 py-2 gap-x-3 transition-colors">
      {{ selected?.label }}

      <i id="arrow" class="pi pi-arrow-right"></i>
    </div>

    <div id="options" class="absolute left-0 z-50 mt-1 w-full rounded-md bg-primary p-1 shadow-lg transition-all
                            duration-300 invisible opacity-0 translate-y-2
                            group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
      <div
        v-for="option in options"
        :key="option.value"
        id="option"
        class="rounded px-3 py-2 transition-colors active:bg-secondary md:hover:bg-secondary"
        :class="{ 'active': option.value === selected?.value }"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>

  </div>
</template>

<style scoped>
#arrow {
  height: 100%;
  width: 1rem;
  fill: var(--color-white);
  transition: transform 300ms ease;
}

.group:active #arrow {
  transform: rotate(90deg);
}


</style>
