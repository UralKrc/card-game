import { describe, expect, it } from 'vitest';
import Player from '../Player.vue'
import type { SuitPoints } from '@/stores';
import { mount } from '@vue/test-utils';
import Card from '../Card.vue';

describe('PlayerGrid Component', () => {
  it('renders cards and calculates points correctly', async () => {
    const mockCards = [
      { suit: 'hearts', value: 'A', isHidden: false },
      { suit: 'diamonds', value: '2', isHidden: true },
      { suit: 'spades', value: '3', isHidden: true },
      { suit: 'clubs', value: 'K', isHidden: true },
      { suit: 'diamonds', value: '2', isHidden: true },
    ];

    const mockSuitPoints: SuitPoints = {
      spades: 1,
      diamonds: 2,
      hearts: 3,
      clubs: 4,
    };

    const expectedPoints = mockCards.reduce((totalPoints, card) => {
      if (!card.isHidden) {
        const cardValue = parseInt(card.value) || 0;
        const suitPoint = mockSuitPoints[card.suit as keyof SuitPoints] || 0;
        totalPoints += cardValue * suitPoint;
      }
      return totalPoints;
    }, 0);

    const currentRound = 1;

    const wrapper = mount(Player, {
      props: {
        cards: mockCards,
        currentRound,
        points: expectedPoints,
      },
    });

    const cardComponents = wrapper.findAllComponents(Card);
    expect(cardComponents).toHaveLength(mockCards.length);

    const visibleCards = mockCards.filter(card => !card.isHidden);
    expect(visibleCards).toHaveLength(currentRound);

    const pointsElement = wrapper.find('.font-semibold');
    expect(pointsElement.text()).toContain(`Points: ${expectedPoints}`);

  });
});
