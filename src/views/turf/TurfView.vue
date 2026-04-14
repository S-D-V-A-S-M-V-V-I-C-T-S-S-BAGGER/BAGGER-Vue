<script setup lang="ts">
import { onMounted, ref } from 'vue'

import BaggerButton from '@/components/BaggerButton.vue'
import TurfLine from '@/components/TurfLine.vue'
import BaggerFooter from '@/components/BaggerFooter.vue'
import { useTurfStore } from '@/stores/turfStore.ts'
import { useRouter } from 'vue-router'


const turfStore = useTurfStore()
const router = useRouter();

const resets = ref(0)
const popup = ref(false)
const login = true

const currentLines = ref(turfStore.lines)

function addLine() {
  turfStore.addNewLine();
}

// const login = false;

function totalUpdate(update: { index: number, amount: number, item: string, price: number }) {
  turfStore.updateLine(update.index, {
    amount: update.amount,
    item: update.item,
    price: update.price
  })
}

function resetTurf() {
  turfStore.reset()
  resets.value++
}

function submit() {
  popup.value = false
  router.push('/gelegenheid');
}

// checking the current state of the store on mount
// if the lines length is more than 0, then display the current lines in the input fields
onMounted(() => {
  // TODO: 20260227 - Implement the display of the current lines in the input fields
  if (currentLines.value.length > 0) {
    console.log("Need to display at the turf lines: ", currentLines.value)
  } else {
    console.log("No lines to display at the turf lines")
  }
})

</script>

<template>

  <!-- Flex -->
  <div id="wrapper" class="flex flex-col items-center mx-5 mt-10 gap-y-5 md:gap-y-8">

    <!-- Flex -->
    <div id="total" class="flex flex-col gap-y-1">
      <BaggerButton icon="pi pi-sync" :isPrimary=false customStyling="w-[40vw] md:w-[15vw]" @click="resetTurf">Reset
      </BaggerButton>
      <div id="total" class="bg-secondary text-white border-secondary border rounded-xl px-2 py-1 w-[40vw] text-center
                               md:w-[15vw] md:px-5 md:py-1">Totaal: € {{ turfStore.total }}
      </div>
    </div>

    <!-- Grid 2 rows 2 cols -->
    <div id="titles" class="grid grid-rows-1 grid-cols-2 gap-x-5 w-[80vw] justify-items-center items-center
                               md:w-[40vw] md:grid-cols-[15vw_25vw]">
      <h1 class="">Hoeveel</h1>
      <div id="sub-headers" class="md:grid md:grid-rows-1 md:grid-cols-2 md:w-[100%]">
        <h2 class="md:row-start-1 md:col-start-1 md:col-span-1">Wat</h2>
        <h2 class="md:row-start-1 md:col-start-2 md:col-span-1">Prijs</h2>
      </div>
    </div>

    <div id="lines-wrapper" class="w-[80vw] h-[60vh] flex flex-col items-center gap-y-5 overflow-y-auto
                                    md:w-[45vw] md:h-[50vh]">

      <div id="turf-lines" class="w-full flex flex-col gap-y-5 mt-1">
        <TurfLine v-for="(line, i) in turfStore.lines" :key="`${resets}-${i}`" :index="i"
                  :startAmount="line.amount"
                  :startItem="line.item"
                  :startPrice="line.price"
                  @turf-line="totalUpdate"
        />
      </div>

      <div id="plus-turf-line">
        <BaggerButton :isPrimary=false customStyling="w-[40vw] md:w-[15vw]" @click="addLine"><i class="pi pi-plus"></i>
        </BaggerButton>
      </div>

      <div v-if="login" id="submit">
        <BaggerButton :isPrimary=false customStyling="w-[40vw] md:w-[15vw]" @click="popup = true">
          Klaar!
        </BaggerButton>
      </div>

      <div v-else id="login">
        <BaggerButton :isPrimary=false customStyling="w-[40vw] md:w-[15vw]">Login</BaggerButton>
      </div>
    </div>


  </div>

  <div id="footer" class="flex flex-col items-center w-full fixed bottom-0 pb-[5vh]">
    <BaggerFooter />
  </div>

  <!--  The popup is place outside of the wrapper container-->
  <div v-if="popup" id="popup-overlay"
       class="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <div id="popup" class="w-[50vw] h-fit p-5 flex flex-col justify-center items-center gap-y-3 rounded-xl
                            md:w-[25vw] md:p-5 md:gap-y-5">
      <p id="question" class="text-wrap text-center">Weet je zeker dat je dit op wilt sturen?</p>
      <div id="popup-buttons" class="flex flex-row justify-evenly w-[100%]">
        <BaggerButton :isPrimary=false customStyling="w-[15vw] md:w-[8vw]" @click="popup = false">
          Nee
        </BaggerButton>
        <BaggerButton :isPrimary=false customStyling="w-[15vw] md:w-[8vw]" @click="submit">Ja
        </BaggerButton>
      </div>
    </div>
  </div>


</template>

<style scoped>
#popup {
  background: var(--color-brown-medium);
}
</style>
