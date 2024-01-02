<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useStore } from '../stores/index';
import Player from '@/components/Player.vue';
import EndGameModal from '@/components/EndGameModal.vue';
import Home from '@/components/Home.vue';

export type PlayerTypes = {
  suit: string;
  value: string;
  isHidden: boolean;
}[];

const store = useStore();
const players = ref<PlayerTypes[]>(store.players);

watch(
  () => store.players,
  (newPlayers) => {
    players.value = newPlayers;
  },
  { immediate: true},
);

const dealNextRound = () => store.dealNextRound();

const gameStatus = computed(() => store.gameStatus);
const currentRound = computed(() => store.currentRound);
</script>

<template>
  <div class="min-h-screen overflow-x-hidden">
    <div
      v-if="!gameStatus && currentRound !== 5"
      class="h-screen flex flex-col items-center justify-center px-3"
    >
    <Home />
    </div>
    <div v-else class="relative">
      <h3 class="text-2xl font-semibold text-slate-900 mb-2 text-center mt-6">
        {{ currentRound < 5 ? 'Game has started, enjoy!' : 'Game has ended, come back again!' }}
      </h3>
      <div v-if="currentRound < 5" class="flex items-center justify-center">
        <p class="mr-5 text-slate-900 font-semilbold text-lg">Current Round: {{ currentRound }}</p>
        <button
          class="shadow bg-purple-700 hover:bg-purple-600 h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-200"
          type="button"
          @click="dealNextRound"
        >
          Deal Next Round
        </button>
      </div>
      <div class="lg:grid grid-cols-2 grid-rows-2 gap-4 max-w-[1200px] m-auto">
        <div class="my-4 bg-gray-300 px-1 py-3" v-for="(cards, index) in players" :key="index">
          <p class="font-semibold pl-2 mb-1 text-xl">Player {{ index + 1 }}</p>
          <Player
            :cards="cards"
            :currentRound="currentRound"
            :points="store.roundScores[index]"
          />
        </div>
      </div>
      <EndGameModal />
    </div>
  </div>
</template>
