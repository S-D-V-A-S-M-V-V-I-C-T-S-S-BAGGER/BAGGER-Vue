<script setup lang="ts">

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: '',
    validator: (value) => ['text', 'number'].includes(value)
  },
  placeholder: {
    type: String,
    default: ''
  },
  customStyling: {
    type: String,
    required: false,
    default: ''
  },
  icon: {
    type: String,
    required: false,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const inputHandler = (event) => {
  const raw = event.target.value
  if (props.type == 'number') {
    const num = raw == '' ? '' : parseFloat(raw)
    emit('update:modelValue', num)
  } else {
    emit('update:modelValue', raw)
  }
}

</script>

<template>
  <div class="relative flex items-center">
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :class="[
        customStyling,
        icon ? 'placeholder:pl-5' : ''
      ]"
      @input="inputHandler"
      id="bagger-input"
    />
    <i v-if="icon" :class="icon + ' absolute left-1 text-brown-medium pointer-events-none'"></i>
  </div>
</template>

<style scoped>
/* From Uiverse.io by alexruix and edited for this project */

div {
  height: 100%
}

#bagger-input {
  padding: 0 1vw;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: var(--color-blue);
  color: #0d0c22;
  transition: 0.3s ease;
}

#bagger-input::placeholder {
  color: var(--color-brown-medium);
}

#bagger-input:focus, input:hover {
  outline: none;
  border-color: var(--color-secondary);
  background-color: var(--color-primary);
  box-shadow: 0 0 0 4px var(--color-blue);
}

/* Chrome, Safari, Edge, Opera */
#bagger-input::-webkit-inner-spin-button,
#bagger-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
