import { NUMERIC_VALUES, SUIT_POINTS } from '@/constants';
import { defineStore } from 'pinia';

export type Card = {
  suit: string;
  value: string;
  isHidden: boolean;
};

export type NumericValues = {
  J: number;
  Q: number;
  K: number;
  A: number;
};

export type SuitPoints = {
  spades: number;
  hearts: number;
  diamonds: number;
  clubs: number;
};

const SUITS: string[] = ['spades', 'hearts', 'diamonds', 'clubs'];
const VALUES: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export const useStore = defineStore({
  id: 'game',
  state: (): {
    players: Card[][];
    currentRound: number;
    gameStatus: boolean;
    deck: Card[];
    roundScores: number[];
  } => ({
    players: new Array(4).fill([]),
    currentRound: 0,
    gameStatus: false,
    deck: [],
    roundScores: [],
  }),
  actions: {
    createDeck(): Card[] {
      const deck = SUITS.flatMap((suit) =>
        VALUES.map((value) => ({ suit, value, isHidden: true })),
      );

      return deck.sort(() => Math.random() - 0.5);
    },

    dealCards(deck: Card[], numCards: number): Card[] {
      return deck.splice(-numCards);
    },

    sortPlayerHand(player: Card[]): Card[] {
      const suitsOrder = ['clubs', 'hearts', 'diamonds', 'spades'];
      const valuesOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

      player.sort((a, b) => {
        if (suitsOrder.indexOf(a.suit) - suitsOrder.indexOf(b.suit) !== 0) {
          return suitsOrder.indexOf(a.suit) - suitsOrder.indexOf(b.suit);
        } else {
          return valuesOrder.indexOf(a.value) - valuesOrder.indexOf(b.value);
        }
      });
      
      return player;
    },

    startNewGame() {
      this.currentRound = 1;
      this.gameStatus = true;
      this.roundScores = [];

      this.deck = this.createDeck();

      this.players = this.players.map(() => {
        const hand = this.sortPlayerHand(this.dealCards(this.deck, 5));
        const [firstCard, ...restOfHand] = hand;
        const revealedFirstCard = { ...firstCard, isHidden: false };
        const newHand = [revealedFirstCard, ...restOfHand];

        return newHand;
      });

      this.updateScores();
    },

    dealNextRound() {
      if (this.currentRound >= 5) {
        throw new Error('No more rounds can be dealt');
      }

      this.players.forEach((playerCard) => {
        playerCard[this.currentRound].isHidden = false;
      });

      this.currentRound++;

      if (this.currentRound === 5) {
        this.gameStatus = false;
      }

      this.updateScores();
    },

    getValueofCard(value: string): number {
      const numericValues: NumericValues = {
        J: NUMERIC_VALUES.J,
        Q: NUMERIC_VALUES.Q,
        K: NUMERIC_VALUES.K,
        A: NUMERIC_VALUES.A,
      };

      return numericValues[value as keyof NumericValues] || parseInt(value) || 0;
    },

    updateScores() {
      const suitPoints: SuitPoints = {
        spades: SUIT_POINTS.SPADES,
        diamonds: SUIT_POINTS.DIAMONDS,
        hearts: SUIT_POINTS.HEARTS,
        clubs: SUIT_POINTS.CLUBS,
      };

      this.players.forEach((playerCards, playerIndex) => {
        let totalScore = 0;

        playerCards.forEach((card) => {
          if (!card.isHidden) {
            const cardPoint = this.getValueofCard(card.value);
            const suitPoint = suitPoints[card.suit as keyof SuitPoints];

            totalScore = cardPoint * suitPoint;
          }
        });

        if (this.roundScores[playerIndex]) {
          this.roundScores[playerIndex] += totalScore;
        } else {
          this.roundScores[playerIndex] = totalScore;
        }
      });
    },
  },
});

export type Store = ReturnType<typeof useStore>;