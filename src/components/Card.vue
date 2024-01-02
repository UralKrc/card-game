<script setup lang="ts">
import { HIDDEN_CARD_SYMBOLS } from '@/constants';
import { computed } from 'vue';

const props  = defineProps(['card', 'isActive']);

const suitSymbol = computed(() => {
  switch (props.card.suit) {
    case 'clubs':
      return '♠';
    case 'hearts':
      return '♥';
    case 'diamonds':
      return '♦';
    case 'spades':
      return '♣';
    default:
      return '';
  }
});

const pipClassByValue = computed(() => {
  // tailwind grid classes to place each pip to correct places depending on their values
  switch (props.card.value) {
    case 'A':
    case 'K':
    case 'Q':
    case 'J':
      return 'col-start-1 overflow-hidden col-end-6 row-start-1 row-end-6 text-2xl justify-items-center flex justify-center items-center h-[60%] w-[60%] border border-slate-900 m-auto '
      + 'sm:w-[75%] sm:h-[75%] md:w-[65%] md:h-[65%]' 
    case '2':
      return 'first:col-start-3 first:col-end-3 first:row-start-1 first:row-end-1 last:col-start-3 last:col-end-3 last:row-start-5 last:row-end-5 last:rotate-180';
    case '3':
      return '[&:nth-child(1)]:col-start-3 [&:nth-child(1)]:col-end-3 [&:nth-child(1)]:row-start-1 [&:nth-child(1)]:row-end-1 ' 
      + '[&:nth-child(2)]:col-start-3 [&:nth-child(2)]:col-end-3 [&:nth-child(2)]:row-start-3 [&:nth-child(2)]:row-end-3 '
      + '[&:nth-child(3)]:col-start-3 [&:nth-child(3)]:col-end-3 [&:nth-child(3)]:row-start-5 [&:nth-child(3)]:row-end-5 [&:nth-child(3)]:rotate-180';
    case '4':
      return '[&:nth-child(1)]:col-start-2 [&:nth-child(1)]:col-end-2 [&:nth-child(1)]:row-start-1 [&:nth-child(1)]:row-end-1 ' 
      + '[&:nth-child(2)]:col-start-4 [&:nth-child(2)]:col-end-4 [&:nth-child(2)]:row-start-1 [&:nth-child(2)]:row-end-1 '
      + '[&:nth-child(3)]:col-start-2 [&:nth-child(3)]:col-end-2 [&:nth-child(3)]:row-start-5 [&:nth-child(3)]:row-end-5 [&:nth-child(3)]:rotate-180 '
      + '[&:nth-child(4)]:col-start-4 [&:nth-child(4)]:col-end-4 [&:nth-child(4)]:row-start-5 [&:nth-child(4)]:row-end-5 [&:nth-child(4)]:rotate-180';
    case '5':
      return '[&:nth-child(1)]:col-start-2 [&:nth-child(1)]:col-end-2 [&:nth-child(1)]:row-start-1 [&:nth-child(1)]:row-end-1 ' 
      + '[&:nth-child(2)]:col-start-4 [&:nth-child(2)]:col-end-4 [&:nth-child(2)]:row-start-1 [&:nth-child(2)]:row-end-1 '
      + '[&:nth-child(3)]:col-start-2 [&:nth-child(3)]:col-end-2 [&:nth-child(3)]:row-start-5 [&:nth-child(3)]:row-end-5 [&:nth-child(3)]:rotate-180 '
      + '[&:nth-child(4)]:col-start-4 [&:nth-child(4)]:col-end-4 [&:nth-child(4)]:row-start-5 [&:nth-child(4)]:row-end-5 [&:nth-child(4)]:rotate-180 '
      + '[&:nth-child(5)]:col-start-3 [&:nth-child(5)]:col-end-3 [&:nth-child(5)]:row-start-3 [&:nth-child(5)]:row-end-3';
    case '6':
      return '[&:nth-child(1)]:col-start-2 [&:nth-child(1)]:col-end-2 [&:nth-child(1)]:row-start-1 [&:nth-child(1)]:row-end-1 ' 
      + '[&:nth-child(2)]:col-start-4 [&:nth-child(2)]:col-end-4 [&:nth-child(2)]:row-start-1 [&:nth-child(2)]:row-end-1 '
      + '[&:nth-child(3)]:col-start-2 [&:nth-child(3)]:col-end-2 [&:nth-child(3)]:row-start-3 [&:nth-child(3)]:row-end-3 '
      + '[&:nth-child(4)]:col-start-4 [&:nth-child(4)]:col-end-4 [&:nth-child(4)]:row-start-3 [&:nth-child(4)]:row-end-3 '
      + '[&:nth-child(5)]:col-start-2 [&:nth-child(5)]:col-end-2 [&:nth-child(5)]:row-start-5 [&:nth-child(5)]:row-end-5 [&:nth-child(5)]:rotate-180 '
      + '[&:nth-child(6)]:col-start-4 [&:nth-child(6)]:col-end-4 [&:nth-child(6)]:row-start-5 [&:nth-child(6)]:row-end-5 [&:nth-child(6)]:rotate-180';
    case '7':
      return '[&:nth-child(1)]:col-start-2 [&:nth-child(1)]:col-end-2 [&:nth-child(1)]:row-start-1 [&:nth-child(1)]:row-end-1 ' 
      + '[&:nth-child(2)]:col-start-4 [&:nth-child(2)]:col-end-4 [&:nth-child(2)]:row-start-1 [&:nth-child(2)]:row-end-1 '
      + '[&:nth-child(3)]:col-start-2 [&:nth-child(3)]:col-end-2 [&:nth-child(3)]:row-start-3 [&:nth-child(3)]:row-end-3 '
      + '[&:nth-child(4)]:col-start-4 [&:nth-child(4)]:col-end-4 [&:nth-child(4)]:row-start-3 [&:nth-child(4)]:row-end-3 '
      + '[&:nth-child(5)]:col-start-2 [&:nth-child(5)]:col-end-2 [&:nth-child(5)]:row-start-5 [&:nth-child(5)]:row-end-5 [&:nth-child(5)]:rotate-180 '
      + '[&:nth-child(6)]:col-start-4 [&:nth-child(6)]:col-end-4 [&:nth-child(6)]:row-start-5 [&:nth-child(6)]:row-end-5 [&:nth-child(6)]:rotate-180 '
      + '[&:nth-child(7)]:col-start-3 [&:nth-child(7)]:col-end-3 [&:nth-child(7)]:row-start-4 [&:nth-child(7)]:row-end-4 [&:nth-child(7)]:rotate-180';
    case '8':
      return '[&:nth-child(1)]:col-start-2 [&:nth-child(1)]:col-end-2 [&:nth-child(1)]:row-start-1 [&:nth-child(1)]:row-end-1 ' 
      + '[&:nth-child(2)]:col-start-4 [&:nth-child(2)]:col-end-4 [&:nth-child(2)]:row-start-1 [&:nth-child(2)]:row-end-1 '
      + '[&:nth-child(3)]:col-start-2 [&:nth-child(3)]:col-end-2 [&:nth-child(3)]:row-start-3 [&:nth-child(3)]:row-end-3 '
      + '[&:nth-child(4)]:col-start-4 [&:nth-child(4)]:col-end-4 [&:nth-child(4)]:row-start-3 [&:nth-child(4)]:row-end-3 '
      + '[&:nth-child(5)]:col-start-2 [&:nth-child(5)]:col-end-2 [&:nth-child(5)]:row-start-5 [&:nth-child(5)]:row-end-5 [&:nth-child(5)]:rotate-180 '
      + '[&:nth-child(6)]:col-start-4 [&:nth-child(6)]:col-end-4 [&:nth-child(6)]:row-start-5 [&:nth-child(6)]:row-end-5 [&:nth-child(6)]:rotate-180 '
      + '[&:nth-child(7)]:col-start-3 [&:nth-child(7)]:col-end-3 [&:nth-child(7)]:row-start-4 [&:nth-child(7)]:row-end-4 [&:nth-child(7)]:rotate-180 '
      + '[&:nth-child(8)]:col-start-3 [&:nth-child(8)]:col-end-3 [&:nth-child(8)]:row-start-2 [&:nth-child(8)]:row-end-2 [&:nth-child(8)]:rotate-180';
    case '9':
      return '[&:nth-child(1)]:col-start-2 [&:nth-child(1)]:col-end-2 [&:nth-child(1)]:row-start-1 [&:nth-child(1)]:row-end-1 ' 
      + '[&:nth-child(2)]:col-start-4 [&:nth-child(2)]:col-end-4 [&:nth-child(2)]:row-start-1 [&:nth-child(2)]:row-end-1 '
      + '[&:nth-child(3)]:col-start-2 [&:nth-child(3)]:col-end-2 [&:nth-child(3)]:row-start-2 [&:nth-child(3)]:row-end-2 [&:nth-child(3)]:mt-2 '
      + '[&:nth-child(4)]:col-start-4 [&:nth-child(4)]:col-end-4 [&:nth-child(4)]:row-start-2 [&:nth-child(4)]:row-end-2 [&:nth-child(4)]:mt-2 '
      + '[&:nth-child(5)]:col-start-2 [&:nth-child(5)]:col-end-2 [&:nth-child(5)]:row-start-4 [&:nth-child(5)]:row-end-4 [&:nth-child(5)]:mb-2 [&:nth-child(5)]:rotate-180 '
      + '[&:nth-child(6)]:col-start-4 [&:nth-child(6)]:col-end-4 [&:nth-child(6)]:row-start-4 [&:nth-child(6)]:row-end-4 [&:nth-child(6)]:mb-2 [&:nth-child(6)]:rotate-180 '
      + '[&:nth-child(7)]:col-start-2 [&:nth-child(7)]:col-end-2 [&:nth-child(7)]:row-start-5 [&:nth-child(7)]:row-end-5 [&:nth-child(7)]:rotate-180 '
      + '[&:nth-child(8)]:col-start-4 [&:nth-child(8)]:col-end-4 [&:nth-child(8)]:row-start-5 [&:nth-child(8)]:row-end-5 [&:nth-child(8)]:rotate-180 '
      + '[&:nth-child(9)]:col-start-3 [&:nth-child(9)]:col-end-3 [&:nth-child(9)]:row-start-3 [&:nth-child(9)]:row-end-3 [&:nth-child(9)]:rotate-180';
    case '10':
      return '[&:nth-child(1)]:ml-1 md:[&:nth-child(1)]:ml-0 [&:nth-child(1)]:col-start-2 [&:nth-child(1)]:col-end-2 [&:nth-child(1)]:row-start-1 [&:nth-child(1)]:row-end-1 ' 
      + '[&:nth-child(2)]:mr-1 md:[&:nth-child(2)]:mr-0 [&:nth-child(2)]:col-start-4 [&:nth-child(2)]:col-end-4 [&:nth-child(2)]:row-start-1 [&:nth-child(2)]:row-end-1 '
      + '[&:nth-child(3)]:ml-1 md:[&:nth-child(3)]:ml-0 [&:nth-child(3)]:col-start-2 [&:nth-child(3)]:col-end-2 [&:nth-child(3)]:row-start-2 [&:nth-child(3)]:row-end-2 '
      + '[&:nth-child(4)]:mr-1 md:[&:nth-child(4)]:mr-0 [&:nth-child(4)]:col-start-4 [&:nth-child(4)]:col-end-4 [&:nth-child(4)]:row-start-2 [&:nth-child(4)]:row-end-2 '
      + '[&:nth-child(5)]:ml-1 md:[&:nth-child(5)]:ml-0 [&:nth-child(5)]:col-start-2 [&:nth-child(5)]:col-end-2 [&:nth-child(5)]:row-start-4 [&:nth-child(5)]:row-end-4 [&:nth-child(5)]:rotate-180 '
      + '[&:nth-child(6)]:mr-1 md:[&:nth-child(6)]:mr-0 [&:nth-child(6)]:col-start-4 [&:nth-child(6)]:col-end-4 [&:nth-child(6)]:row-start-4 [&:nth-child(6)]:row-end-4 [&:nth-child(6)]:rotate-180 '
      + '[&:nth-child(7)]:ml-1 md:[&:nth-child(7)]:ml-0 [&:nth-child(7)]:col-start-2 [&:nth-child(7)]:col-end-2 [&:nth-child(7)]:row-start-5 [&:nth-child(7)]:row-end-5 [&:nth-child(7)]:rotate-180 '
      + '[&:nth-child(8)]:mr-1 md:[&:nth-child(8)]:mr-0 [&:nth-child(8)]:col-start-4 [&:nth-child(8)]:col-end-4 [&:nth-child(8)]:row-start-5 [&:nth-child(8)]:row-end-5 [&:nth-child(8)]:rotate-180 '
      + '[&:nth-child(9)]:col-start-3 [&:nth-child(9)]:col-end-3 [&:nth-child(9)]:row-start-2 [&:nth-child(9)]:row-end-2 [&:nth-child(9)]:mt-4 sm:[&:nth-child(9)]:mt-5 '
      + '[&:nth-child(10)]:col-start-3 [&:nth-child(10)]:col-end-3 [&:nth-child(10)]:row-start-4 [&:nth-child(10)]:row-end-4 [&:nth-child(10)]:mb-4 sm:[&:nth-child(10)]:mb-5 [&:nth-child(10)]:rotate-180';
    default:
      return '';
  }
});

const pipTotalByValue = computed(() => {
  if (['J', 'Q', 'K', 'A'].includes(props.card.value)) {
    return 1;
  } else {
    return parseInt(props.card.value);
  }
});

</script>

<template>
  <div 
    class="relative h-[100px] sm:h-[150px] md:h-[200px] lg:h-[150px] overflow-hidden" 
  >
    <div 
      v-if="card.isHidden" 
      class="bg-white shadow-md flex items-center border-2 border-blue-500 rounded-md absolute top-0 left-0 z-10 w-full h-full p-3 sm:p-4 md:p-6 lg:p-5"
    >
      <div 
        class="border border-slate-900 grid grid-cols-4 grid-rows-4 items-center text-center h-full w-full text-sm sm:text-xl md:text-2xl lg:text-xl"
      >
        <div v-for="(symbol, index) in HIDDEN_CARD_SYMBOLS" :key="index">
          {{ symbol }}
        </div>
      </div>
    </div>
    <div v-else 
        class="bg-white shadow-md h-full w-full rounded-md" 
        :class="isActive ? 'border-green-600 border-2' : 'border-slate-200 border'">
      <div class="flex flex-col items-center absolute left-1 top-1 md:left-2 md:top-2">
        <div class="text-sm" :class="(suitSymbol === '♥' || suitSymbol === '♦') && 'text-red-600'">
          {{ card.value }}
        </div>
        <div class="text-xs -mt-1" 
             :class="(suitSymbol === '♥' || suitSymbol === '♦') && 'text-red-600'"
             v-html="suitSymbol" 
        />
      </div>
      <div class="flex flex-col-reverse items-center absolute right-1 bottom-1 md:right-2">
        <div class="rotate-180 text-sm" :class="(suitSymbol === '♦' || suitSymbol === '♥') && 'text-red-600'">
          {{ card.value }}
        </div>
        <div class="text-xs -mb-1" 
             :class="(suitSymbol === '♥' || suitSymbol === '♦') && 'text-red-600'" 
             v-html="suitSymbol" 
        />
      </div>
      <div class="grid grid-rows-5 grid-cols-5 w-full h-full justify-center items-center py-2 text-xs md:text-3xl lg:text-xl">
        <div v-for="n in pipTotalByValue" :key="n" 
             class="text-center"
             :class="{'text-red-600': (suitSymbol === '♥' || suitSymbol === '♦'), [pipClassByValue]: true}"
        >
          <span 
            v-if="(card.value === 'J' || card.value === 'Q' || card.value === 'K' || card.value === 'A')"
            class="relative h-full w-full flex items-center justify-center bg-gray-100 sm:text-4xl"
            :class="(suitSymbol === '♥' || suitSymbol === '♦') && 'text-red-600'" 
          >
            <span class="absolute -top-10 left-0 rotate-45 bg-gray-500 border border-slate-900 w-4 h-full" />
            <span class="absolute -top-10 right-0 -rotate-45 bg-gray-500 border border-slate-900 w-4 h-full" />
            <span class="absolute top-10 left-0 -rotate-45 bg-gray-500 border border-slate-900 w-4 h-full" />
            <span class="absolute top-10 right-0 rotate-45 bg-gray-500 border border-slate-900 w-4 h-full" />
            {{ card.value }}
          </span>
          <span v-else>
            {{  suitSymbol }}
          </span>
        </div>         
      </div>
    </div>
  </div>
</template>