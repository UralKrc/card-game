<script setup lang="ts">
import { useStore } from '@/stores';
import { ref } from 'vue';
import GameRules from './GameRules.vue';

const store = useStore();
const isGameRulesOpen = ref(false);

const openGameRulesModal = () => {
  isGameRulesOpen.value = true;
};

const closeGameRulesModal = () => {
  isGameRulesOpen.value = false;
};

const startNewGame = () => store.startNewGame();
</script>

<template>
  <h1 class="text-4xl font-semibold text-slate-900 mb-2 mt-2 text-center">
    Welcome to <br />
    Game of Cards
  </h1>
  <button
    class="shadow bg-purple-700 hover:bg-purple-600 h-10 px-6 mt-5 font-semibold rounded-md border border-slate-200 text-slate-200"
    type="button"
    @click="openGameRulesModal"
  >
    Game Rules
  </button>
  <GameRules :closeGameRulesModal="closeGameRulesModal" :isGameRulesOpen="isGameRulesOpen" />
  <button
    class="shadow bg-green-700 hover:bg-green-600 h-10 px-6 mt-5 font-semibold rounded-md border border-slate-200 text-slate-200"
    type="button"
    @click="startNewGame"
  >
    Begin
  </button>
</template>
