import { Request, Response } from 'express';
import { InitializeGame } from '../../core/usecases/initializeGame';

export class GameController {
  private initializeGame: InitializeGame;

  constructor(initializeGame: InitializeGame) {
    this.initializeGame = initializeGame;
  }

  startGame = (req: Request, res: Response): void => {
    const { cards_num, color } = req.body;

    if (![3, 4, 5].includes(cards_num) || !['red', 'black', 'all'].includes(color)) {
      res.status(400).json({ error: 'Invalid difficulty parameters' });
      return;
    }

    const gameCards = this.initializeGame.execute(cards_num, color);
    res.json({ cards: gameCards });
  };
}
