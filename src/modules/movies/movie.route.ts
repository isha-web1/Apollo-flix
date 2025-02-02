
import express from 'express';
import { MovieController } from './movie.controllers';


const router = express.Router();

router.post('/', MovieController.createMovie);

router.get('/', MovieController.getAllMovies);




export const MovieRoute = router;