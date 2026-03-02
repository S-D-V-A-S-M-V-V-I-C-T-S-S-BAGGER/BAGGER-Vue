<script setup lang="ts">
  import { ref, watch} from 'vue'
  import BaggerButton from '@/components/BaggerButton.vue'
  import BaggerInput from '@/components/BaggerInput.vue'

  const emit = defineEmits(['turf-line']);
  const props = defineProps<{ index: number}>();

  const amount = ref(0);
  const item = ref("");
  const price = ref(0);

  watch([amount, item, price], () => {
    emit('turf-line', {
      index: props.index,
      amount: amount.value,
      item: item.value,
      price: price.value
    })
  })

  function increase() {
    amount.value++;
  }

  function decrease() {
    if (amount.value > 0) amount.value--;
  }
</script>

<template>
  <div id="line" class="grid grid-rows-1 grid-cols-2 gap-2 px-1
                        md:grid-cols-[15vw_25vw]">

    <div id="counter" class="row-start-1 col-start-1 col-span-1
     grid grid-rows-1 grid-cols-3 gap-x-2 md:grid-cols-[4vw_6vw_4vw]">

      <div id="minus" class="row-start-1 col-start-1 col-span-1">
        <BaggerButton :isPrimary=false customStyling="w-[100%] h-[100%]" @click="decrease"><i class="pi pi-minus"></i></BaggerButton>
      </div>

      <div id="amount" class="row-start-1 row-span-1 col-start-2 col-span-1 h-full">
        <BaggerInput
          v-model="amount"
          type="number"
          value=""
          customStyling="w-[100%] h-[100%]"
        />
      </div>

      <div id="plus" class="row-start-1 row-span-1 col-start-3 col-span-1">
        <BaggerButton :isPrimary=false customStyling="w-[100%] h-[100%]" @click="increase"><i class="pi pi-plus"></i></BaggerButton>
      </div>

    </div>

    <div id="name-and-price" class="row-start-1
    grid grid-rows-2 grid-cols-1 gap-y-2
      md:grid-rows-1 md:grid-cols-2 md:gap-x-2 ">

      <div id="item" class="row-start-1 row-span-1 md:col-start-1 md:col-span-1">
        <BaggerInput
          v-model="item"
          type="text"
          placeholder="Drankje..."
          customStyling="w-[100%] h-[100%]"
        />
      </div>

      <div id="price" class="row-start-2 row-span-1 md:row-start-1 md:col-start-2 md:col-span-1">
        <BaggerInput
          v-model="price"
          type="number"
          min="0"
          placeholder="price"
          step=".01"
          customStyling="w-[100%] h-[100%]"
        />
      </div>


    </div>


  </div>

</template>

<style scoped>

</style>
