
<script setup lang="ts">
  defineProps({
    modelValue: String,
    label: String
  });

  defineEmits(['update:modelValue']);
  defineOptions({ inheritAttrs: false });

</script>

<template>
  <div>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      v-bind="$attrs"
      class="bagger-input"
      />
  </div>
</template>

<style scoped>
  /* From Uiverse.io by alexruix and edited for this project */

.bagger-input {
 width: 100%;
 height: 100%;
 padding: 0 1vw;
 border: 2px solid transparent;
 border-radius: 8px;
 outline: none;
 background-color: var(--color-blue);
 color: #0d0c22;
 transition: .3s ease;
}

.bagger-input::placeholder {
 color: var(--color-black);
}

.bagger-input:focus, input:hover {
 outline: none;
 border-color: var(--color-secondary);
 background-color: var(--color-primary);
 box-shadow: 0 0 0 4px var(--color-blue);
}

.icon {
 position: absolute;
 left: 1rem;
 fill: #9e9ea7;
 width: 1rem;
 height: 1rem;
}

</style>
