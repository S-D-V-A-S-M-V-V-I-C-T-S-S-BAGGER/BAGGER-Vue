<script setup lang="ts">

import type { DropDownOption } from '@/views/BafkosView.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  options: {
    type: Array as () => DropDownOption[],
    required: true,
    default: null
  },
  width: {
    type: String,
    required: true,
    default: ''
  }
})


const selected = ref(props.options[0])
const isOpen = ref(false)
const dropDownRef = ref<HTMLElement | null>(null)

function toggleDropDown() {
  const hasMouse = window.matchMedia('(hover: hover)').matches
  if (hasMouse) return
  isOpen.value = !isOpen.value
}

function selectOption(option: DropDownOption) {
  selected.value = option
  isOpen.value = false
  console.log(selected.value)
}

function handleClickOutside(event) {
  if (dropDownRef.value && !dropDownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

</script>

<template>
  <!--  The dropdown button is gotten from: https://uiverse.io/3bdel3ziz-T/gentle-vampirebat-46 -->

  <div id="select"
       ref="dropDownRef"
       :class="[
              width,
              'group relative cursor-pointer text-sm font-medium text-white'
              ]"
  >
    <div id="selected"
         @click="toggleDropDown"
         class="flex items-center justify-between  rounded-md bg-primary px-3 py-2 gap-x-3 transition-colors">
      {{ selected?.label }}

      <i id="arrow" class="pi pi-arrow-right" :class="{ 'active': isOpen }"></i>
    </div>

    <div id="options"
         class="absolute left-0 z-50 mt-1 w-full rounded-md bg-primary p-1 shadow-lg transition-all
            duration-300 invisible opacity-0 translate-y-2
            group-hover:visible group-hover:opacity-100 group-hover:translate-y-0"
         :class="{ 'active': isOpen }"
    >
      <div
        v-for="option in options"
        :key="option.value"
        id="option"
        class="rounded px-3 py-2 transition-colors active:bg-secondary md:hover:bg-secondary"
        :class="{ 'hidden': selected?.value === option.value }"
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

#options {
  visibility: hidden;
  opacity: 0;
  transform: translateY(0.625rem);
}

#arrow.active {
  transform: rotate(90deg);
}

#options.active {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}

@media (hover: hover) {
  .group:hover #arrow {
    transform: rotate(90deg);
  }

  .group:hover #options {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
