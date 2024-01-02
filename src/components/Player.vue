<script setup lang="ts">
import Card from './Card.vue';
defineProps(['cards', 'currentRound', 'points']);

</script>

<template>
  <div>
    <div class="grid grid-cols-5 gap-1">
      <Card
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        :isActive="currentRound === index + 1"
      />
    </div>
    <div>
      <p class="p-2 font-semibold">Points: {{ points }}</p>
    </div>
  </div>
</template>
