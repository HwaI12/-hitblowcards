import { Router } from 'express';
import { GameController } from '../controllers/gameController';
import { GameServiceImpl } from '../services/gameService';

const router = Router();
const gameService = new GameServiceImpl();
const gameController = new GameController(gameService);

router.post('/start', gameController.startGame);

export default router;
