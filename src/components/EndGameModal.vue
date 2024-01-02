<script setup lang="ts">
import trophyImg from '@/assets/trophy.svg';
import { useStore } from '@/stores';
import { computed } from 'vue';

const store = useStore();

const winner = computed(() => {
  const maxScore = Math.max(...store.roundScores);
  const winnerIndex = store.roundScores.findIndex((score) => score === maxScore);
  return winnerIndex + 1;
});

const startNewGame = () => store.startNewGame();
const currentRound = computed(() => store.currentRound);
</script>

<template>
  <div
    class="fixed top-0 left-0 z-10 h-screen w-screen duration-500 bg-black bg-opacity-50 flex items-center justify-center"
    :class="currentRound === 5 ? 'translate-y-0' : 'translate-y-full'"
  >
    <div class="bg-white rounded-md shadow p-6 flex flex-col items-center justify-center">
      <div class="w-10 h-10"><img :src="trophyImg" /></div>
      <p class="text-slate-900 text-lg my-2 text-center">
        Congrats <strong>Player {{ winner }}</strong
        >. <br />
        You have won the game.
      </p>
      <p class="text-slate-900 mb-4">Thank you all players for participating!</p>
      <button
        class="shadow bg-green-700 hover:bg-green-600 h-10 px-6 mt-5 font-semibold rounded-md border border-slate-200 text-slate-200 animate-bounce"
        type="button"
        @click="startNewGame"
      >
        Start New Game
      </button>
    </div>
  </div>
</template>
