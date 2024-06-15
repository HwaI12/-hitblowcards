import { Router } from 'express';
import { GameController } from '../../../adapters/controllers/gameController';
import { InitializeGameImpl } from '../../../core/usecases/initializeGame';

const router = Router();
const initializeGame = new InitializeGameImpl();
const gameController = new GameController(initializeGame);

router.post('/start', gameController.startGame);

export default router;
