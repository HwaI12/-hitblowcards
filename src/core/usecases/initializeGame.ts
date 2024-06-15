import { Card, CardDeck } from '../domain/card';

export interface InitializeGame {
  execute(cardsNum: number, color: 'red' | 'black' | 'all'): Card[];
}

export class InitializeGameImpl implements InitializeGame {
  execute(cardsNum: number, color: 'red' | 'black' | 'all'): Card[] {
    const deck = [...CardDeck.generateDeck(color)];
    const selectedCards: Card[] = [];

    while (selectedCards.length < cardsNum) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      const card = deck.splice(randomIndex, 1)[0];
      selectedCards.push(card);
    }

    return selectedCards;
  }
}
