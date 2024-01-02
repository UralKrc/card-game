import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useStore, type Store, type Card } from '../index';
import UNSORTED_DATA from './unSortedData';
import SORTED_DATA from './sortedData';
import { createApp } from 'vue';
import { createPinia, setActivePinia } from 'pinia';
import App from '@/App.vue';

describe('Store', () => {
  let store: Store;

  beforeEach(() => {
    const pinia = createPinia();
    const app = createApp(App);
    app.use(pinia);
    setActivePinia(pinia);
    store = useStore();
  })

  it('starts a new game and checks if functions called properly', async () => {
    const createDeckSpy = vi.spyOn(store, 'createDeck');
    const sortPlayerHandSpy = vi.spyOn(store, 'sortPlayerHand');
    const updateScoresSpy = vi.spyOn(store, 'updateScores');
    const dealCardsSpy = vi.spyOn(store, 'dealCards');
  
    // Start a new game
    store.startNewGame();
  
    expect(createDeckSpy).toHaveBeenCalled();
    expect(sortPlayerHandSpy).toBeCalledTimes(4);
    expect(dealCardsSpy).toBeCalledTimes(4);
  
    expect(store.gameStatus).toBe(true);
    expect(store.currentRound).toBe(1);
  
    expect(updateScoresSpy).toHaveBeenCalled();
  });
  
  it('shuffles the cards and creates a new deck with hidden cards', () => {
    const deck = store.createDeck();

    expect(deck.length).toBe(52);
    expect(deck.every((card) => card.isHidden)).toBe(true);
  });

  it('sorts player hand', () => { 
    const players: Card[] = UNSORTED_DATA.flat(); 
    players.forEach((card) => card.isHidden = true);

    const sortedPlayers = store.sortPlayerHand(players);

    expect(sortedPlayers).toEqual(SORTED_DATA);
  });

  it('deals the next round and updates scores correctly', () => {
    const updateScoresSpy = vi.spyOn(store, 'updateScores');

    store.currentRound = 1;
    store.players = UNSORTED_DATA;
    store.dealNextRound();
    
    const newData = UNSORTED_DATA;
    
    newData.forEach((player) => player[1].isHidden = false);

    expect(store.currentRound).toBe(2);
    expect(updateScoresSpy).toHaveBeenCalled();
    expect(store.players).toEqual(newData);
    
  });

  it('checks if the game status is updated correctly when reaching the last round', () => {
    store.currentRound = 5;
    
    expect(store.gameStatus).toBe(false);
  });

  it('updates score and calculates ', () => {
    const store = useStore();

    store.players = UNSORTED_DATA;
    store.currentRound = 2;
    store.updateScores();
    
    const expectedScores = [ 12, 6, 15, 11 ];

    expect(store.roundScores).toEqual(expectedScores);
  });
});
