import { Card } from '../models/card';
import { generateRandomCards } from '../utils/cardUtils';

export interface GameService {
  initializeGame(cardsNum: number, color: 'red' | 'black' | 'all'): Card[];
}

export class GameServiceImpl implements GameService {
  initializeGame(cardsNum: number, color: 'red' | 'black' | 'all'): Card[] {
    return generateRandomCards(cardsNum, color);
  }
}
