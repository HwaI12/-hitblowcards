import { Request, Response } from 'express';
import { GameService } from '../services/gameService';

export class GameController {
  private gameService: GameService;

  constructor(gameService: GameService) {
    this.gameService = gameService;
  }

  startGame = (req: Request, res: Response): void => {
    const { cards_num, color } = req.body;

    if (![3, 4, 5].includes(cards_num) || !['red', 'black', 'all'].includes(color)) {
      res.status(400).json({ error: 'Invalid difficulty parameters' });
      return;
    }

    const gameCards = this.gameService.initializeGame(cards_num, color);
    res.json({ cards: gameCards });
  };
}
