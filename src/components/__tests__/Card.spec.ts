import { describe, expect, it } from 'vitest';
import Card from '../Card.vue';
import { mount } from '@vue/test-utils';

describe('Card Component', () => {
  it('renders a hidden card with correct content', async () => {
    // Mount the Card component with a hidden card
    const wrapper = mount(Card, {
      props: {
        card: {
          suit: 'hearts',
          value: 'A',
          isHidden: true
        },
      },
    });

    expect(wrapper.html()).toContain('♦');
  });

  it('renders a visible card with correct content', async () => {
    // Mount the Card component with a visible card
    const wrapper = mount(Card, {
      props: {
        card: {
          suit: 'clubs',
          value: 'A',
          isHidden: false,
        },
      },
    });

    expect(wrapper.html()).toContain('♠');
  });
});
