<script setup lang="ts">
const { closeGameRulesModal, isGameRulesOpen } = defineProps(['closeGameRulesModal', 'isGameRulesOpen']);

const gameRules = [
  'The game consists of 4 players and spans 5 rounds.',
  'In each round, an additional card is dealt to every player.',
  '♣ (Spades) awards 4 points, ♦ (Diamonds) awards 3 points, ♥ (Hearts) awards 2 points, and ♠ (Clubs) awards 1 point.',
  'Players\' scores are calculated by multiplying the value of their cards with the corresponding points for the suits.',
  'The game concludes after 5 rounds, and player scores are tallied. The player with the highest score emerges as the winner.',
];
</script>

<template>
  <div class="fixed bg-black bg-opacity-30 min-h-screen z-10 w-full -translate-y-full duration-500" :class="isGameRulesOpen && 'translate-y-0'">
    <div class="text-right">
      <button 
        class="inline-flex justify-center items-center p-2 h-10 w-10 font-semibold m-4 bg-white rounded-full"
        @click="closeGameRulesModal"
        data-testid="close-modal"
      >
        &times;
      </button>
    </div>
    <div class="flex h-[calc(100vh-100px)] items-center justify-center max-w-xl sm:m-auto">
      <div class="bg-white p-4 m-2 rounded-md sm:p-6">
        <h1 class="font-semibold text-2xl text-center text-slate-900 mb-4">
          Game Rules
        </h1>
        <ul>
          <li  
            class="mb-1 text-xl"
            v-for="(gameRule, index) in gameRules" 
            :key="index"
          >
            <span class="font-semibold mr-1">{{ index + 1 }}-)</span>
            <span>{{ gameRule }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>