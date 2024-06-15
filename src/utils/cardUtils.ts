import { Card, CardDeck } from '../models/card';

export const generateRandomCards = (count: number, color: 'red' | 'black' | 'all'): Card[] => {
  const deck = [...CardDeck.generateDeck(color)];
  const selectedCards: Card[] = [];

  while (selectedCards.length < count) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck.splice(randomIndex, 1)[0];
    selectedCards.push(card);
  }

  return selectedCards;
};
