import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface LineItem {
  amount?: number;
  item?: string;
  price?: number;
}

interface Occasion {
  name?: string;
  date?: string;
}

export const useTurfStore = defineStore('turf', () => {
  const lines = ref<LineItem[]>([])
  const currentOccasion = ref<Occasion>({})

  const total = computed(() => {
    return lines.value.reduce((sum, line) => {
      const amount = line.amount || 0
      const price = line.price || 0
      return sum + (amount * price)
    }, 0)
  })

  function updateLine(index: number, line: LineItem) {
    lines.value[index] = line
  }

  function addNewLine() {
    lines.value.push({})
  }

  function setOccasion(occasion: Occasion) {
    currentOccasion.value = occasion
  }

  function reset() {
    lines.value = [{}]
    currentOccasion.value = {}
  }

  return {
    lines,
    currentOccasion,
    total,
    updateLine,
    addNewLine,
    setOccasion,
    reset
  }
})
