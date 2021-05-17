import { ref, computed } from 'vue';

export default function useCount(initValue = 1) {
  let count = ref(initValue);

  const doubleCount = computed(() => count.value * 2);

  const increase = (num = 1) => {
    count.value += num;
  };

  const decrease = (num = 1) => {
    count.value -= num;
  };

  return {
    count,
    doubleCount,
    increase,
    decrease,
  };
}